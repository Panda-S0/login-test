//import the users array
import users from "./Users"

//a function to check if the user exist then check if the password is corret
function checkUser(usr) {
  for (let i = 0; i < users.length; i++) {
    if (usr.username == users[i].username) {
      if (usr.password == users[i].password) {
        return 1
      } else {
        return 0
      }
    }
  }
  return 0
}

//exporting the function
export default checkUser
