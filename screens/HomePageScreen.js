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

function HomePageScreen({ onChangeScreen, usr }) {
  function LogIn() {
    onChangeScreen("login")
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1, paddingBottom: 20 }}
        behavior="position"
      >
        <View style={styles.rootContainer}>
          <Text>HOME PAGE</Text>
          <Text>you are {usr}</Text>
          <Button
            style={{ marginTop: 100 }}
            color="#ff5c5c"
            title="Sign Out"
            onPress={LogIn}
          ></Button>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default HomePageScreen

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
