import React from 'react';
import {Text} from 'react-native';
import defaultStyle from './config/style';

function AppText(props) {
  const {children, style, ...otherProps} = props;
  return (
    // This is a text component this is you to detect the OS like android or ios to set the font and stting accordingly
    <Text style={[defaultStyle.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;
