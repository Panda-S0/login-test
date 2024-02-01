import { View, StyleSheet, TextInput, Text } from "react-native"

function Inputext({
  style,
  placeholder,
  funk,
  value,
  onBlur,
  styleTextBox,
  maxLength,
  keyboardType,
}) {
  return (
    <View style={[styles.viewall, style]}>
      <Text style={{ height: "30%" }}>{placeholder}</Text>
      <TextInput
        keyboardType={keyboardType}
        maxLength={maxLength}
        onChangeText={funk}
        onBlur={onBlur}
        style={[styles.infoInput, styleTextBox]}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={placeholder}
        value={value}
      ></TextInput>
    </View>
  )
}

export default Inputext

let color = "#B41FB2"

const styles = StyleSheet.create({
  viewall: {
    borderRadius: 10,
    height: 70,
    width: "90%",
    marginVertical: 4,
    justifyContent: "space-between",
  },
  infoInput: {
    paddingLeft: 10,
    height: "65%",
    width: "100%",
    fontSize: 13,
    borderTopColor: color,
    borderRightColor: color,
    borderLeftColor: color,
    borderBottomColor: "#50234F",
    borderWidth: 4,
    color: "blue",
    borderRadius: 10,
  },
})
