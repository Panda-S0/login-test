import {
  Text,
  Button,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native"

//main homepage function
function HomePageScreen({ onChangeScreen, usr }) {
  //a function to go back to the log in screen when the button is pressd
  function LogIn() {
    onChangeScreen("login", { username: "", password: "" })
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
