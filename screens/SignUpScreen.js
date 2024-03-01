import { useState } from "react"
import {
  StyleSheet,
  Alert,
  Text,
  View,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native"

//importing the needed components
import addUser from "../Data/addUsers.js"
import Inputext from "../components/inputext"
import Inpupass from "../components/inputpass.js"
import Redtext from "../components/redtext.js"

//main signup screen funtion
function SignUpScreen({ navigation, route }) {
  const [currentUsername, setCurrentUsername] = useState("")
  const [currentFirst_name, setCurrentFirst_name] = useState("")
  const [currentLast_name, setCurrentLast_name] = useState("")
  const [currentMobile, setCurrentMobile] = useState("")
  const [currentEmail, setCurrentEmail] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")
  const [currentPassword_confirmation, setCurrentPassword_confirmation] =
    useState("")

  //an object that contains all the variables
  const [currentUser] = useState({
    username: "",
    first_name: "",
    last_name: "",
    mobile: "",
    email: "",
    status: 0,
    password: "",
    password_confirmation: "",
  })

  //variables for checking if the input is valid or not
  const [isValidEmail, setValidEmail] = useState(true)
  const [isValidPassword, setValidPassword] = useState(true)
  const [isValidPasswordConfirm, setValidPasswordConfirm] = useState(true)
  const [isValidMobile, setValidMobile] = useState(true)
  const [isValidUserName, setValidUserName] = useState(true)
  const [isValidFirstName, setValidFirstName] = useState(true)
  const [isValidLastName, setValidLastName] = useState(true)

  //to show and hide the password and password confirmation
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)

  const handleTogglePasswordConfirmVisibility = () => {
    setShowPasswordConfirm(!showPasswordConfirm)
  }

  //functions to validate each input
  function validateFirstName() {
    const firstNameRegex = /^[a-zA-Z]{1,32}$/
    const firstNameIsValid = firstNameRegex.test(currentFirst_name)
    setValidFirstName(firstNameIsValid)
  }
  function validateLastName() {
    const lastNameRegex = /^[a-zA-Z]{1,32}$/
    const lastNameIsValid = lastNameRegex.test(currentLast_name)
    setValidLastName(lastNameIsValid)
  }
  function validateUserName() {
    const userNameRegex = /^[^\s]{4,}$/
    const userNameIsValid = userNameRegex.test(currentUsername)
    setValidUserName(userNameIsValid)
  }
  function validateMobile() {
    const mobileRegex = /^0\d{10}$/
    const mobileIsValid = mobileRegex.test(currentMobile)
    setValidMobile(mobileIsValid)
  }
  function validatePasswordConfirm() {
    const passwordConfirmIsValid =
      currentPassword === currentPassword_confirmation
    setValidPasswordConfirm(passwordConfirmIsValid)
  }
  function validatePassword() {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    const passwordIsValid = passwordRegex.test(currentPassword)
    setValidPassword(passwordIsValid)
  }
  function validateEmail() {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const emailIsValid = emailRegex.test(currentEmail)
    setValidEmail(emailIsValid)
  }

  //functions to update the 'currentUser' object
  //whenever the text changes in each input textbox
  function addUsername(Content) {
    setCurrentUsername(Content)
    currentUser.username = Content
  }
  function addFirst_name(Content) {
    setCurrentFirst_name(Content)
    currentUser.first_name = Content
  }
  function addLast_name(Content) {
    setCurrentLast_name(Content)
    currentUser.last_name = Content
  }
  function addMobile(Content) {
    setCurrentMobile(Content)
    currentUser.mobile = Content
  }
  function addEmail(Content) {
    setCurrentEmail(Content)
    currentUser.email = Content
  }
  function addPassword(Content) {
    setCurrentPassword(Content)
    currentUser.password = Content
  }
  function addPassword_confirmation(Content) {
    setCurrentPassword_confirmation(Content)
    currentUser.password_confirmation = Content
  }

  //a function to check for each input if its valid or not
  //then go back to the log in screen if valid
  //or send an alert message if not valid
  function CheckForViability() {
    if (
      isValidEmail &&
      isValidFirstName &&
      isValidLastName &&
      isValidMobile &&
      isValidPassword &&
      isValidPasswordConfirm &&
      isValidUserName &&
      currentUser.username != "" &&
      currentUser.first_name != "" &&
      currentUser.last_name != "" &&
      currentUser.mobile != "" &&
      currentUser.email != "" &&
      currentUser.password != "" &&
      currentUser.password_confirmation != ""
    ) {
      addUser(currentUser)
      navigation.navigate("LogInScreen", { passedUser: currentUser })
      //onChangeScreen("login", currentUser)
    } else {
      Alert.alert("Invalid input", "some values are incorrect", [
        { text: "OK" },
      ])
    }
  }

  return (
    <ScrollView style={styles.mainView}>
      <KeyboardAvoidingView
        style={styles.keyboardavoidingView}
        behavior="padding"
      >
        <View style={styles.innerView}>
          <Inputext
            placeholder="Username"
            onBlur={validateUserName}
            funk={addUsername}
            value={currentUsername}
          />
          {!isValidUserName && (
            <Redtext
              text={
                "the username cant have spaces and should be at least 4 characters"
              }
            />
          )}
          <View style={styles.namesView}>
            <Inputext
              style={styles.namesTextBox}
              placeholder="name"
              onBlur={validateFirstName}
              funk={addFirst_name}
              value={currentFirst_name}
            />
            <Inputext
              style={styles.namesTextBox}
              placeholder="surname"
              onBlur={validateLastName}
              funk={addLast_name}
              value={currentLast_name}
            />
          </View>
          {(!isValidFirstName || !isValidLastName) && (
            <Redtext
              text={
                "the name and surname should be only letters and be less than 32 characters"
              }
            />
          )}
          <Inputext
            placeholder="Phone numebr"
            keyboardType="phone-pad"
            maxLength={11}
            onBlur={validateMobile}
            funk={addMobile}
            value={currentMobile}
          />
          {!isValidMobile && (
            <Redtext
              text={
                "should be a real phone number, starts with 0 and has 11 digits"
              }
            />
          )}
          <Inputext
            placeholder="email"
            keyboardType="email-address"
            onBlur={validateEmail}
            funk={addEmail}
            value={currentEmail}
          />
          {!isValidEmail && <Redtext text={"Invalid email address"} />}

          <Inpupass
            secureTextEntry={!showPassword}
            placeholder="password"
            onBlur={validatePassword}
            funk={addPassword}
            value={currentPassword}
            showPassword={showPassword}
            onPress={handleTogglePasswordVisibility}
          />
          {!isValidPassword && (
            <Redtext
              text={
                "Password should contain at least one upper case, one lower case, one number, and at least 8 charactes long"
              }
            />
          )}
          <Inpupass
            secureTextEntry={!showPasswordConfirm}
            placeholder="confirm password"
            onBlur={validatePasswordConfirm}
            funk={addPassword_confirmation}
            value={currentPassword_confirmation}
            showPassword={showPasswordConfirm}
            onPress={handleTogglePasswordConfirmVisibility}
          />
          {!isValidPasswordConfirm && (
            <Redtext
              text={"Confirm Password should be the same as the password"}
            />
          )}
          <Pressable
            onPress={CheckForViability}
            android_ripple={styles.riblClr}
            style={styles.presableView}
          >
            <Text>Sign Up</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default SignUpScreen

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
  namesView: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  namesTextBox: {
    width: "45%",
  },
  presableView: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "orange",
  },
  riblClr: { color: "white" },
})
