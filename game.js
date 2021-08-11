let wallet = 0

tokenGenerator = () => {
  let hex = `0123456789`
  let randoList = " "
  for (let i = 0; i < 2; i++) {
  let random = hex[Math.floor(Math.random() * hex.length)]
  randoList += random
    }
    return randoList;
}

weightedLottery = (list) => {
    let total = 0;
  
    Object.keys(list).forEach(function(key) {
      total += list[key];
    });
  
    let selection = Math.random() * total;
    let selected;
    let count = 0;
  
    Object.keys(list).forEach(function(key) {
      count += list[key];
  
      if (count > selection && !selected) {
        selected = key;
      }
    });
  
      return selected;
    }
  
  const weights = {
    win: 1,
    lose: 3,
    }

function start(motion) {
  let userInput = "" 

    while (userInput.toLowerCase() !== "pull"){
    userInput = prompt('To give the lever a pull, type "pull".')}
    if (userInput.toLowerCase() === "pull") {
      wallet = tokenGenerator()
      console.log(`You have ${wallet} tokens in your wallet!`)
    }
    
    while (userInput.toLowerCase() !== "insert"){
      userInput = prompt("The game is easy! It's called Flip. We flip a coin and you call heads or tails. If you win you get some tokens. If you lose you can insert a token to try again. Now we need a coin to flip because we're flat broke. To play insert a token by typing 'insert'")}
      if (userInput.toLowerCase() === "insert") {
        console.log(`You now have ${wallet - 1} tokens in your wallet.`)
        }

    while (userInput.toLowerCase() !== "heads" || "tails") {
      userInput = prompt("Alright, now call heads or tails by typing your choice.")}
        if (userInput.toLowerCase() === "heads" || "tails") {
          console.log(weightedLottery(weights))
        }
      }
    
    








// write win condition with reward
// write lose condition
// prompt if want to play again or check out






console.log("I've always thought if one was going to gamble, then one should gamble at the most run down place one could since it would be apparent that that establishment wasn't making money but giving it all away. You must have thought the same thing and that's why you came here. Well, let's get to playing before this ship sinks.")
console.log("There's a lever here that will fill up a wallet with a random amount  of tokens. You can then use the tokens to play the games here.")
start()