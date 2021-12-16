import React, {useState} from 'react';
import {
  Button,
  Modal,
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AppIcon from './AppIcon';
import colors from './config/colors';
import ListItem from './lists/ListItem';
import ListItemDeleteAction from './lists/ListItemDeleteAction';
import ListItemSeprator from './lists/ListItemSeprator';
import PickerItem from './PickerItem';
import Screen from './Screen';

// import Modal from 'react-native-modal';

function ModalFavouriteAddresses(props) {
  // this is a picker means we can choose any option from different options. By clicking on picker a screen will
  //slide up from bottom with all the options.

  // these are the props can be received
  const {
    icon,
    item,
    numberOfColumns,
    PickerItemComponent = PickerItem,
    // onSelectItem,
    width = '100%',
  } = props;
  console.log({item});
  const [modalVisible, setModalVisible] = useState(false);
  const deleteHandler = item => {
    setMessages(item.filter(m => m.id != item.id));
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        {/* if the icon name is received in the props then it will appear otherwise there will be nothing */}
        {icon && (
          <Icon name={icon} size={25} color="black" style={styles.icon} />
        )}
      </TouchableWithoutFeedback>
      {/* the modal is the tag to use when we want to show the pop up screen. the appearance depends on the state
  modalVisible that will change when we will tap on the touchable area of picker. there is also an additional
  property of modal animationType that will help us in how we can show our screen */}
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          {/* this button will also set the state to false so that modal can be disappear again.  */}
          <Button title="Close" onPress={() => setModalVisible(false)} />
          {/* flatList is used to show all the options. we are passing PickerItem as a renderItem
          in this property(renderItem) we can show  how our data can be shown or behave at run time. PickerItem
          is nothing more than a simple component which has a text tag wrappedup with touchable opacity. we have
          to pass the onPress event from outside just like we are doing below. inside onPress we are calling the
          function/event and passing an argument basically that item which is selected. and that fuction/event
          setting the selectedItem that we passing the in the props and receving above */}
          <FlatList
            data={item}
            keyExtractor={item => item.id.toString()}
            numColumns={numberOfColumns}
            renderItem={({item}) => (
              <ListItem
                title={item.name}
                // subTitle={item.description}
                // image={item.image}
                // onPress={() => setModalVisible(false)}
                // This prop is use to display when we swipe the listitem card because listitem is wrapped up is swipe tag and this prop
                //will make the item swipeable
                renderRightActions={() => (
                  <ListItemDeleteAction onPress={() => deleteHandler(item)} />
                )}
                IconComponent={
                  <AppIcon
                    name="map-marker"
                    backgroundColor={'#0d9488'}
                    iconColor={colors.danger}
                  />
                }
              />
            )}
            ItemSeparatorComponent={ListItemSeprator}
          />
        </Screen>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
});
export default ModalFavouriteAddresses;
