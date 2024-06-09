import { StyleSheet, Text, Pressable } from "react-native"
import colors from "../assets/colors"

function CoolButton({ children, onPress, btnclr, txtclr }) {
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

export default CoolButton

const styles = StyleSheet.create({
  viewall: {
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
