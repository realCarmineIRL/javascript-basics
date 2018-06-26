let age = 65

if (age <= 7) {
    console.log('Child Discount')
}

if (age >= 65) {
    console.log('Senior Discount')
}

let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked) {
    console.log('the account is locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin user')
} else {
    console.log('Welcome')
}

let temp = 45

if (temp <= 32) {
    console.log('It is freezing outside')
} else if (temp >= 110) {
    console.log('it is way too hot outside')
} else {
    console.log('go for it, it is pretty nice outside')
}
