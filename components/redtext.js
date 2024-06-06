import { StyleSheet, Text } from "react-native"
import colors from "../assets/colors"

//a component function for the text box
function Redtext({ text, styler }) {
  return <Text style={[styles.redText, styler]}>{text}</Text>
}

//exporting the component
export default Redtext

//styles for the component
const styles = StyleSheet.create({
  redText: { color: colors.background[0] },
})
