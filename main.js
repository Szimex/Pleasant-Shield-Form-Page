///--- NAVBAR ---\\\
// let prevSrollPos = window.pageYOffset;
// window.onscroll = () => {
//     let navbar = document.getElementById("navbar");
//     let currentSrollPos = window.pageYOffset;
//     if(prevSrollPos - currentSrollPos > 4) {
//         navbar.style.top = "0";
//     } else if (prevSrollPos < currentSrollPos) {
//         navbar.style.top = "-100px"
//     }
//     prevSrollPos = currentSrollPos
// };
/* \\\|||/// */

///---  DIV SWITCHING ---\\\
const pagesID = [
    "#client_information",
    "#product_type",
    "#bulding_information", 
    "#energy_consumption",
    "#building_orientation",
    "#film_choice",
    "#read_and_confirm", 
    "#print_pdf"
];

const prevButton = document.getElementById("prev_button");
const nextButton = document.getElementById("next_button");

const hidingDivs = () => {
    for (let i = 0; i < pagesID.length; i++) {
        if (i !== currentPage) {
            document.querySelector(pagesID[i]).style.display = 'none'
        } else {
            document.querySelector(pagesID[i]).style.display = 'block'
        }
    }
}

const handlingProgressBar = (value) => {
    document.getElementById('progress_bar_label').textContent = `Step ${value+1} of 8`
    document.getElementById('progress_bar').value = value+1;
}

let currentPage = 0;
const pageForward = () => {
    window.scrollTo(0, 0);
    currentPage ++;
    prevButton.style.display = 'inline'
    if (currentPage === 7) {
        nextButton.style.display = 'none'
    };
    hidingDivs();
    handlingProgressBar(currentPage);
};
const pageBackward = () => {
    window.scrollTo(0, 0);
    currentPage --;
    nextButton.style.display = 'inline'
    if (currentPage === 0) {
        prevButton.style.display = 'none'
    }
    hidingDivs();
    handlingProgressBar(currentPage)
};

window.onload = () => hidingDivs();
nextButton.addEventListener('click', () => pageForward());
prevButton.addEventListener('click', () => pageBackward());

/* \\\|||/// */

///--- EXISTING/NEW CLIENT ---\\\

document.getElementById('client1').onchange = () => {
    if(document.getElementById('client1').value == 'existing') {
        document.getElementById('choose_client').classList.remove('invisible');
    }
};
document.getElementById('client2').onchange = () => {
    if(document.getElementById('client2').value == 'new') {
        document.getElementById('choose_client').classList.add('invisible');
    }
}

/* \\\|||/// */

///--- DISABLED INPUTS CASE ---\\\

const heatingSystem = document.getElementById('heating_system');
const heatingSystemInput = document.getElementById('heating_system_input');
heatingSystem.onchange = () => {
    if(heatingSystem.value == 'other'){
        heatingSystemInput.removeAttribute('hidden')
    } else {
        heatingSystemInput.setAttribute('hidden', 'hidden')
    }
}

const windowSetBackInputsHandling = (selectId, inputId1, inputId2) => {
    document.getElementById(selectId).onchange = () => {
        if(document.getElementById(selectId).value == 'overhang') {
            document.getElementById(inputId2).setAttribute('hidden', 'hidden');
            document.getElementById(inputId1).removeAttribute('hidden');
        } else if (document.getElementById(selectId).value == 'recessed') {
            document.getElementById(inputId1).setAttribute('hidden', 'hidden');
            document.getElementById(inputId2).removeAttribute('hidden');
        } else {
            document.getElementById(inputId1).setAttribute('hidden', 'hidden');
            document.getElementById(inputId2).setAttribute('hidden', 'hidden');

        }
    }
};
windowSetBackInputsHandling('window_set_back_side1', 'window_set_back_side1_overhang', 'window_set_back_side1_recessed');
windowSetBackInputsHandling('window_set_back_side2', 'window_set_back_side2_overhang', 'window_set_back_side2_recessed');
windowSetBackInputsHandling('window_set_back_side3', 'window_set_back_side3_overhang', 'window_set_back_side3_recessed');
windowSetBackInputsHandling('window_set_back_side4', 'window_set_back_side4_overhang', 'window_set_back_side4_recessed');
windowSetBackInputsHandling('window_set_back_side5', 'window_set_back_side5_overhang', 'window_set_back_side5_recessed');
windowSetBackInputsHandling('window_set_back_side6', 'window_set_back_side6_overhang', 'window_set_back_side6_recessed');
windowSetBackInputsHandling('window_set_back_side7', 'window_set_back_side7_overhang', 'window_set_back_side7_recessed');
windowSetBackInputsHandling('window_set_back_side8', 'window_set_back_side8_overhang', 'window_set_back_side8_recessed');
/* \\\|||/// */

///--- OPTIONS RELATED TO THE BUILDING'S ORIENTATION AND FILM CHOICE ---\\\

const buidlingSidesInputsId = [
    "side4", 
    "side5", 
    "side6", 
    "side7", 
    "side8"
];
const filmSelectionDivId = [
    "film_selection_side4",
    "film_selection_side5",
    "film_selection_side6",
    "film_selection_side7",
    "film_selection_side8"
];
const filmSetupDivId = [
    "film_setup_side4",
    "film_setup_side5",
    "film_setup_side6",
    "film_setup_side7",
    "film_setup_side8"
]

const handlingBuildingSidesDivs = (value) => {
    for(let i = 0; i < 5; i++) { 
        if(i <= value - 4) {
            document.getElementById(buidlingSidesInputsId[i]).classList.remove('invisible');
            document.getElementById(filmSelectionDivId[i]).classList.remove('invisible');
            document.getElementById(filmSetupDivId[i]).classList.remove('invisible');
        } else {
            document.getElementById(buidlingSidesInputsId[i]).classList.add('invisible');
            document.getElementById(filmSelectionDivId[i]).classList.add('invisible');
            document.getElementById(filmSetupDivId[i]).classList.add('invisible');
        }
    }
};

document.getElementById('building_sides').onchange = () => {
    let buildingSidesNum = document.getElementById('building_sides').value;
    handlingBuildingSidesDivs(buildingSidesNum);
};

const filmSelectionId = [
    "bird_film_side1_selection",
    "solar_film_side1_selection",
    "security_film_side1_selection",
    "bird_film_side2_selection",
    "solar_film_side2_selection",
    "security_film_side2_selection",
    "bird_film_side3_selection",
    "solar_film_side3_selection",
    "security_film_side3_selection",
    "bird_film_side4_selection",
    "solar_film_side4_selection",
    "security_film_side4_selection",
    "bird_film_side5_selection",
    "solar_film_side5_selection",
    "security_film_side5_selection",
    "bird_film_side6_selection",
    "solar_film_side6_selection",
    "security_film_side6_selection",
    "bird_film_side7_selection",
    "solar_film_side7_selection",
    "security_film_side7_selection",
    "bird_film_side8_selection",
    "solar_film_side8_selection",
    "security_film_side8_selection",
];
const filmSetupId = [
    "side1_bird_film",
    "side1_solar_film",
    "side1_security_film",
    "side2_bird_film",
    "side2_solar_film",
    "side2_security_film",
    "side3_bird_film",
    "side3_solar_film",
    "side3_security_film",
    "side4_bird_film",
    "side4_solar_film",
    "side4_security_film",
    "side5_bird_film",
    "side5_solar_film",
    "side5_security_film",
    "side6_bird_film",
    "side6_solar_film",
    "side6_security_film",
    "side7_bird_film",
    "side7_solar_film",
    "side7_security_film",
    "side8_bird_film",
    "side8_solar_film",
    "side8_security_film",
];
const handlingFilmChoice = () => {
    for(let i = 0; i < filmSetupId.length; i++) {
        document.getElementById(filmSelectionId[i]).onchange = () => {
            if(document.getElementById(filmSelectionId[i]).value == 'yes') {
                document.getElementById(filmSetupId[i]).classList.remove('invisible')
            } else {
                document.getElementById(filmSetupId[i]).classList.add('invisible')
            }
        }
    }
}
const handlingFilmChoiceTEST = () => {
    for(let i = 0; i<24;i++) {
        document.getElementById(filmSelectionId[i]).classList.remove('invisible');
        document.getElementById(filmSetupId[i]).classList.remove('invisible');
    }
}
handlingFilmChoiceTEST();
/* \\\|||/// */

///--- MATH FOR ENERGY CONSUPTION ---\\\

const countCosts = (amountId, consumptionId, scoreId) => {
    document.getElementById(amountId).onchange = () => {
        if (document.getElementById(amountId).value !== NaN) {
        document.getElementById(scoreId).innerText = document.getElementById(amountId).value / document.getElementById(consumptionId).value;
        }
    }
    document.getElementById(consumptionId).onchange = () => {
        if (document.getElementById(consumptionId).value !== NaN) {
        document.getElementById(scoreId).innerText = document.getElementById(amountId).value / document.getElementById(consumptionId).value;
        }
    }
}
countCosts('kilowatt_amount', 'annual_kwhr', 'cost_per_kwhr');
countCosts('gas_consumption', 'cubic_meter_gas', 'cost_per_therm');


/* \\\|||/// */



