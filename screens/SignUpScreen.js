import { useState } from 'react';
import { Text, TextInput, Button, View, StyleSheet, Pressable, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';


function LogInScreen({ onChangeScreen }) {

    function LogIn() {
        onChangeScreen('login');
    }


    return (
        <ScrollView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{ flex: 1, paddingBottom: 20 }} behavior='position'>
                <View style={styles.rootContainer}>
                    <Pressable
                        onPress={LogIn}
                        android_ripple={{ color: 'red' }}
                        style={{ marginTop: 10, padding: 10, backgroundColor: 'pink' }}
                    >
                        <Text>Log In Screen</Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default LogInScreen;

let color = '#B41FB2'

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100
    },
    numberInput: {
        height: 50,
        width: '90%',
        fontSize: 32,
        borderTopColor: color,
        borderRightColor: color,
        borderLeftColor: color,
        borderBottomColor: '#50234F',
        borderWidth: 4,
        color: 'blue',
        marginVertical: 8,
        paddingLeft: 10,
        borderRadius: 10,
    },
});