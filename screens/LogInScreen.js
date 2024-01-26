import { useState } from "react"
import {
  Text,
  TextInput,
  Button,
  View,
  StyleSheet,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native"

import Inputext from "../components/inputext"
import users from "../Data/Users.js"

function LogInScreen({ onChangeScreen }) {
  function SignUp() {
    onChangeScreen("signup")
  }
  function HomePage() {
    onChangeScreen("homepage")
  }
  function shonames() {
    //console.log(users)
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1, paddingBottom: 20 }}
        behavior="position"
      >
        <View style={styles.rootContainer}>
          <Text>Log In</Text>
          <Inputext placeholder="Username" />
          <Inputext placeholder="Password" />
          <Button
            style={{ marginTop: 100 }}
            color="#ff5c5c"
            title="Log In"
            onPress={HomePage}
          ></Button>
          <Pressable
            onPress={SignUp}
            android_ripple={{ color: "red" }}
            style={{
              marginTop: 10,
              padding: 10,
              backgroundColor: "pink",
            }}
          >
            <Text>Make an account</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default LogInScreen

let color = "#B41FB2"

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  infoInput: {
    height: 50,
    width: "90%",
    fontSize: 32,
    borderTopColor: color,
    borderRightColor: color,
    borderLeftColor: color,
    borderBottomColor: "#50234F",
    borderWidth: 4,
    color: "blue",
    marginVertical: 8,
    paddingLeft: 10,
    borderRadius: 10,
  },
})
