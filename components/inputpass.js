import { View, StyleSheet, TextInput, Text, Button } from "react-native"

//a component function for the text box
function Inpupass({
  placeholder,
  funk,
  value,
  onBlur,
  styleTextBox,
  maxLength,
  keyboardType,
  secureTextEntry,
  onPress,
  showPassword,
}) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}
    >
      <View style={styles.viewall}>
        <Text style={{ height: "30%" }}>{placeholder}</Text>
        <TextInput
          secureTextEntry={secureTextEntry}
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
      <View style={{ marginBottom: 10, flex: 0.65 }}>
        <Button
          title={showPassword ? "Hide" : "Show"}
          onPress={onPress}
        />
      </View>
    </View>
  )
}

//exporting the component
export default Inpupass

//styles for the component
const styles = StyleSheet.create({
  viewall: {
    borderRadius: 10,
    height: 70,
    width: "75%",
    marginVertical: 4,
    justifyContent: "space-between",
  },
  infoInput: {
    paddingLeft: 10,
    height: "65%",
    width: "100%",
    fontSize: 13,
    borderWidth: 4,
    borderRadius: 10,
  },
})
