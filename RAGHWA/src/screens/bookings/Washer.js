import React, {useContext} from "react"
import {Box, FlatList, HStack, Text, VStack,} from "native-base"
import {AppContext} from "../../utils/AppContext";
import Icon from "react-native-vector-icons/dist/FontAwesome5";
import {globalStyles} from "../../assets/style/global-styling";
import {useNavigation} from "@react-navigation/native";

export default () => {

    const {user} = useContext(AppContext);
    const navigator = useNavigation()
    const renderBookings = () => {

        if (!user.washer_bookings?.length) return;

        return (

            <FlatList
                data={user.washer_bookings}
                renderItem={({item}) => (
                    <Box
                        borderBottomWidth="1"
                        _dark={{
                            borderColor: "gray.600",
                        }}
                        borderColor="coolGray.400"
                        pl="4"
                        pr="5"
                        py="2"
                        flexDirection="row" alignItems='center' justifyContent="space-between" p={3}
                    >

                    <HStack alignItems='center' space={4}>
                        <Text fontSize={20}> #{item.id}</Text>
                        <VStack>
                        <Text> {item.slot.slot_date}</Text>
                        <Text> {item.slot.name}</Text>

                        </VStack>
                        <Text>
                            {item.status.name}
                        </Text>
                    </HStack>
                        <Icon size={20} name="edit" style={globalStyles.rescheduleIcon}
                              onPress={() => navigator.navigate('Details',item)}/>
                        </Box>

                )}
                keyExtractor={(item) => item.id}
            />

        )

        // });
    }

    return (
        <Box flex={1} px="3">
            {renderBookings()}
        </Box>
    )
}
