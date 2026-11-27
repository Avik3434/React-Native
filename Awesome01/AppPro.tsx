import React, { JSX } from 'react';

import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    useColorScheme,
    Appearance,
    Pressable,
} from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'

    return (
        <>
            <View style={styles.container}>
                <Text style={isDarkMode ? styles.WhiteText : styles.BlackText}>Hello world</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#666666'
    },
    WhiteText: {
        color: '#ffffff',
        backgroundColor: '#7a28c6',
        padding: 24,
        borderRadius: 30,
        fontSize: 20
    },
    BlackText: {
        color: '#000000',
        backgroundColor: '#ffffff',
        padding: 24,
        borderRadius: 30,
        fontSize: 20
    },
    pressable: {
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
        padding: 20,
        borderRadius: 30
    }
})

export default AppPro;