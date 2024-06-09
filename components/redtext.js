import { StyleSheet, Text } from "react-native"
import colors from "../assets/colors"

function Redtext({ text, styler }) {
  return <Text style={[styles.redText, styler]}>{text}</Text>
}

export default Redtext

const styles = StyleSheet.create({
  redText: { color: colors.background[0] },
})
