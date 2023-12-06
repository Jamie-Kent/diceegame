// DICE 1 GENERATOR
    var diceNumber1 = Math.ceil(Math.random() * 6);

// DICE2 GENERATOR
    var diceNumber2 = Math.ceil(Math.random() * 6);


    
// DICE 1 IMAGE SOURCE
    var randomImageSource1 = "images/dice" + diceNumber1 + ".png";

    document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);



// DICE 2 IMAGE SOURCE
    var randomImageSource2 = "images/dice" + diceNumber2 + ".png"; 

    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// WIN LOGIC
    if (diceNumber1 > diceNumber2) {
        document.querySelector("div h1").textContent = "🚩 Player 1 Wins";
    }
    else if (diceNumber1 < diceNumber2) {
        document.querySelector("div h1").textContent = "Player 2 Wins 🚩";
    }
    else {
        document.querySelector("div h1").textContent = "Draw!";
    }



// function diceeGame () {

//     // DICE1
//     // var rand1 = Math.random();
//     // diceNumber1 = Math.ceil(rand1 * 6)
//     //  console.log(diceNumber1)

//     var diceNumber1 = Math.ceil(Math.random() * 6);

//     // DICE2
//     var diceNumber2 = Math.ceil(Math.random() * 6);


//     // PLAYER 1 DICE IMAGES
//     if (diceNumber1 == 1) {
//         console.log("Player 1 scored 1")
//         document.querySelector("img.img1").setAttribute("src", "images/dice1.png")
//     }
//     else if (diceNumber1 == 2) {
//         console.log("Player 1 scored 2") 
//         document.querySelector("img.img1").setAttribute("src", "images/dice2.png")
//     }
//     else if (diceNumber1 == 3) {
//         console.log("Player 1 scored 3") 
//         document.querySelector("img.img1").setAttribute("src", "images/dice3.png")
//     }
//     else if (diceNumber1 == 4) {
//         console.log("Player 1 scored 4") 
//         document.querySelector("img.img1").setAttribute("src", "images/dice4.png")
//     }
//     else if (diceNumber1 == 5) {
//         console.log("Player 1 scored 5") 
//         document.querySelector("img.img1").setAttribute("src", "images/dice5.png")
//     }
//     else if (diceNumber1 == 6) {
//         console.log("Player 1 scored 6") 
//         document.querySelector("img.img1").setAttribute("src", "images/dice6.png")
//     }

//     // PLAYER 2 DICE IMAGES
//     if (diceNumber2 == 1) {
//         console.log("Player 2 scored 1")
//         document.querySelector("img.img2").setAttribute("src", "images/dice1.png")
//     }
//     else if (diceNumber2 == 2) {
//         console.log("Player 2 scored 2") 
//         document.querySelector("img.img2").setAttribute("src", "images/dice2.png")
//     }
//     else if (diceNumber2 == 3) {
//         console.log("Player 2 scored 3") 
//         document.querySelector("img.img2").setAttribute("src", "images/dice3.png")
//     }
//     else if (diceNumber2 == 4) {
//         console.log("Player 2 scored 4") 
//         document.querySelector("img.img2").setAttribute("src", "images/dice4.png")
//     }
//     else if (diceNumber2 == 5) {
//         console.log("Player 2 scored 5") 
//         document.querySelector("img.img2").setAttribute("src", "images/dice5.png")
//     }
//     else if (diceNumber2 == 6) {
//         console.log("Player 2 scored 2") 
//         document.querySelector("img.img2").setAttribute("src", "images/dice6.png")
//     }

    

//     if (diceNumber1 > diceNumber2) {
//         document.querySelector("div h1").textContent = "🚩 Player 1 Wins";
//     }
//     else if (diceNumber1 < diceNumber2) {
//         document.querySelector("div h1").textContent = "Player 2 Wins 🚩";
//     }
//     else {
//         document.querySelector("div h1").textContent = "Draw!";
//     }

// }
