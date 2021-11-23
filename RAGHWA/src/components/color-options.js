import React from 'react';
import PropTypes from 'prop-types';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'native-base';

const {width} = Dimensions.get('window');

const getContrastColor = hex =>
  parseInt(hex.substring(1), 16) > 0xffffff / 2 ? '#000000' : '#FFFFFF';

const Icon = props => {
  const {icon, color} = props;
  if (icon) {
    return icon;
  }
  return (
    <Text
      style={{color: getContrastColor(color), fontSize: 20}}
      adjustsFontSizeToFit>
      ✔︎
    </Text>
  );
};

const ColorOption = props => {
  const {icon, color, isSelected, scaleToWindow, onColorChange} = props;
  let scaledWidth = width * 0.025;
  return (
    <TouchableOpacity
      onPress={() => onColorChange(color)}
      style={[
        styles.colorOption,
        {backgroundColor: color},
        scaleToWindow && {
          width: width * 0.07,
          height: width * 0.07,
          marginHorizontal: scaledWidth,
          marginVertical: scaledWidth,
          borderRadius: scaledWidth * 2,
        },
      ]}>
      {isSelected && <Icon color={color} icon={icon} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  colorOption: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 15,
    elevation: 5,
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.25,
  },
});

ColorOption.propTypes = {
  icon: PropTypes.node,
  color: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  scaleToWindow: PropTypes.bool.isRequired,
  onColorChange: PropTypes.func.isRequired,
};

export default ColorOption;
