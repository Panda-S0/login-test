import { useEffect, useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import * as WebBrowser from "expo-web-browser"
import * as Google from "expo-auth-session/providers/google"

import Inputext from "../components/inputext"
import checkUser from "../Data/checkUsers.js"
import Inpupass from "../components/inputpass.js"
import Redtext from "../components/redtext.js"
import colors from "../assets/colors.js"
import CoolButton from "../components/CoolButton.js"
import {
  getUserProfile,
  storeToken,
  checkIfLoggedIn,
} from "../Data/handleToken.js"

const webClientId =
  "801728376972-s03kd110mifa09el0fevc8peqf2meq9d.apps.googleusercontent.com"
const iosClientId =
  "801728376972-ufsnf1iov77pju5vnaqmg9cid57t7hd5.apps.googleusercontent.com"
const androidClientId =
  "801728376972-o1noprdhq2ugpudevpp3pv30bqns7oja.apps.googleusercontent.com"

WebBrowser.maybeCompleteAuthSession()

const space =
  "                                                                                                    "

function LogInScreen({ navigation }) {
  checkIfLoggedIn(navigation)
  const config = {
    webClientId,
    iosClientId,
    androidClientId,
  }
  const [request, response, promptAsync] = Google.useAuthRequest(config)

  const checkToken = async () => {
    if (response?.type === "success") {
      const { authentication } = response
      const token = authentication?.accessToken
      console.log("Authentication Object:", authentication)
      storeToken(token)
      data = await getUserProfile(token)
      navigation.navigate("HomePageScreen", { usr: data.name })
    }
  }

  useEffect(() => {
    checkToken()
  }, [response])

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
          <View style={styles.signUpBtns}>
            <CoolButton
              onPress={SignUp}
              btnclr={"white"}
              txtclr={colors.background[6]}
              btnStyle={styles.signBtn}
            >
              Sign up
            </CoolButton>
            <CoolButton
              onPress={promptAsync}
              btnStyle={styles.googleBtn}
              btnclr={"rgb(0,156,255)"}
              Icon={
                <Ionicons
                  name="logo-google"
                  size={24}
                  color="white"
                ></Ionicons>
              }
            >
              Google
            </CoolButton>
          </View>
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
  signUpBtns: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
  signBtn: {
    width: "45%",
    flexDirection: "row",
  },
  googleBtn: {
    width: "45%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
})
