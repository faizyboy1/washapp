import React from 'react';
import {Image, View, StyleSheet, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import colors from '../config/colors';
import AppText from '../AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem(props) {
  // This is listitem card you can say that. Which is use for various reasons to show the product,for profile
  //and etc this is swipeable but it will work only when we pass renderRightActions this component will appea
  //when we will swipe the item.
  const {image, IconComponent, title, subTitle, onPress, renderRightActions} =
    props;
  return (
    // <GestureRecognizer onSwipeLeft={renderRightActions}>
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {/* Some time we will show and image but some time an icon. we can pass an Icon component. to appear 
            or we can pass image path to appear there is title and subtile as well to show. */}
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.titleContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}{' '}
              </AppText>
            )}
          </View>
          <Icon color={colors.medium} name={'chevron-right'} size={25} />
        </View>
      </TouchableHighlight>
    </Swipeable>
    //</GestureRecognizer>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  titleContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '600',
  },
  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;
