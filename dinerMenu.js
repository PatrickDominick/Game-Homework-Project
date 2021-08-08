// ***Good***

// const entree1 = "Hamburger"
// const entree1Price = "2.50"

// const entree2 = "Pizza"
// const entree2Price = "2.00"

// const entree3 = "Sandwich"
// const entree3Price = "1.50"


// const side1 = "Fries"
// const side1Price = "1.50"

// const side2 = "Chips"
// const side2Price = "1.00"

// const side3 = "Cheese Fries"
// const side3Price = "2.50"


// const orderedItems = []
// let bill = 0


// function displayMenu(menu) {
//   if (menu === "entree") {
//     console.log(`${entree1}: $${entree1Price}`)
//     console.log(`${entree2}: $${entree2Price}`)
//     console.log(`${entree3}: $${entree3Price}`)
//   }
//   else if (menu === "side") {
//     console.log(`${side1}: $${side1Price}`)
//     console.log(`${side2}: $${side2Price}`)
//     console.log(`${side3}: $${side3Price}`)
//   }
// }

// function orderItem(menu) {
//   let userInput = ""
//   if (menu === "entree") {
//     while (userInput.toLowerCase() !== entree1.toLowerCase()
//           && userInput.toLowerCase() !== entree2.toLowerCase()
//           && userInput.toLowerCase() !== entree3.toLowerCase()) {
//             userInput = prompt("\nWhat entree would you like?")
//             if (userInput.toLowerCase() === entree1.toLowerCase()) {
//               console.log(`The ${entree1} is a great choice! That will be $${entree1Price}`)
//               orderedItems.push(entree1)
//               bill += parseFloat(entree1Price)
//             }
//             else if (userInput.toLowerCase() === entree2.toLowerCase()) {
//               console.log(`The ${entree2} is a great choice! That will be $${entree2Price}`)
//               orderedItems.push(entree2)
//               bill += parseFloat(entree2Price)
//             }
//             else if (userInput.toLowerCase() === entree3.toLowerCase()) {
//               console.log(`The ${entree3} is a great choice! That will be $${entree3Price}`)
//               orderedItems.push(entree3)
//               bill += parseFloat(entree3Price)
//             }
//             else {
//               console.log("Sorry, that's not an item on the menu...")
//             }
//           }
//   }
//   else if (menu === "side") {
//     while (userInput.toLowerCase() !== side1.toLowerCase()
//           && userInput.toLowerCase() !== side2.toLowerCase()
//           && userInput.toLowerCase() !== side3.toLowerCase()) {
//             userInput = prompt("\nWhat side would you like?")
//             if (userInput.toLowerCase() === side1.toLowerCase()) {
//               console.log(`The ${side1} is a great choice! That will be $${side1Price}`)
//               orderedItems.push(side1)
//               bill += parseFloat(side1Price)
//             }
//             else if (userInput.toLowerCase() === side2.toLowerCase()) {
//               console.log(`The ${side2} is a great choice! That will be $${side2Price}`)
//               orderedItems.push(side2)
//               bill += parseFloat(side2Price)
//             }
//             else if (userInput.toLowerCase() === side3.toLowerCase()) {
//               console.log(`The ${side3} is a great choice! That will be $${side3Price}`)
//               orderedItems.push(side3)
//               bill += parseFloat(side3Price)
//             }
//             else {
//               console.log("Sorry, that's not an item on the menu...")
//             }
//           }
//   }
// }

// console.log("Welcome to the Diner!\n\nHere is the menu:\n")
// displayMenu("entree")
// orderItem("entree")
// console.log("\nHere is the sides menu:\n")
// displayMenu("side")
// orderItem("side")
// orderItem("side")
// console.log("\nHere are the items you've ordered:")
// for (item of orderedItems) {
//   console.log(` ${item}`)
// }
// console.log(`Your bill today will be $${bill.toFixed(2)}`)


// ***Better***

// const entreeMenu = [["Hamburger", "2.50"], ["Pizza", "2.00"], ["Sandwich", "1.00"], ["Pasta", "2.00"]]
// const sideMenu = [["Fries", "1.50"], ["Chips", "1.00"], ["Cheese Fries", "2.50"]]

// const orderedItems = []
// let bill = 0

// function displayMenu(menu) {
//   menu.forEach(item => console.log(`${item[0]}: $${item[1]}`))
// }

// function orderItem(menu, menuType) {
//   let orderedItem
//   while (!orderedItem) {
//     let userInput = prompt(`\nWhat ${menuType} would you like?`)
//     orderedItem = menu.filter(item => item[0].toLowerCase() === userInput.toLowerCase())[0]
//     if (!orderedItem) {
//       console.log("Sorry, that's not an item on the menu...")
//     }
//   }

//   console.log(`The ${orderedItem[0]} is a great choice! That will be $${orderedItem[1]}`)

//   orderedItems.push(orderedItem[0])
//   bill += parseFloat(orderedItem[1])
// }

// console.log("Welcome to the Diner!\n\nHere is the menu:\n")
// displayMenu(entreeMenu)
// orderItem(entreeMenu, "entree")
// console.log("\nHere is the sides menu:\n")
// displayMenu(sideMenu)
// orderItem(sideMenu, "side")
// orderItem(sideMenu, "side")
// console.log("\nHere are the items you've ordered:")
// for (item of orderedItems) {
//   console.log(` ${item}`)
// }
// console.log(`Your bill today will be $${bill.toFixed(2)}`)


// ***Best***

const menus = {
    entrees: {
      hamburger: {
        name: "Hamburger",
        price: "2.50"
      },
      pizza: {
        name: "Pizza",
        price: "2.00"
      },
      sandwich: {
        name: "Sandwich",
        price: "1.00"
      }
    },
    sides: {
      fries: {
        name: "Fries",
        price: "1.50"
      },
      chips: {
        name: "Chips",
        price: "1.00"
      },
      "cheese fries": {
        name: "Cheese Fries",
        price: "2.50"
      }
    }
  }
  
  const orderedItems = []
  let bill = 0
  
  function displayMenu(menu) {
    Object.values(menus[menu]).forEach(item => console.log(`${item.name}: $${item.price}`))
  }
  
  function orderItem(menu, menuType) {
    let orderedItem
    while (!orderedItem) {
      let userInput = prompt(`\nWhat ${menuType} would you like?`).toLowerCase()
      orderedItem = menus[menu][userInput]
      if (!orderedItem) {
        console.log("Sorry, that's not an item on the menu...")
      }
    }
  
    console.log(`The ${orderedItem.name} is a great choice! That will be $${orderedItem.price}`)
  
    orderedItems.push(orderedItem.name)
    bill += parseFloat(orderedItem.price)
  }
  
  console.log("Welcome to the Diner!\n\nHere is the menu:\n")
  displayMenu("entrees")
  orderItem("entrees", "entree")
  console.log("\nHere is the sides menu:\n")
  displayMenu("sides")
  orderItem("sides", "side")
  orderItem("sides", "side")
  console.log("\nHere are the items you've ordered:")
  for (item of orderedItems) {
    console.log(` ${item}`)
  }
  console.log(`Your bill today will be $${bill.toFixed(2)}`)
  
  
  ***Using a class instead***
  
  ```
  class Menu {
    constructor (menuItems) {
      menuItems.forEach(item =>[item[0].toLowerCase()]) = {
        name: item[0],
        price: item[1]
      })
      
    }
  }
  
  const entrees = new Menu([["Hamburger", "2.50"], ["Pizza", "2.00"], ["Sandwich", "1.00"], ["Pasta", "2.00"]])
  
  const sides = new Menu([["Fries", "1.50"], ["Chips", "1.00"], ["Cheese Fries", "2.50"]])
  
  ```
  