let temp = 30

if (temp >= 60 && temp <= 90) { //AND
    console.log('it is pretty nice outside')
} else if (temp <= 0 || temp >= 120) { // OR
    console.log('it is dangerous outside')
} else {
    console.log('do what you want')
}

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('offer only vegan food')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('offer some vegan food')
} else {
    console.log('offer all options food')
}