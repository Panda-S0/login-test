import { useState } from "react"
import {
  Alert,
  Text,
  View,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  Button,
} from "react-native"

import addUser from "../Data/Users.js"
import Inputext from "../components/inputext"

function LogInScreen({ onChangeScreen }) {
  const [currentUsername, setCurrentUsername] = useState("")
  const [currentFirst_name, setCurrentFirst_name] = useState("")
  const [currentLast_name, setCurrentLast_name] = useState("")
  const [currentMobile, setCurrentMobile] = useState("")
  const [currentEmail, setCurrentEmail] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")
  const [currentPassword_confirmation, setCurrentPassword_confirmation] =
    useState("")

  const [currentUser, setCurrentUser] = useState({
    username: "",
    first_name: "",
    last_name: "",
    mobile: "",
    email: "",
    status: 0,
    password: "",
    password_confirmation: "",
  })

  //this part will be used after everything is set
  //to put everything together and in the Users list

  function addUsername(Content) {
    setCurrentUsername(Content)
    currentUser.username = Content
  }
  function addFirst_name(Content) {
    setCurrentFirst_name(Content)
    currentUser.first_name = Content
  }
  function addLast_name(Content) {
    setCurrentLast_name(Content)
    currentUser.last_name = Content
  }
  function addMobile(Content) {
    setCurrentMobile(Content)
    currentUser.mobile = Content
  }
  function addEmail(Content) {
    setCurrentEmail(Content)
    currentUser.email = Content
  }
  function addPassword(Content) {
    setCurrentPassword(Content)
    currentUser.password = Content
  }
  function addPassword_confirmation(Content) {
    setCurrentPassword_confirmation(Content)
    currentUser.password_confirmation = Content
  }

  function CheckForEmpty() {
    if (
      currentUser.email == "" ||
      currentUser.username == "" ||
      currentUser.first_name == "" ||
      currentUser.last_name == "" ||
      currentUser.mobile == "" ||
      currentUser.password == "" ||
      currentUser.password_confirmation == ""
    ) {
      Alert.alert("Invalid input", "You can't leave something empty", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ])
    } else {
      onChangeScreen("login")
    }
  }

  function SignUp() {
    //console.log(currentUser)
    addUser(currentUser)
    onChangeScreen("login")
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1, paddingBottom: 20 }}
        behavior="position"
      >
        <View style={styles.rootContainer}>
          <Inputext
            placeholder="Username"
            funk={addUsername}
            value={currentUsername}
          />
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Inputext
              style={{ width: "45%" }}
              placeholder="name"
              funk={addFirst_name}
              value={currentFirst_name}
            />
            <Inputext
              style={{ width: "45%" }}
              placeholder="surname"
              funk={addLast_name}
              value={currentLast_name}
            />
          </View>
          <Inputext
            placeholder="number"
            funk={addMobile}
            value={currentMobile}
          />
          <Inputext
            placeholder="email"
            funk={addEmail}
            value={currentEmail}
          />
          <Inputext
            placeholder="password"
            funk={addPassword}
            value={currentPassword}
          />
          <Inputext
            placeholder="confirm password"
            funk={addPassword_confirmation}
            value={currentPassword_confirmation}
          />
          <Pressable
            onPress={SignUp}
            android_ripple={{ color: "red" }}
            style={{
              marginTop: 10,
              padding: 10,
              backgroundColor: "pink",
            }}
          >
            <Text>Log In Screen</Text>
          </Pressable>

          <Button title="login" onPress={CheckForEmpty} />
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
