import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { StyleSheet, SafeAreaView } from "react-native"

import LogInScreen from "./screens/LogInScreen"
import SignUpScreen from "./screens/SignUpScreen"
import HomePageScreen from "./screens/HomePageScreen"

export default function App() {
  const [screen, setccreen] = useState("login")
  const [user, setuser] = useState(null)
  let Screen = <LogInScreen onChangeScreen={ChangeScreen} />

  function ChangeScreen(S, u) {
    setccreen(S)
    setuser(u)
  }
  if (screen == "login") {
    Screen = <LogInScreen onChangeScreen={ChangeScreen} />
  }
  if (screen == "signup") {
    Screen = <SignUpScreen onChangeScreen={ChangeScreen} />
  }
  if (screen == "homepage") {
    Screen = <HomePageScreen onChangeScreen={ChangeScreen} usr={user} />
  }
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffccee" }}>
        {Screen}
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
