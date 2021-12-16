import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../config/colors';

function ListItemSeprator() {
  // in the flatList tag we always have to show the seprator to make our list of item better so for that purpose
  //we will use as a seprator
  return <View style={styles.seprator} />;
}
const styles = StyleSheet.create({
  seprator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.light,
  },
});

export default ListItemSeprator;
