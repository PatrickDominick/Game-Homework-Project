
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
    "green": 1,
    "yellow": 2,
    "red": 3
    }
  
  console.log(weightedLottery(weights));
  console.log(weightedLottery(weights));
  console.log(weightedLottery(weights));
  console.log(weightedLottery(weights));
  console.log(weightedLottery(weights));
  console.log(weightedLottery(weights));
  
  