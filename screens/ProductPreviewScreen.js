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

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Photo */}
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
        <View style={styles.item}>
          <Text style={styles.nametext}>{product.name}</Text>
        </View>

        {/* Description */}
        <View style={styles.item}>
          <Text style={styles.text}>
            description:{"\n"}
            {product.description}
          </Text>
        </View>

        {/* Ratings and review TextBox and Button */}
        <View style={styles.item}>
          <View style={styles.ratingContainer}>
            <Starspicker rate={product.rate} starcounter={setStarCount} />
            <Text style={styles.textstrat}>{Rate}</Text>
          </View>
          <View style={styles.textBoxButtonContainer}>
            <TextInput
              value={writtenReview}
              onChangeText={WritingReview}
              multiline
              style={styles.reviewText}
              placeholder="write review"
            ></TextInput>
            <Button
              color="orange"
              title="submit"
              onPress={addingReview}
            />
          </View>
        </View>

        {/* Reviews */}
        <View style={styles.item}>
          <Text>
            {reviewlist[0].review}
            {"\n"}
          </Text>
          <Text>
            {reviewlist[1].review}
            {"\n"}
          </Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.presstext}>Show more reviews.</Text>
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
                  colors={[
                    "rgba(255, 255, 255, 0)",
                    "rgba(255, 255, 255, 1)",
                  ]}
                  style={styles.fade}
                ></LinearGradient>
              </View>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.presstext}>Hide reviews.</Text>
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
    padding: 20,
  },
  photoContainer: {
    width: "100%",
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  item: {
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  nametext: {
    fontSize: 32,
  },
  text: {
    fontSize: 16,
  },
  presstext: {
    color: "blue",
    fontSize: 16,
  },
  textstrat: {
    fontSize: 32,
  },
  reviewText: {
    paddingLeft: 10,
    marginRight: 10,
    width: "75%",
    fontSize: 16,
    borderWidth: 4,
    borderRadius: 10,
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
    backgroundColor: "white",
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
