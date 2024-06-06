import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Button,
  Pressable,
} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import colors from "../assets/colors"

//a component function for the text box
function CoolButton({ children, onPress, btnclr, txtclr }) {
  console.log(btnclr)
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.viewall,
        { backgroundColor: btnclr ? btnclr : colors.background[0] },
      ]}
    >
      <Text
        style={[styles.infoInput, { color: txtclr ? txtclr : "white" }]}
      >
        {children}
      </Text>
    </Pressable>
  )
}

//exporting the component
export default CoolButton

//styles for the component
const styles = StyleSheet.create({
  viewall: {
    flex: 1,
    height: 60,
    width: "90%",
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
  },
  infoInput: {
    fontSize: 18,
    textAlign: "center",
  },
})
