import users from "./Users"

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

export default checkUser
