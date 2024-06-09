import { StyleSheet, Text, View } from "react-native"
import colors from "../assets/colors"

function reviewView({ item }) {
  let stars = ""
  switch (parseInt(item.rate)) {
    case 0:
      stars = "☆☆☆☆☆"
      break
    case 1:
      stars = "★☆☆☆☆"
      break
    case 2:
      stars = "★★☆☆☆"
      break
    case 3:
      stars = "★★★☆☆"
      break
    case 4:
      stars = "★★★★☆"
      break
    case 5:
      stars = "★★★★★"
      break
    default:
      stars = "ERROR 0.1"
      break
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{stars}</Text>
      <Text style={styles.text}>{item.review}</Text>
    </View>
  )
}

export default reviewView

const styles = StyleSheet.create({
  container: { marginBottom: 30 },
  text: {
    fontSize: 20,
    color: colors.background[5],
  },
})
