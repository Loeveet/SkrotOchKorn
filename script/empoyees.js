const url = "https://randomuser.me/api/?results=15"
const employees = document.getElementById("employees")

fetch(url)
    .then(function(response) { return response.json()})
    .then(function(data){

        let people = data.results

        people.map(function(person) {

            console.log(person)

            let card = document.createElement("div")
            card.setAttribute("class", "card")

            let name = document.createElement("h3")
            name.innerHTML = person.name.title + ". " + person.name.first + " " + person.name.last
            
            let img = document.createElement("img")
            img.src = person.picture.medium
            
            let age = document.createElement("p")
            age.setAttribute("class", "age")
            age.innerHTML = "Ålder: " + person.dob.age

            let phonenumber = document.createElement("p")
            phonenumber.setAttribute("class", "phonenumber")
            phonenumber.innerHTML = "Telefonnummer: " + person.phone
            
            let email = document.createElement("a")
            email.setAttribute("class", "email")
            email.href = "mailto:" + person.email

            let emailto = document.createElement("p")
            emailto.innerHTML = person.email

            card.appendChild(img)
            card.appendChild(name)
            card.appendChild(age)
            card.appendChild(phonenumber)
            card.appendChild(email)
            email.appendChild(emailto)

            employees.appendChild(card)

        })
    })