import { useState } from "react"
import {
  Alert,
  Text,
  View,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  Button,
} from "react-native"

import addUser from "../Data/addUsers.js"
import Inputext from "../components/inputext"

function LogInScreen({ onChangeScreen }) {
  const [currentUsername, setCurrentUsername] = useState("")
  const [currentFirst_name, setCurrentFirst_name] = useState("")
  const [currentLast_name, setCurrentLast_name] = useState("")
  const [currentMobile, setCurrentMobile] = useState("")
  const [currentEmail, setCurrentEmail] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")
  const [currentPassword_confirmation, setCurrentPassword_confirmation] =
    useState("")

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

  const [isValidEmail, setValidEmail] = useState(true)
  const [isValidPassword, setValidPassword] = useState(true)
  const [isValidPasswordConfirm, setValidPasswordConfirm] = useState(true)
  const [isValidMobile, setValidMobile] = useState(true)
  const [isValidUserName, setValidUserName] = useState(true)
  const [isValidFirstName, setValidFirstName] = useState(true)
  const [isValidLastName, setValidLastName] = useState(true)
  function validateFirstName() {
    const firstNameRegex = /^[a-zA-Z]{4,}$/
    const firstNameIsValid = firstNameRegex.test(currentFirst_name)
    setValidFirstName(firstNameIsValid)
  }

  function validateLastName() {
    const lastNameRegex = /^[a-zA-Z]{4,}$/
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

  //this part will be used after everything is set
  //to put everything together and in the Users list

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

  function CheckForViability() {
    if (
      isValidEmail &&
      isValidFirstName &&
      isValidLastName &&
      isValidMobile &&
      isValidPassword &&
      isValidPasswordConfirm &&
      isValidUserName
    ) {
      addUser(currentUser)
      onChangeScreen("login")
    } else {
      Alert.alert("Invalid input", "some values are incorrect", [
        { text: "OK" },
      ])
    }
  }

  function SignUp() {
    onChangeScreen("login")
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1, paddingBottom: 20 }}
        behavior="padding"
      >
        <View style={styles.rootContainer}>
          <Inputext
            placeholder="Username"
            onBlur={validateUserName}
            funk={addUsername}
            value={currentUsername}
          />
          {!isValidUserName && (
            <Text style={{ color: "red" }}>
              the username cant have spaces and should be at least 4
              characters
            </Text>
          )}
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Inputext
              style={{ width: "45%" }}
              placeholder="name"
              onBlur={validateFirstName}
              funk={addFirst_name}
              value={currentFirst_name}
            />
            <Inputext
              style={{ width: "45%" }}
              placeholder="surname"
              onBlur={validateLastName}
              funk={addLast_name}
              value={currentLast_name}
            />
          </View>
          {(!isValidFirstName || !isValidLastName) && (
            <Text style={{ color: "red" }}>
              the name and surname should be only letters and contain at
              least 4 characters
            </Text>
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
            <Text style={{ color: "red" }}>
              should be a real phone number, starts with 0 and has 11
              digits
            </Text>
          )}
          <Inputext
            placeholder="email"
            keyboardType="email-address"
            onBlur={validateEmail}
            funk={addEmail}
            value={currentEmail}
          />
          {!isValidEmail && (
            <Text style={{ color: "red" }}>Invalid email address</Text>
          )}

          <Inputext
            placeholder="password"
            onBlur={validatePassword}
            funk={addPassword}
            value={currentPassword}
          />
          {!isValidPassword && (
            <Text style={{ color: "red" }}>
              Password should contain at least one upper case, one lower
              case, one number, and at least 8 charactes long
            </Text>
          )}
          <Inputext
            placeholder="confirm password"
            onBlur={validatePasswordConfirm}
            funk={addPassword_confirmation}
            value={currentPassword_confirmation}
          />
          {!isValidPasswordConfirm && (
            <Text style={{ color: "red" }}>
              Confirm Password should be the same as the password
            </Text>
          )}
          <Pressable
            onPress={CheckForViability}
            android_ripple={{ color: "red" }}
            style={{
              marginTop: 10,
              padding: 10,
              backgroundColor: "pink",
            }}
          >
            <Text>Sign Up</Text>
          </Pressable>

          <Button title="go back to the log in" onPress={SignUp} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default LogInScreen

let color = "#B41FB2"

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  infoInput: {
    height: 50,
    width: "90%",
    fontSize: 32,
    borderTopColor: color,
    borderRightColor: color,
    borderLeftColor: color,
    borderBottomColor: "#50234F",
    borderWidth: 4,
    color: "blue",
    marginVertical: 8,
    paddingLeft: 10,
    borderRadius: 10,
  },
})
