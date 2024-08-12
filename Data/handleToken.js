import AsyncStorage from "@react-native-async-storage/async-storage"
import { Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Ionicons from "react-native-vector-icons/Ionicons"

export function CustomBackButton() {
  const navigation = useNavigation()
  console.log("INBUTTON")

  const handleBackPress = () => {
    // Add your custom logic here
    clearToken()
    // Go back to the previous screen
    navigation.goBack()
  }
  return (
    <Pressable onPress={handleBackPress} style={{ marginLeft: 10 }}>
      <Ionicons name="chevron-back" size={24} color="black" />
    </Pressable>
  )
}

export const getUserProfile = async (token) => {
  if (!token) return
  try {
    const response = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    const user = await response.json()
    console.log(user)
    return user
  } catch (error) {
    console.log(error)
  }
}

export const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem("userToken", token)
  } catch (error) {
    console.log("Error storing the token:", error)
  }
}

// NOT USED YET

// export const retrieveToken = async () => {
//   try {
//     const token = await AsyncStorage.getItem("userToken")
//     console.log("the token", token)
//     return token
//   } catch (error) {
//     console.log("Error retrieving the token:", error)
//     return null
//   }
// }

// export const validateToken = async (token) => {
//   try {
//     const response = await fetch(
//       `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${token}`
//     )
//     if (!response.ok) {
//       return false
//     }
//     const data = await response.json()
//     return data.exp > Date.now() / 1000 // Check if token is not expired
//   } catch (error) {
//     console.log("Error validating the token:", error)
//     return false
//   }
// }

// export const autoLogin = async () => {
//   const token = await retrieveToken()
//   if (token) {
//     const isValid = await validateToken(token)
//     if (isValid) {
//       console.log("Auto-login successful")
//       // Proceed with navigating to the main app screen
//     } else {
//       console.log("Token is invalid or expired, prompting login")
//       // Prompt the user to log in again
//     }
//   } else {
//     console.log("No token found, prompting login")
//     // Prompt the user to log in
//   }
// }

export const clearToken = async () => {
  console.log("clearing token")
  try {
    await AsyncStorage.removeItem("userToken")
  } catch (error) {
    console.log("Error clearing the token:", error)
  }
}

export const checkIfLoggedIn = async (navigation) => {
  try {
    const token = await AsyncStorage.getItem("userToken")
    if (token) {
      data = await getUserProfile(token)
      console.log("the data", data)
      console.log("the name", data.name)
      navigation.navigate("HomePageScreen", { usr: data.name })
    }
  } catch (error) {
    return
  }
}
