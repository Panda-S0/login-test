import { useState } from "react"
import {
  StyleSheet,
  Text,
  Button,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native"

//importing the needed components
import Inputext from "../components/inputext"
import checkUser from "../Data/checkUsers.js"
import Inpupass from "../components/inputpass.js"
import Redtext from "../components/redtext.js"

//main login screen funtion
function LogInScreen({ navigation }) {
  //pass the username and pass from sign up to write them when singed up
  const [currentUserName, setCurrentUserName] = useState("") //a username variable
  const [currentPassword, setCurrentPassword] = useState("") //a password variable
  const [Valid, setValid] = useState(true) //a 'valid' variable to show a warning text if the username or password are wrong
  const [currentUser] = useState({
    username: "",
    password: "",
    user_type: "admin",
  }) //a variable for the current user to send to 'checkUser' function

  //to show and hide the password
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

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
    navigation.navigate("SignUpScreen")
  }

  //a function to check for the user and go to the home page if its corrent
  //and change the 'valid' variable to false if the username or password are wrong
  function HomePage() {
    if (checkUser(currentUser)) {
      setValid(true)
      navigation.navigate("HomePageScreen", { usr: currentUser.username })
    } else {
      setValid(false)
    }
  }

  return (
    <ScrollView style={styles.mainView}>
      <KeyboardAvoidingView
        style={styles.keyboardavoidingView}
        behavior="position"
      >
        <View style={styles.innerView}>
          <Text>Log In</Text>
          <Inputext
            placeholder="Username"
            funk={addUserName}
            value={currentUserName}
          />
          <Inpupass
            secureTextEntry={!showPassword}
            placeholder="Password"
            funk={addPassword}
            value={currentPassword}
            showPassword={showPassword}
            onPress={handleTogglePasswordVisibility}
          />
          {!Valid && <Redtext text={"wrong username or password"} />}
          <Button color="orange" title="Log In" onPress={HomePage} />
          <Button title="Make an account" onPress={SignUp} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default LogInScreen

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  keyboardavoidingView: { flex: 1, paddingBottom: 20 },
  innerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
})
