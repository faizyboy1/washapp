import React from 'react';
import { Text, View, Share, Button } from 'react-native';
import { globalStyles } from '../styling/global-styling';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {HStack, Box as NBBox, NativeBaseProvider, Divider } from "native-base";

/*export default function tellFriend() {
    return (
        <View style={globalStyles.tellHeader}>
            <Text style={globalStyles.tellSectionTitle}>Your Friends Deserve The best, Share our App with them!</Text>
            <NativeBaseProvider>
                <HStack space={20} alignItems="center" justifyContent="center" mt={20}>
                    <Icon name="twitter" size={40} color="#08a0e9" />
                    <Icon name="instagram" size={40} color="#515BD4" />
                    <Icon name="whatsapp" size={40} color="#25D366" />
                </HStack>
            </NativeBaseProvider>
        </View>
    );
}*/

const Box = (props) => {
    return <NBBox px={6} py={2} m={7} borderRadius="md" bg="#08a0e9" {...props} />;
};

const tellFriend = () => {
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <View style={globalStyles.tellHeader}>
            <Text style={globalStyles.tellSectionTitle}>Your Friends Deserve The best, Share our App with them!</Text>
            <NativeBaseProvider>
                <View>
                    <Divider bg="#EBEBE4"/>
                </View>
                <Box>
                    <HStack space={5}>
                        <Icon onPress={onShare} name="share" size={30} color="#fff" />
                        <Text onPress={onShare} style={globalStyles.shareText}>Share App!</Text>
                    </HStack>
                </Box>
            </NativeBaseProvider>
        </View>
    );
};

export default tellFriend;