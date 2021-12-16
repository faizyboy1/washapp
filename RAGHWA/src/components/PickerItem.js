import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import AppText from './AppText';

function PickerItem(props) {
  // this component is use in renderItem in Flat list we have made this a touchable with onpress event. it will represent
  //an item in flat list
  const {/*onPress,*/ item} = props;
  console.log({item});
  return (
    <TouchableOpacity /*onPress={onPress}*/>
      <AppText style={styles.text}>{item.address}</AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
export default PickerItem;
