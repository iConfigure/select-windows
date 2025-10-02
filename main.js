/** @format */
console.log("loaded");

function scrollToConfigurator(event) {
  event.preventDefault();
  const el = document.getElementById("configurator");
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateIframePointerEvents() {
  const iframe = document.getElementById("iConfigure");
  const configurator = document.getElementById("configurator");
  const rect = iframe.getBoundingClientRect();

  if (rect.top <= 0) {
    iframe.style.pointerEvents = "auto";
    document.getElementById("hero").remove()
    // Lock scroll: if user tries to scroll up, snap back to configurator
    if (window.scrollY < configurator.offsetTop) {
      configurator.scrollIntoView({ behavior: "instant", block: "start" });
    }
  } else {
    iframe.style.pointerEvents = "none";
  }
}

window.addEventListener("scroll", updateIframePointerEvents, { passive: true });
window.addEventListener("load", updateIframePointerEvents);

// ----- existing config -----
let preConfig;
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
preConfig = "product" in qpObj || "dealer" in qpObj ? qpObj : { ...defaults };

injectApp(preConfig);
