import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native"
import checkRate from "../Data/checkRate"
import colors from "../assets/colors"

function productMiniView({ item, navigation }) {
  const handlePress = (item) => {
    navigation.navigate("ProductPreviewScreen", { product: item })
  }

  checkRate(item)

  return (
    <View style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.textRow}>
          <Text style={styles.text}>
            {item.price}
            <Text style={styles.coloredMoney}> $</Text>
          </Text>
          <Text style={styles.text}>
            {item.rate}
            <Text style={styles.coloredStar}>★</Text>
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.toucher}
        onPress={() => handlePress(item)}
      >
        <Image source={item.imagePreview} style={styles.image} />
      </TouchableOpacity>
    </View>
  )
}

export default productMiniView

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20,
    alignItems: "center",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 30,
    backgroundColor: colors.background[0],
  },
  toucher: {
    width: "100%",
    aspectRatio: 1,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
  textContainer: {
    paddingHorizontal: 20,
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textRow: {
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 32,
    marginBottom: 5,
    color: "black",
  },
  text: {
    fontSize: 24,
    marginRight: 10,
    color: "black",
    textAlign: "right",
  },
  coloredStar: {
    color: "yellow",
    width: 233,
  },
  coloredMoney: {
    color: "green",
  },
})
