let userInputDiceRolled = document.querySelector("#number-of-dice")
let rollButton = document.querySelector("#roll")
let sumOfRolls = document.querySelector("#total-rolls")
let showAllRolls = document.querySelector("#ShowAllRolls")




let dieRoll =[]

rollButton.addEventListener('click', function(){ 
    dieRoll = []
    let i =0

while(i < userInputDiceRolled.value){
    let results= Math.floor(Math.random()* 6 )/* + " orange peel" */
   
    if(results == 0){
        results++
    }
    dieRoll.push(results)

   
    console.log(results)
    i++
}
    // listOfResults.appendChild(li)

    const reducer = (accumulator, currentValue) => accumulator + currentValue; /*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce*/
    

    console.log(dieRoll)
    console.log(dieRoll.reduce(reducer))
    let sum = dieRoll.reduce(reducer) 
    sumOfRolls.innerText = "It adds up to be " + sum + "."

    // console.log(userInputDiceRolled.value)
})







showAllRolls.addEventListener('click', function(){
    let listOfResults = document.querySelector("#listOfResults")
    listOfResults.innerHTML = ''
    let u = 0
    while(u < dieRoll.length){
        let li = document.createElement("LI")
        
        li.append(dieRoll[u])
        listOfResults.appendChild(li)
        
        console.log(dieRoll[u])
         
        u++
    }
    
    listOfResults.style.display = "block";
    console.log('I\'m working, here!')
})




// console.log(userInputDiceRolled)
// console.log(rollButton)
// console.log(sumOfRolls)
// console.log(ShowAllRolls)
// console.log(listOfResults)