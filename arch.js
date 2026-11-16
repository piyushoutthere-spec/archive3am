// switch from landing to dash
const enterbtn = document.getElementById("enterbtn");
const homepg = document.querySelector(".homepage");
const hero = document.querySelector(".hero");
const dash = document.getElementById("dash");

//open dash
enterbtn.addEventListener("click",function () {
    hero.style.display = "none";
    dash.style.display = "grid";
});

// case file info
const casecards = document.querySelectorAll(".casecard");

const casetitle = document.getElementById("casetitle");
const casedesc = document.getElementById("casedecs");
const casemeta = document.getElementById("caseMeta");

const caserecords = {
    "001" : {
        title: "THE VANISHING SIGNAL",
        description: "A mysteriuos radio transmission was detected in 1978. The signal disappeared without explanation, leaving us behind an undefined recording.",
        status: "UNRESOLVED"
    },

    "002" : {
        title: "THE EMPTY SCARY STATION",
        description: "An abandoned railway station was discovered with its lights still operation with SOUND!. No staff or passengers could be found. So what is...!?",
        status: "UNDER REVIEW"
    },

    "003" : {
        title: "PROJECT BLACKOUT",
        description: "A restricted investigation involving an unexplained power failure. Several records connected to the incident remain CLASSIFIED!. So what does that..!?",
        status: "CLASSIFIED"
    }
};

// display selected case info

casecards.forEach(function(card) {
    card.addEventListener("click", function () {
        const casenum = card.dataset.case;
        const record = caserecords[casenum];

        casetitle.textContent = record.title;
        casedesc.textContent = record.description;
        casemeta.textContent = "CASE" + casenum + "/STATUS: " + record.status;   
    });
});

// recovered document info
const documents = [
    {
        title: "ORIGINAL INVESTIGATION REPORT",
        text: "DATE: 14 OCTOBER 1978. An unidentified transmission was recorded at 03:17 AM. The soure could not be traced. All further investigation records were marked for review."
    },
    {
        title: "MISSING PERSONNEL RECORDS",
        text:"DATE: 22 JUNE 1989. Several personnel records were discovered missing from the central database.No official explanation was provided."
    },
    {
        title:"TRANSMISSION ANALYSIS",
        text:"DATE:09 FEBRUARY 1991. Recovered audio contained a repeating signal pattern. The transmission ended abruptly before its origin could be identified."
    }
];

//open selected document
const docbtn = document.querySelectorAll(".viewdoc");

docbtn.forEach(function (button) {
    button.addEventListener("click",function() {
        const docitem = button.closest(".documentitem");
        const docnum = docitem.dataset.documents;
        const selecteddoc = documents[docnum];

        document.getElementById("doctitle").textContent = selecteddoc.title;
        document.getElementById("doctext").textContent = selecteddoc.text;
    });
});
