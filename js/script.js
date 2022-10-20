/* MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite. */

const arrayPerson = [
    {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image:"wayne-barnett-founder-ceo.jpg",
    },
    {
    name: "Angela Caroll",
    role: "Chief Editor",
    image:"angela-caroll-chief-editor.jpg",
    },
    {
    name: "Walter Gordon",
    role: "Office Manager",
    image:"walter-gordon-office-manager.jpg",
    },
    {
    name: "Angela Lopez",
    role: "Social Media Manger",
    image:"angela-lopez-social-media-manager.jpg",
    },
    {
    name: "Scott Estrada",
    role: "Developer",
    image:"scott-estrada-developer.jpg",
    },
    {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image:"barbara-ramos-graphic-designer.jpg",
    },

];

console.log(arrayPerson);

//Richiamo funzione che stampa nomi in console
const salveInfo = personInfo(arrayPerson);


const btnOpen = document.querySelector(".btn-act");
const formAct = document.querySelector(".form");
const chevron = document.querySelector(".fa-solid");

const inputName = document.getElementById("name");
const inputRole = document.getElementById("role");
const inputImage = document.getElementById("image");
const btnInsert = document.getElementById("btn");
console.log(btnInsert, inputName, inputRole, inputImage);

//Richiamo funzione che mi permette di integragire con la form
btnOpen.addEventListener("click", moveForm);
// event per inserire una nuova card
btnInsert.addEventListener("click", insertNewCard);
console.log(btnInsert);




/* Functions */
/**
 * Description stampare nome delle classi in console e sul Dom
 * @param {Array} personArray
 */
function personInfo(personArray){
    //catturo elemento sul dom
    let person = document.querySelector(".container-wrap");
    console.log(person);

    for(let i= 0; i < personArray.length; i++){
        let thisClasses = personArray[i];
        console.log(thisClasses.name, thisClasses.role, thisClasses.image);

        //stampo stringa sul dom con le informazioni
        person.innerHTML +=
        `
        <div class="card">
            <img src="img/${thisClasses.image}" alt="">
            <h3>${thisClasses.name}</h3>
            <p>${thisClasses.role}</p>
        </div>
        
        `
    
    }
    
}

/**
 * Description Spostare elementi nel dom
 * @returns {any}
 */
function moveForm(){
    formAct.classList.toggle("move-left");
    chevron.classList.toggle("rotate-chevron");
}

function insertNewCard(){
    let person = document.querySelector(".container-wrap");
    const newPrf = {
        name: inputName.value,
        role: inputRole.value,
        image: inputImage.value
    }
    arrayPerson.push(newPrf);
    person.innerHTML+=
        `
        <div class="card">
            <img src="${newPrf.image}" alt="">
            <h3>${newPrf.name}</h3>
            <p>${newPrf.role}</p>
        </div>
        `;
}



