import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from './config/colors';

function AppIcon(props) {
  // this component is use to show icon with some background color. and background designing. we have also provide
  // the default values in props
  const {
    size = 50,
    iconColor = colors.white,
    name,
    backgroundColor = colors.black,
  } = props;
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icon name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default AppIcon;
