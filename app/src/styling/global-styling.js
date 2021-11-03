import React from 'react';
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    textAlignment: {
      textAlign: "left"
    },
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    rescheduleIcon:{
        color: "#0d9488",
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    loginView:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    termsHeader: {
        padding: 25,
        flex: 1,
        backgroundColor: '#fff',
    },
    tellHeader:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    termSectionTitle: {
      fontWeight: 'bold',
      fontSize: 20,
        textAlign: 'center',
        paddingBottom: 10,
    },
    tellSectionTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        paddingBottom: 10,
        paddingTop: 40,
        color: '#115e59'
    },
    shareText: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        color: "#fff"
    },
    termsParagraph: {
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'justify',
        marginBottom: 35
   },
    inputView:{
        justifyContent: 'center',
        justifyItems: 'center',
        marginBottom:20,
        padding:25,
        flex: 1
    },
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom:40
    },
    inputText:{
        height:50,
        color:"white"
    },
    loginBtn:{
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        marginTop:40,
        marginBottom:10
    },
});