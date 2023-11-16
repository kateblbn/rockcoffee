const coffees = [
    {
        name: "Espresso",
        price: "2"
    },
    {
        name: "Americano",
        price: "2"
    },
    {
        name: "Cappuchino",
        price: "2.5"
    },
    {
        name: "Irish with whiskey",
        price: "9"
    },
    {
        name: "Ice Latte",
        price: "6"
    },
    {
        name: "Espresso Panna",
        price: "5.5"
    },
    {
        name: "Caramel Macchiato",
        price: "6"
    }
]

const deserts = [
    {
        name: "Chocolate Cupcake",
        price: "3.5"
    },
    {
        name: "Blackout Cake",
        price: "6"
    },
    {
        name: "Tiramisu",
        price: "6"
    },
    {
        name: "Red Velvet Cake",
        price: "7"
    },
    {
        name: "Caramel Cake",
        price: "6.5"
    },
    {
        name: "Coconut Cake",
        price: "6.5"
    }
]

const coffeesDiv = document.getElementById('coffees')
const desertsDiv = document.getElementById('deserts')

coffees.forEach(coffee => {
    coffeesDiv.innerHTML += `
    <li class="coffee">
    <p class="coffee__margin">${coffee.name} </p>
    <span></span>
    <p class="coffee__price"> ${coffee.price}$</p>
    </li>`
})

deserts.forEach(desert => {
    desertsDiv.innerHTML += `
    <li class="coffee">
    <p class="coffee__margin">${desert.name}</p>
    <span></span>
    <p class="coffee__price">${desert.price}$</p>
    </li>`
})

const bandname = document.getElementById('name')
const membersnumber = document.getElementById('membersnumber')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const btn = document.getElementById('btn')
const result = document.getElementById('result')

btn.addEventListener("click", function (b) {
    b.preventDefault()
    console.log(`Name:${bandname.value}`)
    console.log(`Members:${membersnumber.value}`)
    console.log(`Email:${email.value}`)
    console.log(`Phone:${phone.value}`)

    result.innerHTML = `
    <div class="info">
    <h4>Congratulations!</h4>
    <div class="details">
    <p class="details__descr">You are welcome to our Rockoffee to perform. We will contact you to discuss the date and hour</p>
    <span>Details:</span>
    <br></br>
    <p><strong>Name: </strong>${bandname.value}</p>
    <p><strong>Members: </strong>${membersnumber.value}</p>
    <p><strong>Email: </strong>${email.value}</p>
    <p><strong>Phone: </strong>${phone.value}</p>
    </div>
    </div>
    `
    document.getElementById("form").style.display = 'none'
    result.style.display = 'flex'

})