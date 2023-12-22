import { View, StyleSheet, TextInput, Text } from "react-native"

function Inputext({ style, placeholder }) {
  return (
    <View style={[styles.viewall, style]}>
      <Text style={{ height: "30%" }}>{placeholder}</Text>
      <TextInput
        style={styles.infoInput}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={placeholder}
      ></TextInput>
    </View>
  )
}

export default Inputext

let color = "#B41FB2"

const styles = StyleSheet.create({
  viewall: {
    height: 70,
    width: "90%",
    marginVertical: 4,
    justifyContent: "space-between",
  },
  infoInput: {
    height: "65%",
    width: "100%",
    fontSize: 32,
    borderTopColor: color,
    borderRightColor: color,
    borderLeftColor: color,
    borderBottomColor: "#50234F",
    borderWidth: 4,
    color: "blue",
    paddingLeft: 10,
    borderRadius: 10,
  },
})
