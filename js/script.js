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
    image:" walter-gordon-office-manager.jpg",
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




/* Functions */
/**
 * Description stampare nome delle classi in console e sul Dom
 * @param {Array} personArray
 */
function personInfo(personArray){
    //catturo elemento sul dom
    const person = document.getElementById("person");
    for(let i= 0; i < personArray.length; i++){
        let thisClasses = personArray[i];
        console.log(thisClasses.name, thisClasses.role, thisClasses.image);

        //stampo stringa sul dom con le informazioni
       /*  person.innerHTML +=
        `
            <h1> ${thisClasses.name} ${thisClasses.role} ${thisClasses.image} </h1>
        
        ` */
    
    }
    
}