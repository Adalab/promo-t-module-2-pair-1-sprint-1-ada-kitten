"use strict";

//llamando con ".js-list " a todo lo esta envuelto en esta clase EN html DESDE js.

const catlist = document.querySelector(".js-list");

const input_search_desc = document.querySelector('.js_in_search_desc');

const descrSearchText = input_search_desc.value;

if( htmlKitten_1.includes(descrSearchText) ) {
    
    const kitten_1_desc  = `1 Porte elegante, su patrón de color tan característico y sus ojos
    de un azul intenso, pero su historia se remonta a Asía al menos
    hace 500 años, donde tuvo su origen muy posiblemente.`;
     
    
    //Completa el código
    }
    

    if( htmlKitten_2.includes(descrSearchText) ) {
    //Completa el código
    }
    
    if(htmlKitten_3 .includes(descrSearchText) ) {
    //Completa el código
    }
    






                           //gato 1
   //***nombres de la variables = (con su significado )                        
const kitten_1_name = 'NALA';
const kitten_1_image = 'https://dev.adalab.es/gato-siames.webp';
const kitten_1_race = 'CALLEJERO';
const kitten_1_desc = `1 Porte elegante, su patrón de color tan característico y sus ojos
de un azul intenso, pero su historia se remonta a Asía al menos
hace 500 años, donde tuvo su origen muy posiblemente.`;

//***  htmlkitten_1: es todo ese "algo" envuelto bajo este nombre (htmlkitten_1) interpolar ${}de lso datos de la lsita de gatos

const htmlKitten_1 = ` 
<li class="card ">
    <article>
    <img
    class="card_img"
        src="${kitten_1_image}"
        alt="siames-cat"
    />
    <h3 class="card_title">${kitten_1_name}</h3>
    <h4 class="card_race">${kitten_1_race}</h4>
    <p class="card_description">
        ${kitten_1_desc}
    </p>
    </article>
</li>
`;

catlist.innerHTML = htmlKitten_1; // catlist.innerHTML: es como metemos "algo" DESDE js al html con la variante catlis) y htmlkitten_1: es todo ese "algo" envuelto bajo este nombre (htmlkitten_1)


                                 //gato 2

//***nombres de la variables = (con su significado )

const kitten_2_name = "Fiona"
const kitten_2_image = "https://dev.adalab.es/sphynx-gato.webp"
const kitten_2_race = "Sphynx"
const kitten_2_desc = `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
hasta con pinta de alienígena han llegado a definir a esta raza
gatuna que se caracteriza por la «ausencia» de pelo.`

//*** htmlkitten_2: es todo ese "algo" envuelto bajo este nombre (htmlkitten_2) y interapolacion ${} de datos 

const htmlKitten_2 = `
<li class="card ">
    <img
        class="card_img"
        src=${kitten_2_image}
        alt="sphynx-cat"
    />
    <h3 class="card_title">${kitten_2_name}</h3>
    <h4 class="card_race">${kitten_2_race}</h4>
    <p class="card_description">
        ${kitten_2_desc}
    </p>
</li>
`;

catlist.innerHTML = catlist.innerHTML + htmlKitten_2;

                          //gat 3

 //***nombres de la variables = (con su significado )
 
 const kitten_3_name = "Cielo"
 const kitten_3_image = "https://dev.adalab.es/maine-coon-cat.webp"
 const kitten_3_race  = "Maine Coon"
 const kitten_3_desc = `3 Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
 bella mirada se ha convertido en una de sus señas de identidad.
 Sus ojos son grandes y las orejas resultan largas y en punta.`

//*** htmlkitten_3: es todo ese "algo" envuelto bajo este nombre (htmlkitten_3) y interpolacion

const htmlKitten_3 = `
<li class="card js-list">
    <img
        class="card_img"
        src="https://dev.adalab.es/maine-coon-cat.webp"
        alt="maine-coon-cat"
    />
    <h3 class="card_title">${kitten_3_name }</h3>
    <h4 class="card_race">${kitten_3_race}</h4>
    <p class="card_description">${kitten_3_desc}
    <P>
</li>
`;

catlist.innerHTML = catlist.innerHTML + htmlKitten_3;







