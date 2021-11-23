import React from 'react';
import {Share, StatusBar, View} from 'react-native';
import {globalStyles} from '../assets/style/global-styling';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Box as NBBox, Divider, HStack, Text} from 'native-base';

const Box = props => {
  return (
    <NBBox px={6} py={2} m={7} borderRadius="md" bg="#14b8a6" {...props} />
  );
};

const share = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'WashApp is your best choice to clean your car!',
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
      <StatusBar style={{backgroundColor: '#fff'}} />
      <Text style={globalStyles.tellSectionTitle}>
        Your Friends Deserve The best, Share our App with them!
      </Text>
      {/*<Text fontFamily="body" fontWeight={600} fontStyle="normal">*/}
      <Text>اخبر زملائك</Text>
      <View>
        <Divider bg="#115e59" />
      </View>
      <Box>
        <HStack space={5}>
          <Icon onPress={onShare} name="share" size={30} color="#fff" />
          <Text onPress={onShare} style={globalStyles.shareText}>
            Share App!
          </Text>
        </HStack>
      </Box>
    </View>
  );
};

export default share;
