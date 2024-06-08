import React, { useState } from "react"
import { LinearGradient } from "expo-linear-gradient"
import {
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  Modal,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native"
import reviews from "../Data/productReviews"
import reviewView from "../components/reviewComponents"
import Starspicker from "../components/starspicker"
import addReview from "../Data/addReview"
import checkRate from "../Data/checkRate"
import colors from "../assets/colors"
import CoolButton from "../components/CoolButton.js"

//Product Preview Screen
function ProductPreviewScreen({ route }) {
  //setting product variable to the product obj passed
  product = route.params?.product
  //making the list of reviews
  let reviewlist = reviews[parseInt(product.id)]
  //for the number of stars filled
  const [starCount, setStarCount] = useState(product.rate)
  //to view the modal
  const [modalVisible, setModalVisible] = useState(false)
  //the test input for writing a review
  const [writtenReview, setWrittenReview] = useState("")
  //to show the new rate number if another review changed it
  const [Rate, setRate] = useState(product.rate)
  //to make the photo fill the width of the space and the height be auto (this part took me longer than I am welling to admit xd)
  const [aspectRatio, setAspectRatio] = useState(null)

  //change the value of the writtenReview variable when the text is inputted
  const WritingReview = (review) => {
    setWrittenReview(review)
  }

  //add the review when the submit button is pressed and reseting the text input box to empty
  const addingReview = () => {
    if (writtenReview != "") {
      addReview(product.id, starCount, writtenReview)
      setRate(checkRate(product))
    }
    setWrittenReview("")
  }

  function hexToRgbA(hex) {
    var c
    c = hex.substring(1).split("")
    c = "0x" + c.join("")
    return [
      "rgba(" +
        [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
        ",0)",
      "rgba(" +
        [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
        ",1)",
    ]
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={[styles.photoContainer, { aspectRatio: aspectRatio }]}
        >
          <Image
            source={product.imageFull}
            style={styles.image}
            onLoad={(e) => {
              // Calculate aspect ratio after image has loaded
              const { width, height } = e.nativeEvent.source
              const imageAspectRatio = width / height
              setAspectRatio(imageAspectRatio)
            }}
          />
        </View>

        {/* Name */}
        <View style={styles.namenPrice}>
          <Text style={[styles.nametext, styles.textColor]}>
            {product.name}
          </Text>
          <Text style={[styles.nametext, styles.textColor]}>
            {product.price}
            <Text style={styles.coloredMoney}> $</Text>
          </Text>
        </View>

        {/* Description */}
        <View style={styles.item}>
          <Text style={[styles.text, styles.textColor]}>
            <Text style={[styles.text, styles.titleColor]}>
              description:{"\n"}
            </Text>
            {product.description}
          </Text>
        </View>

        {/* Ratings and review TextBox and Button */}
        <View style={styles.item}>
          <View style={styles.ratingContainer}>
            <Starspicker rate={product.rate} starcounter={setStarCount} />
            <Text style={[styles.textstrat, styles.textColor]}>
              {Rate}
            </Text>
          </View>
          <View style={styles.textBoxButtonContainer}>
            <TextInput
              value={writtenReview}
              onChangeText={WritingReview}
              multiline
              style={[styles.reviewText, styles.textColor]}
              placeholder="write review"
              placeholderTextColor={colors.background[5]}
            ></TextInput>
            <CoolButton
              onPress={addingReview}
              btnclr={colors.background[2]}
              txtclr={"white"}
            >
              submit
            </CoolButton>
          </View>
        </View>

        {/* Reviews */}
        <View style={styles.item}>
          <Text style={[styles.text, styles.textColor]}>
            {reviewlist[0].review}
            {"\n"}
          </Text>
          <Text style={[styles.text, styles.textColor]}>
            {reviewlist[1].review}
            {"\n"}
          </Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={[styles.presstext, styles.textColor]}>
              Show more reviews.
            </Text>
          </TouchableOpacity>
        </View>

        {/* Modal to show more reviews*/}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <FlatList
                data={reviewlist}
                renderItem={reviewView}
                keyExtractor={reviewlist.reviewNumber}
                style={styles.flatStyle}
              />
              <View>
                <LinearGradient
                  colors={hexToRgbA(colors.background[1])}
                  style={styles.fade}
                ></LinearGradient>
              </View>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={[styles.presstext, styles.textColor]}>
                  Hide reviews.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  )
}

export default ProductPreviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    padding: 10,
    borderRadius: 30,
    backgroundColor: colors.background[0],
  },
  photoContainer: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 30,
    marginBottom: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  namenPrice: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  item: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  textColor: {
    color: colors.background[5],
  },
  titleColor: {
    color: colors.background[6],
    fontSize: 24,
    fontWeight: "bold",
  },
  nametext: {
    fontSize: 32,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
  },
  presstext: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textstrat: {
    fontSize: 32,
  },
  coloredMoney: {
    color: "green",
  },
  textBoxButtonContainer: {
    alignItems: "center",
    height: 120,
    justifyContent: "space-around",
  },
  reviewText: {
    paddingHorizontal: 10,
    width: "75%",
    fontSize: 16,
    borderWidth: 4,
    borderRadius: 10,
    borderColor: colors.background[5],
  },
  flatStyle: {
    width: "100%",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Dim the background
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    height: "70%",
    backgroundColor: colors.background[1],
    padding: 20,
    borderRadius: 20,
    elevation: 5, // For Android shadow
  },
  fade: {
    height: 25, // Height of the fading effect
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1, // Ensure it's above other content
  },
})
