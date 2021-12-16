import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../config/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

function ListItemDeleteAction(props) {
  // basically we have created this component so we can delete any product or list item. we will also provide
  // the onPress button that will be the action when we press the button or icon.
  const {onPress} = props;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon name={'trash'} size={35} color={colors.white} />
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListItemDeleteAction;
