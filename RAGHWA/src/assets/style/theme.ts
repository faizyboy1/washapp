import {extendTheme} from 'native-base';

export const customTheme = extendTheme({
    fontConfig: {
        Almarai: {
            100: {
                normal: 'Almarai-Light',
                italic: 'Almarai-LightItalic',
            },
            200: {
                normal: 'Almarai-Light',
            },
            300: {
                normal: 'Almarai-Light',
            },
            400: {
                normal: 'Almarai-Regular',
            },
            500: {
                normal: 'Almarai-Regular',
            },
            600: {
                normal: 'Almarai-Bold',
            },
            700: {
                normal: 'Almarai-Bold',
            },
            900: {
                normal: 'Almarai-ExtraBold',
            },
        },
    },

    // Make sure values below matches any of the keys in `fontConfig`
    fonts: {
        heading: 'Almarai',
        body: 'Almarai',
        mono: 'Almarai',
    },
    components: {
        Button: {
            baseStyle: {
                _text: {
                    fontFamily: "body",
                },
            }
        },
        Text: {
            baseStyle: {
                fontFamily: "body",
                fontWeight: 600,
                fontStyle: "normal"
            },
            defaultProps: {},
            variants: {
                textRight: () => {
                    return {
                        textAlign: 'right',
                    };
                },
                sizes: {},
            },
        },
    },


});

// 2. Get the type of the CustomTheme
type CustomThemeType = typeof customTheme;

// 3. Extend the internal NativeBase Theme
declare module 'native-base' {
    interface ICustomTheme extends CustomThemeType {
    }
}
