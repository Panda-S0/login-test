//import the reviews array
import reviews from "./productReviews"

//adding a review to it using the addReview function
function addReview(id, s, review) {
  //make the variables in the type needed
  let stars = parseInt(Math.floor(s))
  let list = reviews[parseInt(id)]

  //make the obj in format for the reviews list
  reviewObject = {
    reviewNumber: list.length,
    rate: stars,
    review: review,
  }

  //adding the review to the reviews list
  list.push(reviewObject)
}

//exporting the addReview funciton
export default addReview
