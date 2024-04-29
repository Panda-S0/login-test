//import the reviews array
import reviews from "./productReviews"

//a function to check if the reviews rate is correct
function checkRate(product) {
  //get the list of reviews
  let list = reviews[parseInt(product.id)]

  //set the rate variable to the mean value of the rates in the review list
  let rate = 0
  for (let i = 0; i < list.length; i++) {
    rate += list[i].rate
  }
  rate /= list.length

  //changing the product rate to the new one and making it only one dicimle long
  product.rate = rate.toFixed(1)

  //returning the rate
  return product.rate
}

//exporting the function
export default checkRate
