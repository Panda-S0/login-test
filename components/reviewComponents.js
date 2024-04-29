import { StyleSheet, Text, View } from "react-native"

//a component function for the reviews view
function reviewView({ item }) {
  //switch case to set the stars depening on the rating
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

//exporting the component
export default reviewView

const styles = StyleSheet.create({
  container: { marginBottom: 30 },
  text: {
    fontSize: 20,
  },
})
