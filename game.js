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

function start(motion) {
  let userInput = "" 
    while (userInput.toLowerCase() !== pull.toLowerCase()){
    userInput = prompt('/nTo give the lever a pull, type "pull".')}
    if userInput.toLowerCase() === pull.toLowerCase(){
      console.log(`You have ${tokenGenerator()} tokens in your wallet!`)
      
    }
    
  
}


console.log("I've always thought if one was going to gamble, then one should gamble at the most run down place one could since it would be apparent that that establishment wasn't making money but giving it all away. You must have thought the same thing and that's why you came here. Well, let's get to playing before this ship sinks.")
console.log("There's a lever here that will fill up a wallet with a random amount tokens. You can then use the tokens to play the games here.")