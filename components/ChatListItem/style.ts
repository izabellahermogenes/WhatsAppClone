import React from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback, } from 'react-native';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
        padding: 10,
        flex: 1,
    },
    leftContainer: {
        flexDirection: 'row',
        flex: 1, 
        alignItems: 'flex-start', 
    },
    midContainer: {
        flex: 1, 
        paddingVertical: 0, 
        marginLeft: 10, 
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    avatarPlaceholder: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarInitial: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#666',
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 20, 
        marginBottom: 2, 
    },
    lastMessage: {
        flex: 1,
        fontSize: 16,
        color: 'grey',
        lineHeight: 25, 
        marginRight: 10,
    },
    time: {
        fontSize: 14,
        color: 'grey',
        textAlign: 'right',
        marginLeft: 10,
    },
});

export default styles;