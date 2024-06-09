import reviews from "./productReviews"

function addReview(id, s, review) {
  let stars = parseInt(Math.floor(s))
  let list = reviews[parseInt(id)]

  reviewObject = {
    reviewNumber: list.length,
    rate: stars,
    review: review,
  }

  list.push(reviewObject)
}

export default addReview
