"use strict";
const catlist = document.querySelector(".js-list");


const kitten_1_name = 'NALA';
const kitten_1_image = 'https://dev.adalab.es/gato-siames.webp';
const kitten_1_race = 'CALLEJERO';
const kitten_1_desc = `1 Porte elegante, su patrón de color tan característico y sus ojos
de un azul intenso, pero su historia se remonta a Asía al menos
hace 500 años, donde tuvo su origen muy posiblemente.`;


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
catlist.innerHTML = htmlKitten_1;





const htmlKitten_2 = `
<li class="card ">
    <img
        class="card_img"
        src="https://dev.adalab.es/sphynx-gato.webp"
        alt="sphynx-cat"
    />
    <h3 class="card_title">Fiona</h3>
    <h4 class="card_race">Sphynx</h4>
    <p class="card_description">
        Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
        hasta con pinta de alienígena han llegado a definir a esta raza
        gatuna que se caracteriza por la «ausencia» de pelo.
    </p>
</li>
`;

catlist.innerHTML = catlist.innerHTML + htmlKitten_2;



const htmlKitten_3 = `
<li class="card js-list">
    <img
        class="card_img"
        src="https://dev.adalab.es/maine-coon-cat.webp"
        alt="maine-coon-cat"
    />
    <h3 class="card_title">Cielo</h3>
    <h4 class="card_race">Maine Coon</h4>
    <p class="card_description">
        3 Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
        bella mirada se ha convertido en una de sus señas de identidad.
        Sus ojos son grandes y las orejas resultan largas y en punta.
    </p>
</li>
`;

catlist.innerHTML = catlist.innerHTML + htmlKitten_3;







/*<li class="card js-list ">
            <article>
              <img
                class="card_img"
                src="https://dev.adalab.es/gato-siames.webp"
                alt="siames-cat"
              />
              <h3 class="card_title">Anastacio</h3>
              <h4 class="card_race">Siamés</h4>
              <p class="card_description">
                Porte elegante, su patrón de color tan característico y sus ojos
                de un azul intenso, pero su historia se remonta a Asía al menos
                hace 500 años, donde tuvo su origen muy posiblemente.
              </p>
            </article>
          </li>*/