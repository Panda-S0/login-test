import React, { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import colors from "../assets/colors"
//a component function for changing the stars count

function Starspicker({ rate, starcounter }) {
  //a function that takes the rate and return if the star should be filled or empty
  function strsnmbr(rate, strnm) {
    // Get the floor of the number
    const sars = Math.floor(rate)

    if (strnm <= sars) {
      return "★"
    } else {
      return "☆"
    }
  }

  //an object that holds all he stars
  let [stars, setStars] = useState({
    star1: strsnmbr(rate, 1),
    star2: strsnmbr(rate, 2),
    star3: strsnmbr(rate, 3),
    star4: strsnmbr(rate, 4),
    star5: strsnmbr(rate, 5),
  })

  //function to change the stars when any is pressed
  function onPress(s) {
    starcounter(s)
    setStars({
      star1: strsnmbr(s, 1),
      star2: strsnmbr(s, 2),
      star3: strsnmbr(s, 3),
      star4: strsnmbr(s, 4),
      star5: strsnmbr(s, 5),
    })
  }

  return (
    <View style={styles.starscontainer}>
      <TouchableOpacity onPress={() => onPress(1)}>
        <Text style={styles.textstrat}>{stars.star1}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress(2)}>
        <Text style={styles.textstrat}>{stars.star2}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress(3)}>
        <Text style={styles.textstrat}>{stars.star3}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress(4)}>
        <Text style={styles.textstrat}>{stars.star4}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress(5)}>
        <Text style={styles.textstrat}>{stars.star5}</Text>
      </TouchableOpacity>
    </View>
  )
}

//exporting the component
export default Starspicker

const styles = StyleSheet.create({
  starscontainer: { flexDirection: "row" },
  presstext: { color: "blue" },
  textBoxButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textstrat: {
    fontSize: 32,
    color: colors.background[5],
  },
})
