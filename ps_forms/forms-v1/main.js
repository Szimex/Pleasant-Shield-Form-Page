///--- NAVBAR ---\\\
let prevSrollPos = window.pageYOffset;
window.onscroll = () => {
    let navbar = document.getElementById("navbar");
    let currentSrollPos = window.pageYOffset;
    if(prevSrollPos - currentSrollPos > 4) {
        navbar.style.top = "0";
    } else if (prevSrollPos < currentSrollPos) {
        navbar.style.top = "-100px"
    }
    prevSrollPos = currentSrollPos
};
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

let currentPage = 4;
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

///--- DISABLED INPUTS CASE ---\\\

/* \\\|||/// */

///--- BUILDING SIDES OPTIONS ---\\\

const sidesInputsId = [
    "orientation_side4_div", 
    "orientation_side5_div", 
    "orientation_side6_div", 
    "orientation_side7_div", 
    "orientation_side8_div"
]

const handlingSidesDivs = (value) => {
    for(let i = 0; i < 5; i++) {
        document.getElementById(sidesInputsId[i]).classList.add('invisible');
    }
    if (value == 4) {
        document.getElementById(sidesInputsId[ value - 4 ]).classList.remove('invisible');
    }
    if (value == 5) {
        document.getElementById(sidesInputsId[0]).classList.remove('invisible');
        document.getElementById(sidesInputsId[ value - 4 ]).classList.remove('invisible'); 
    }
    if (value == 6) {
        document.getElementById(sidesInputsId[0]).classList.remove('invisible');
        document.getElementById(sidesInputsId[1]).classList.remove('invisible');
        document.getElementById(sidesInputsId[ value - 4 ]).classList.remove('invisible'); 
    }
    if (value == 7) {
        document.getElementById(sidesInputsId[0]).classList.remove('invisible');
        document.getElementById(sidesInputsId[1]).classList.remove('invisible');
        document.getElementById(sidesInputsId[2]).classList.remove('invisible');
        document.getElementById(sidesInputsId[ value - 4 ]).classList.remove('invisible'); 
    }
    if (value == 8) {
        document.getElementById(sidesInputsId[0]).classList.remove('invisible');
        document.getElementById(sidesInputsId[1]).classList.remove('invisible');
        document.getElementById(sidesInputsId[2]).classList.remove('invisible');
        document.getElementById(sidesInputsId[3]).classList.remove('invisible');
        document.getElementById(sidesInputsId[ value - 4 ]).classList.remove('invisible'); 
    }
    // DRY! nesserly to improve thi function in meantime
}

let buildingSidesNum = document.getElementById('building_sides').value;
document.getElementById('building_sides').onchange = () => {
    buildingSidesNum = document.getElementById('building_sides').value;
    handlingSidesDivs(buildingSidesNum);
};


/* \\\|||/// */