class Employers {
    constructor(Fname, Lname, Birthday, Adress, PhoneNumber, Email, Password, Contrat, Old) {
        this.Fname = Fname;
        this.Lname = Lname;
        this.Birthday = Birthday;
        this.Adress = Adress;
        this.PhoneNumber = PhoneNumber;
        this.Email = Email;
        this.Password = Password;
        this.Contrat = Contrat;
        this.Old = Old;
    }
}

let Fname = document.getElementById("Fname")
let Lname = document.getElementById("Lname")
let Birthday = document.getElementById("Birthday")
let Adress = document.getElementById("Adress")
let PhoneNumber = document.getElementById("PhoneNumber")
let Email = document.getElementById("Email")
let Password = document.getElementById("Password")
let Contrat = document.getElementById("Contrat")
let Old = document.getElementById("Old")

let tableau = []

document.getElementById("send").addEventListener("click", (e) => {
    e.preventDefault()
    if (Fname.value.length < 3 || Fname.value.length > 15){

        Fname.style.border = "1px solid red"
        alert("Entrez une valeur correcte")
        return
    }
    if (Password.value.length < 8 || Password.value.length > 15){
        Password.style.border = "1px solid red"
        alert("Entrez un mot de passe valide")
        return
    }
    if ((Fname.value == "") || (Lname.value == "") || (Birthday.value == "") || 
    (Adress.value == "") || (PhoneNumber.value == "") || (Email.value == "") || 
    (Password.value == "") || (Contrat.value == "") || (Old.value == "")) {
        alert("Remplissez tous les champs ! ")
    } else {
        send();
    }

})

function send(e) {

    // console.log(Fname.value)
    // console.log(Lname.value)
    // console.log(Birthday.value)
    // console.log(Adress.value)
    // console.log(PhoneNumber.value)
    // console.log(Email.value)
    // console.log(Password.value)
    // console.log(Contrat.value)
    // console.log(Old.value)


    fnameValue = Fname.value;
    lnameValue = Lname.value;
    birthdayValue = Birthday.value;
    adressValue = Adress.value;
    phoneNumberValue = PhoneNumber.value;
    emailValue = Email.value;
    passwordValue = Password.value;
    contratValue = Contrat.value;
    oldValue = Old.value;



    let monAnnee = new Date(birthdayValue).getFullYear()
    let anneeActuelle = new Date().getFullYear()
    console.log("L'âge est : ", anneeActuelle - monAnnee)

    let nouvellePersonne = new Employers(fnameValue, lnameValue, birthdayValue, adressValue, phoneNumberValue, emailValue, passwordValue, contratValue, oldValue)



    tableau.push(nouvellePersonne)
    console.log(tableau);
    console.log(nouvellePersonne)

    let table = document.querySelector("table")
    table.innerHTML = `<tr>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Date de naissance</th>
        <th>Adresse</th>
        <th>Numéro de téléphone</th>
        <th>E-mail</th>
        <th>Mot de passe</th>
        <th>Type de contrat</th>
        <th>Date d'entrée en entreprise</th>
    </tr>`
    for (const obj of tableau) {
        table.innerHTML += `
        <tr>
            <td><a href="pageNom1.html" target="_blank">${obj.Fname}</a></td>
            <td>${obj.Lname}</td>
            <td>${obj.Birthday}</td>
            <td>${obj.Adress}</td>
            <td>${obj.PhoneNumber}</td>
            <td>${obj.Email}</td>
            <td>${obj.Password}</td>
            <td>${obj.Contrat}</td>
            <td>${obj.Old}</td>
        </tr>`
    }
}