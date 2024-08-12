import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { CustomBackButton } from "./Data/handleToken"

import LogInScreen from "./screens/LogInScreen"
import SignUpScreen from "./screens/SignUpScreen"
import HomePageScreen from "./screens/HomePageScreen"
import ProductPreviewScreen from "./screens/ProductPreviewScreen"
import colors from "./assets/colors"

const Stack = createNativeStackNavigator()

export default function App() {
  const [screen, setccreen] = useState("login") //a variable to select which screen to show
  const [user, setuser] = useState({ username: "", password: "" }) //a variable to give the current user to the next screen
  let Screen = <LogInScreen onChangeScreen={ChangeScreen} /> //a variable for the screen itself

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
  if (screen == "ProductPreviewScreen") {
    Screen = (
      <ProductPreviewScreen
        onChangeScreen={ChangeScreen}
        product={product}
      />
    )
  }

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: colors.background[2] },
              headerTitleStyle: { color: "white" },
              contentStyle: { backgroundColor: colors.background[4] },
            }}
          >
            <Stack.Screen name="LogInScreen" component={LogInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen
              name="HomePageScreen"
              component={HomePageScreen}
              options={({ route }) => ({
                headerRight: () => (
                  <View style={{ marginRight: 10 }}>
                    <Text>{route.params?.usr}</Text>
                  </View>
                ),
                headerLeft: () => <CustomBackButton />,
              })}
            />
            <Stack.Screen
              name="ProductPreviewScreen"
              component={ProductPreviewScreen}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </>
  )
}
