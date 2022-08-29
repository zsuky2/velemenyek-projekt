const reviews = [

    {
        name: "Szent Endre",
        job: "PHP fejlesztő",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ullam quisquam velit provident quos perferendis ipsum animi nostrum dolorem voluptates. Expedita iste beatae quaerat itaque est delectus laudantium cupiditate porro. Esse doloremque labore culpa nobis ratione dolor, placeat odio veritatis, iure atque commodi temporibus ipsa nesciunt debitis quod expedita minima. Magnam rem harum doloremque quibusdam. Placeat sapiente quae blanditiis eius facilis pariatur vero odio ullam, esse porro voluptate, id optio sed in quidem veniam rem."
    },

    {
        name: "Nagy Zsanett",
        job: "Marketing menedzser",
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ullam quisquam velit provident quos perferendis ipsum animi nostrum dolorem voluptates. Expedita iste beatae quaerat itaque est delectus laudantium cupiditate porro. Esse doloremque labore culpa nobis ratione dolor, placeat odio veritatis, iure atque commodi temporibus ipsa nesciunt debitis quod expedita minima."
    },

    {
        name: "Török Bálint",
        job: "Automata tesztelő",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ullam quisquam velit provident quos perferendis ipsum animi nostrum dolorem voluptates. Expedita iste beatae quaerat itaque est delectus laudantium cupiditate porro. Esse doloremque labore culpa nobis ratione dolor, placeat odio veritatis, iure atque commodi temporibus ipsa nesciunt debitis quod expedita minima."
    }

]

//A használni kívánt elemek eltárolása változókba
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

//Kiinduló érték megadása (ez fogja reprezentálni az aktuális elemet a tömbömben)
let current = 0;

//Kiinduló személy betöltése
window.addEventListener("load", ()=> {

    const item = reviews[current];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
})


//Írunk egy függvényt, amellyel ki tudjuk választani a következő emberünket
function showPerson(person){

    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
}

//Gombnyomásra ugorjunk a következő emberre
nextBtn.addEventListener("click", () => {

    current++;

   if(current > reviews.length -1){

        current = 0;
    }

    showPerson(current);
})


//Gombnyomásra ugorjunk az előző emberre
prevBtn.addEventListener("click", () => {

    current--;

   if(current < 0){

        current = reviews.length - 1;
       
    }

    showPerson(current);
})