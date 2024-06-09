import { useState } from "react"
import {
  StyleSheet,
  Text,
  Button,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native"

import Inputext from "../components/inputext"
import checkUser from "../Data/checkUsers.js"
import Inpupass from "../components/inputpass.js"
import Redtext from "../components/redtext.js"
import colors from "../assets/colors.js"
import CoolButton from "../components/CoolButton.js"

const space =
  "                                                                                                    "

function LogInScreen({ navigation }) {
  const [currentUserName, setCurrentUserName] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")
  const [Valid, setValid] = useState(true)
  const [currentUser] = useState({
    username: "",
    password: "",
    user_type: "admin",
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  function addUserName(Content) {
    setCurrentUserName(Content)
    currentUser.username = Content
  }

  function addPassword(Content) {
    setCurrentPassword(Content)
    currentUser.password = Content
  }

  function SignUp() {
    navigation.navigate("SignUpScreen")
  }

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
          <Text style={styles.texts}>Log In</Text>
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
          {!Valid && (
            <Redtext
              text={"wrong username or password"}
              styler={{ marginBottom: 10 }}
            />
          )}
          <View style={{ height: 20 }}></View>
          <CoolButton onPress={HomePage}>Log in</CoolButton>
          <View style={{ height: 40 }} />
          <View style={styles.textcontainer}>
            <Text style={styles.saparatext}>{space}</Text>
            <Text style={{ color: "#cccccc" }}>
              Don't have an account
            </Text>
            <Text style={styles.saparatext}>{space}</Text>
          </View>
          <CoolButton
            onPress={SignUp}
            btnclr={"white"}
            txtclr={colors.background[6]}
          >
            Sign up
          </CoolButton>
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
    alignItems: "center",
    marginTop: 100,
  },
  texts: { color: "white", fontSize: 18 },
  saparatext: {
    color: "#cccccc",
    textDecorationLine: "line-through",
    flex: 1,
  },
  textcontainer: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },
})
