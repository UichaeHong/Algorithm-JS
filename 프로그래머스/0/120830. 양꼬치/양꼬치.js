function solution(n,k) {
  if(n >= 10) {
    let service = Math.floor(n/10)
    let totalDrink = k-service
    let Price = (n*12000) + (totalDrink*2000)
    return Price
  } else if(n < 10) {
    return (n*12000)+(k*2000)
  }
}
