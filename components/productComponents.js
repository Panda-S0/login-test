import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native"
import checkRate from "../Data/checkRate"

//a component function for the product mini view
function productMiniView({ item, navigation }) {
  //function to go to the detailed view of the product if its pressed
  const handlePress = (item) => {
    navigation.navigate("ProductPreviewScreen", { product: item })
  }

  //cheacks the rate for each function being loaded
  checkRate(item)

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.toucher}
        onPress={() => handlePress(item)}
      >
        <Image source={item.imagePreview} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.textRow}>
          <Text style={styles.text}>
            {item.price} <Text style={styles.coloredMoney}>$</Text>
          </Text>
          <Text style={styles.text}>
            {item.rate} <Text style={styles.coloredStar}>★</Text>
          </Text>
        </View>
      </View>
    </View>
  )
}

//exporting the component
export default productMiniView

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20,
    alignItems: "center",
    padding: 10,
  },
  toucher: {
    width: "100%",
    aspectRatio: 1,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  textContainer: {
    paddingHorizontal: 20,
    width: "100%",
    flex: 1,
  },
  textRow: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    width: "100%",
    fontSize: 18,
    marginBottom: 5,
    color: "white",
  },
  text: {
    fontSize: 24,
    marginRight: 10,
    color: "white",
  },
  coloredStar: {
    color: "gold",
  },
  coloredMoney: {
    color: "green",
  },
})
