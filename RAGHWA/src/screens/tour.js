import React from 'react';
import {
    Animated,
    Image,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

// constants
export const onboarding1 = require('../assets/images/onboarding-1.png');
export const onboarding2 = require('../assets/images/onboarding-2.png');
export const onboarding3 = require('../assets/images/onboarding-3.png');

import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const onBoardings = [
    {
        title: 'Car Washing',
        description: 'Wash Your Car with us to get the best Service!',
        img: onboarding1,
    },
    {
        title: 'Car Washing',
        description: 'Wash Your Car with us to get the best Service!',
        img: onboarding2,
    },
    {
        title: 'Car Washing',
        description: 'Wash Your Car with us to get the best Service!',
        img: onboarding3,
    },
];

const OnBoarding = ({navigation}) => {
    const [completed, setCompleted] = React.useState(false);

    const scrollX = new Animated.Value(0);

    React.useEffect(() => {
        scrollX.addListener(({value}) => {
            if (Math.floor(value / width) === onBoardings.length - 1) {
                setCompleted(true);
            }
        });

        return () => scrollX.removeListener();
    }, []);

    // Render

    function renderContent() {
        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEnabled
                decelerationRate={0}
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: false},
                )}>
                {onBoardings.map((item, index) => (
                    <View
                        //center
                        //bottom
                        key={`img-${index}`}
                        style={styles.imageAndTextContainer}>
                        <View
                            style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={item.img}
                                resizeMode="cover"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                        </View>
                        <View
                            style={{
                                position: 'absolute',
                                bottom: '10%',
                                left: 40,
                                right: 40,
                            }}>
                            <Text
                                style={{
                                    textAlign: 'center',
                                }}>
                                {item.title}
                            </Text>

                            <Text
                                style={{
                                    textAlign: 'center',
                                    marginTop: 8,
                                }}>
                                {item.description}
                            </Text>
                        </View>
                        {/* Button */}
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                left: 0,
                                bottom: 0,
                                width: 100,
                                height: 60,
                                paddingRight: 20,
                                justifyContent: 'center',
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0,
                                borderBottomRightRadius: 30,
                                borderTopRightRadius: 30,
                                backgroundColor: '#0d9488',
                            }}
                            onPress={() => navigation.navigate('navigationStack')}>
                            <Text style={{color: 'white', textAlign: 'right'}}>
                                {completed ? "Let's Go" : 'Skip'}
                            </Text>
                        </TouchableOpacity>
                        {!completed && (
                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    right: 0,
                                    bottom: 0,
                                    width: 100,
                                    height: 60,
                                    paddingLeft: 20,
                                    justifyContent: 'center',
                                    borderTopLeftRadius: 30,
                                    borderBottomLeftRadius: 30,
                                    borderBottomRightRadius: 0,
                                    borderTopRightRadius: 0,
                                    backgroundColor: '#0d9488',
                                }}
                                onPress={() => {
                                    Animated.event(
                                        [{nativeEvent: {contentOffset: {x: scrollX}}}],
                                        {useNativeDriver: false},
                                    );
                                }}>
                                <Text style={{color: 'white'}}>Next</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                ))}
            </Animated.ScrollView>
        );
    }

    function renderDots() {
        const dotPosition = Animated.divide(scrollX, width);

        return (
            <View style={styles.dotsContainer}>
                {onBoardings.map((item, index) => {
                    const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp',
                    });

                    const dotSize = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [8, 17, 8],
                        extrapolate: 'clamp',
                    });

                    return (
                        <Animated.View
                            key={`dot-${index}`}
                            opacity={opacity}
                            style={[styles.dot, {width: dotSize, height: dotSize}]}
                        />
                    );
                })}
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>{renderContent()}</View>
            <View style={styles.dotsRootContainer}>{renderDots()}</View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    imageAndTextContainer: {
        width: width,
    },
    dotsRootContainer: {
        position: 'absolute',
        bottom: height > 700 ? '20%' : '16%',
    },
    dotsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24 / 2,
        marginBottom: 24 * 3,
        height: 24,
    },
    dot: {
        borderRadius: 12,
        backgroundColor: '#0d9488',
        marginHorizontal: 12 / 2,
    },
});

export default OnBoarding;
