import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { StyleSheet, SafeAreaView } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

//importing all the screens
import LogInScreen from "./screens/LogInScreen"
import SignUpScreen from "./screens/SignUpScreen"
import HomePageScreen from "./screens/HomePageScreen"

const Stack = createNativeStackNavigator()

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
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack.Navigator>
            <Stack.Screen name="LogInScreen" component={LogInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen
              name="HomePageScreen"
              component={HomePageScreen}
              options={{
                headerBackVisible: false,
              }}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </>
  )
}
