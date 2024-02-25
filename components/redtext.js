import { StyleSheet, Text } from "react-native"

//a component function for the text box
function Redtext({ text }) {
  return <Text style={styles.redText}>{text}</Text>
}

//exporting the component
export default Redtext

//styles for the component
const styles = StyleSheet.create({
  redText: { color: "red" },
})
