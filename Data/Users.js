const users = [
  {
    username: "username",
    first_name: "master",
    last_name: "user",
    mobile: "01000000000",
    email: "user@test.com",
    status: 1,
    password: "password",
    password_confirmation: "password",
  },
]

function addUser(usr) {
  users.push(usr)
  for (let i = 0; i < users.length; i++) {
    console.log(users[i])
  }
  console.log("=====================================================")
}

export default addUser
