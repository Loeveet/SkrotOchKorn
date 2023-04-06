buildmenu()
function buildmenu() {
    document.getElementById("menyn").innerHTML = ""
    let links = [
        ["Startsida", "index.html"],
        ["Produkter", "products.html"],
        ["Kontakta oss", "contactempoyees.html"],
        ["Kontaktsformulär", "contactform.html"],
        ["Media", "media.html"]
    ]
    
    for(let i = 0; i < links.length; i++){
        
        let listitem = document.createElement("li")
        let link = document.createElement("a")
        link.href = links[i][1]
        link.appendChild(document.createTextNode(links[i][0]))
        listitem.appendChild(link)
        document.getElementById("menyn").appendChild(listitem)
        
    }
}

function calculatePrice(){
    let price = 0
    let cb1 = document.getElementById("buydigger")
    let cb2 = document.getElementById("buycrane")
    let cb3 = document.getElementById("buytruck")
    if (cb1.checked){
        price += 500
    }
    if (cb2.checked){
        price += 2000
    }
    if (cb3.checked){
        price += 3000
    }

    document.getElementById("totalprice").innerHTML = "<span> Totalt pris: " + price + " kronor </span>"
}