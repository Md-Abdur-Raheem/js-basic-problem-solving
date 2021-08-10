// Problem - 1
function seerToMon(seer) {

    //unexpected input handling
    if (typeof seer != 'number'){
        return 'Oops! please enter a valid positive number'; // seer must be a number
    }
    else if (seer < 0) {
        return 'Oops!! please enter a valid positive number'; // seer can not be a negetive number
    }

    else {
        //calculation
        const seerPerMon = 40;
        const mon = seer / seerPerMon;
        return mon;
    }
}

let mySeer = 180;
const result = seerToMon(mySeer);
console.log(result);










//Problem - 2
function totalSales(quantityOfShirts, quantityOfPants, quantityOfShoes) {

    //unexpected input handling
    if (typeof quantityOfShirts != 'number' || typeof quantityOfPants != 'number' || typeof quantityOfShoes != 'number') {
        return 'Oops!! please enter valid positive quantity'; // quantity must be a number
    }
    else if (quantityOfShirts < 0 || quantityOfPants < 0 || quantityOfShoes < 0) {
        return 'Oops!! please enter valid positive quantity'; // quantity can not be a negetive number
    }
        
    else {
        //calculation
        const priceOfShirt = 100;
        const priceOfPant = 200;
        const priceOfShoe = 500;
        const totalShirtPrice = priceOfShirt * Math.round(quantityOfShirts); //shirt quantity can not be a float
        const totalPantPrice = priceOfPant * Math.round(quantityOfPants); //pant quantity can not be a float
        const totalShoePrice = priceOfShoe * Math.round(quantityOfShoes); //shoe quantity can not be a float
        const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;
        return totalPrice;
    }
}

let myQuantityOfShirt = 10;
let myQuantityOfPant = 5;
let myQuantityOfShoe = 2;
const result = totalSales(myQuantityOfShirt, myQuantityOfPant, myQuantityOfShoe);
console.log(result);











//Problem - 3
function deliveryCost(quantityOfProduct) {

        //unexpected input handling
    if (typeof quantityOfProduct != 'number') {
        return 'Oops!! please enter valid positive quantity'; // quantity must be a number
    }
    else if (quantityOfProduct < 0) {
        return 'Oops!! please enter valid positive quantity'; // quantity can not be a negetive number
    }
        
    else {
        //calculation
        const firstRange = 100;
        const secondRange = 200;
        const costFirstHundred = 100;
        const costSecondHundred = 80;
        const costExtraTwoHundred = 50;
        let totalDeliveryCost = 0;
        let remainingProduct = 0;

        //for 0 to 100
        if (quantityOfProduct <= 100) {
            totalDeliveryCost = costFirstHundred * Math.round(quantityOfProduct); //product quantity must be an integer
            return totalDeliveryCost;
        }

        //for 100 to 200
        else if (quantityOfProduct > 100 && quantityOfProduct <= 200) {
            remainingProduct = Math.round(quantityOfProduct) - firstRange; //product quantity must be an integer
            totalDeliveryCost = (costFirstHundred * firstRange) + (remainingProduct * costSecondHundred);
            return totalDeliveryCost;
        }
            
        //for greater than 200
        else if (quantityOfProduct > 200) {
            remainingProduct = Math.round(quantityOfProduct) - secondRange; //product quantity must be an integer
            totalDeliveryCost = (costFirstHundred * firstRange) + (costSecondHundred * firstRange) + (costExtraTwoHundred * remainingProduct);
            return totalDeliveryCost;
        }

    }
}

let myProductQuantity = 450;
const result = deliveryCost(myProductQuantity);
console.log(result);











//Problem - 4
function perfectFriend(friendsName) {

        //unexpected input handling
    if (typeof friendsName == 'number' || typeof friendsName == 'string' || typeof friendsName == 'boolean') { // friendsName must be an array
        return "Oops!! please enter a full array of your friend's name";
    }
    for (let i = 0; i < friendsName.length; i++){
        if (typeof friendsName[i] != 'string') {
            return "Oops!! please enter a full array of your friend's name"; // firend's name must be a string
        }
    }

    //calculation
    for (const element of friendsName) {
        if (element.length == 5) {
            return element;
        }
    }
}

const myFriendsName = ['tanvir', 'prince', 'saikat', 'asik', 'shakkhar', 'supto', 'shakil', 'rinku', 'toushif', 'adrit', 'mezbah'];
const friendWithFiveCharacter = perfectFriend(myFriendsName);
console.log(friendWithFiveCharacter);









