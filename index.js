// Code your solutions in this file
// const namesArray = ["Ada", "Brendan", "Ali"];
// const event = ();

function writeCards( namesArray, event) {
  let thankYouCards = []
  for (let i = 0; i < namesArray.length; i++) {
    thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    // console.log('Thank you ${namesArray[i]}, for the wondeful ${event} gift.')
  }

  return thankYouCards
}

function countdown() {
  let countDown = 11;
  while (countDown > 0) {
    console.log(countDown -=1);
  }
}
