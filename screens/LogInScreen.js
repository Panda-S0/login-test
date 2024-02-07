import { useState } from "react"
import {
  Text,
  Button,
  View,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native"

//importing the needed components
import Inputext from "../components/inputext"
import checkUser from "../Data/checkUsers.js"

//main login screen funtion
function LogInScreen({ onChangeScreen, usr }) {
  const [currentUserName, setCurrentUserName] = useState(usr.username) //a username variable
  const [currentPassword, setCurrentPassword] = useState(usr.password) //a password variable
  const [Valid, setValid] = useState(true) //a 'valid' variable to show a warning text if the username or password are wrong
  const [currentUser] = useState({
    username: usr.username,
    password: usr.password,
    user_type: "admin",
  }) //a variable for the current user to send to 'checkUser' function

  // a function to update the 'currentUser' variable whenever the text changes in the username text box
  function addUserName(Content) {
    setCurrentUserName(Content)
    currentUser.username = Content
  }

  // a function to update the 'currentUser' variable whenever the text changes in the password text box
  function addPassword(Content) {
    setCurrentPassword(Content)
    currentUser.password = Content
  }

  //a function to switch to the sign up screen if the button is pressed
  function SignUp() {
    onChangeScreen("signup")
  }

  //a function to check for the user and go to the home page if its corrent
  //and change the 'valid' variable to false if the username or password are wrong
  function HomePage() {
    if (checkUser(currentUser)) {
      onChangeScreen("homepage", currentUser.username)
    } else {
      setValid(false)
    }
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1, paddingBottom: 20 }}
        behavior="position"
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Text>Log In</Text>
          <Inputext
            placeholder="Username"
            funk={addUserName}
            value={currentUserName}
          />
          <Inputext
            placeholder="Password"
            funk={addPassword}
            value={currentPassword}
          />
          {!Valid && (
            <Text style={{ color: "red" }}>
              wrong username or password
            </Text>
          )}
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
