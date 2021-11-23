import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {AppContext} from '../utils/AppContext';
import {Image, Text, View} from 'native-base';
import {useTranslation} from 'react-i18next';
import Login from './auth/Login';

const slides = [
  {
    key: 'one',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../assets/images/onboarding/1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../assets/images/onboarding/2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../assets/images/onboarding/3.png'),
    backgroundColor: '#22bcb5',
  },
];

export default () => {
  const {onboarding, setOnboarding} = useContext(AppContext);
  const {t} = useTranslation();
  const _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        {/*<Image source={item.image} />*/}
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setOnboarding(true);
  };

  if (onboarding) {
    return <Login />;
  }

  return (
    <AppIntroSlider
      skipLabel={t('Skip')}
      nextLabel={t('Next')}
      prevLabel={t('Previous')}
      showSkipButton={true}
      renderItem={_renderItem}
      data={slides}
      onDone={_onDone}
      onSkip={_onDone}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 32,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
});
