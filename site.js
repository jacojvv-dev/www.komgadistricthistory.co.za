document.addEventListener("DOMContentLoaded", function () {
  var ENGLISH = "ENGLISH";
  var AFRIKAANS = "AFRIKAANS";
  var LANGUAGE = "LANGUAGE";

  addLanguageSwitch();
  activateLanguage(getActiveLanguage());

  function addLanguageSwitch() {
    var btn = document.createElement("button");
    btn.className = "btn";
    btn.style.position = "absolute";
    btn.style.top = "0px";
    btn.style.right = "0px";
    btn.style.color = "white";
    btn.innerText = getActiveLanguage();

    btn.addEventListener("click", function () {
      var newLang = getActiveLanguage() == ENGLISH ? AFRIKAANS : ENGLISH;
      btn.innerText = newLang;
      setActiveLanguage(newLang);
      activateLanguage(newLang);
    });

    document.body.appendChild(btn);
  }

  function getActiveLanguage() {
    if (window.localStorage && window.localStorage.getItem(LANGUAGE)) {
      return window.localStorage.getItem(LANGUAGE);
    }
    return ENGLISH;
  }

  function setActiveLanguage(language) {
    if (window.localStorage) {
      window.localStorage.setItem(LANGUAGE, language);
    }
  }

  function activateLanguage(language) {
    var oldLanguage = language == ENGLISH ? AFRIKAANS : ENGLISH;
    document
      .querySelectorAll("." + oldLanguage.toLowerCase())
      .forEach(function (v, k, p) {
        v.style.display = "none";
      });
    document
      .querySelectorAll("." + language.toLowerCase())
      .forEach(function (v, k, p) {
        v.style.display = "";
      });
  }
});
