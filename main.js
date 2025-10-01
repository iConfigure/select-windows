/** @format */
console.log("loaded");
function scrollToConfigurator(event) {
    event.preventDefault();
    document.getElementById("configurator").scrollIntoView({
        behavior: "smooth",
    });
}

function updateIframePointerEvents() {
    const iframe = document.getElementById("iConfigure");
    const rect = iframe.getBoundingClientRect();

    if (rect.top <= 0) {
        iframe.style.pointerEvents = "auto";
    } else {
        iframe.style.pointerEvents = "none";
    }
}

window.addEventListener("scroll", updateIframePointerEvents);
window.addEventListener("load", updateIframePointerEvents);

//window.addEventListener(
//    "message",
//    function (event) {
//        const iframeThanksPageUrl =
//            "https://www.indudoors.nl/bedankt-voor-uw-offerte";
//        if (event.data.state === "finished") {
//            //window.location.href =
//            //    iframeThanksPageUrl;
//        }
//    }
//);
let preConfig;

const qp = new URLSearchParams(location.search);

const defaults = {
    product: "6e34fc1b-a65e-431a-b371-f6fd80f9bc66",

    type_samenstelling: "geen_glas",
    draairichting: "draairichting_links",
    aantal_ruiten: "0",
    hoogte_sparing: "230",
    breedte_sparing_1_element: "90",
    textuur_db: "textuur_pvc_db",
    kleur_db: "9001_db",
    textuur_kb: "textuur_pvc_kb",
    kleur_kb: "9001_kb",
    textuur_di: "textuur_pvc_di",
    kleur_di: "9001_di",
    model: "basic",
    deur_lijst: "met",
    greep: "740_6001",
    kleur_greep: "kleur_greep_rvs",
    brievenbus: "homebox",
    profiel: "profiel_facet",
    profiel_afwerking: "verstek",
    dorpel: "dorpel_zwart",
    glas_textuur: "transparant",
    active_step: "3",
};

const qpObj = Object.fromEntries(new URLSearchParams(location.search));

if ("product" in qpObj || "dealer" in qpObj) {
    preConfig = qpObj; // includes any extra keys beyond defaults
} else {
    preConfig = { ...defaults };
}

injectApp(preConfig);
