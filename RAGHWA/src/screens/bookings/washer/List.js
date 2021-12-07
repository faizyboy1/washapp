import React from "react"
import {
    Box,
    FlatList,
    Heading,
    HStack,
    VStack,
    Text,
    Spacer,
    Center,
    NativeBaseProvider,
} from "native-base"
export const Example = () => {
    const data = [
        {
            id: "",
            fullName: "Aafreen Khan",
            timeStamp: "12:47 PM",
            recentText: "",

        },

    ]
    return (
        <Box
            w={{
                base: "100%",
                md: "25%",
            }}
        >
            <Heading fontSize="xl" p="4" pb="3">
                Inbox
            </Heading>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Box
                        borderBottomWidth="1"
                        _dark={{
                            borderColor: "gray.600",
                        }}
                        borderColor="coolGray.200"
                        pl="4"
                        pr="5"
                        py="2"
                    >
                        <HStack space={3} justifyContent="space-between">

                            <VStack>
                                <Text
                                    _dark={{
                                        color: "warmGray.50",
                                    }}
                                    color="coolGray.800"
                                    bold
                                >
                                    {item.fullName}
                                </Text>
                                <Text
                                    color="coolGray.600"
                                    _dark={{
                                        color: "error.500",
                                    }}
                                >
                                    {item.recentText}
                                </Text>
                            </VStack>
                            <Spacer />
                            <Text
                                fontSize="xs"
                                _dark={{
                                    color: "warmGray.50",
                                }}
                                color="coolGray.800"
                                alignSelf="flex-start"
                            >
                                {item.timeStamp}
                            </Text>
                        </HStack>
                    </Box>
                )}
                keyExtractor={(item) => item.id}
            />
        </Box>
    )
}

export default () => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
        </NativeBaseProvider>
    )
}
