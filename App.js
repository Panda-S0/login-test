import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { StyleSheet, SafeAreaView } from "react-native"

//importing all the screens
import LogInScreen from "./screens/LogInScreen"
import SignUpScreen from "./screens/SignUpScreen"
import HomePageScreen from "./screens/HomePageScreen"

export default function App() {
  const [screen, setccreen] = useState("login") //a variable to select which screen to show
  const [user, setuser] = useState({ username: "", password: "" }) //a variable to give the current user to the next screen
  let Screen = <LogInScreen onChangeScreen={ChangeScreen} /> //a variable for the screen itself

  //the function that sets the screen and passes the user
  function ChangeScreen(S, u) {
    setccreen(S)
    setuser(u)
  }

  if (screen == "login") {
    Screen = <LogInScreen onChangeScreen={ChangeScreen} usr={user} />
  }
  if (screen == "signup") {
    Screen = <SignUpScreen onChangeScreen={ChangeScreen} />
  }
  if (screen == "homepage") {
    Screen = <HomePageScreen onChangeScreen={ChangeScreen} usr={user} />
  }

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffccee" }}>
        {Screen}
      </SafeAreaView>
    </>
  )
}
