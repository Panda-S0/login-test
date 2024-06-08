import { StyleSheet, FlatList, View } from "react-native"

import products from "../Data/products"
import productMiniView from "../components/productComponents"

//main homepage function
function HomePageScreen({ navigation }) {
  return (
    <FlatList
      data={products}
      renderItem={(props) =>
        productMiniView({ ...props, navigation: navigation })
      }
      keyExtractor={(item) => item.id.toString()}
      style={styles.flatStyle}
    />
  )
}

export default HomePageScreen

const styles = StyleSheet.create({
  flatStyle: {
    paddingTop: 10,
    width: "100%",
  },
})
