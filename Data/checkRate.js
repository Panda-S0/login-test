import reviews from "./productReviews"

function checkRate(product) {
  let list = reviews[parseInt(product.id)]

  let rate = 0
  for (let i = 0; i < list.length; i++) {
    rate += list[i].rate
  }
  rate /= list.length

  product.rate = rate.toFixed(1)

  return product.rate
}

export default checkRate
