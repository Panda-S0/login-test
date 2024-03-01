import {
  StyleSheet,
  Text,
  Button,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native"

//main homepage function
function HomePageScreen({ navigation, route }) {
  let usr = route.params.usr
  //a function to go back to the log in screen when the button is pressd
  function LogIn() {
    navigation.navigate("LogInScreen")
    // onChangeScreen("login", { username: "", password: "" })
  }

  return (
    <ScrollView style={styles.mainView}>
      <KeyboardAvoidingView
        style={{ flex: 1, paddingBottom: 20 }}
        behavior="position"
      >
        <View style={styles.innerView}>
          <Text>HOME PAGE</Text>
          <Text>you are {usr}</Text>
          <Button
            style={styles.button}
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

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  innerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  button: { marginTop: 100 },
})
