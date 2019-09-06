// ==UserScript==
// @name         NTUNeedBetterUX
// @namespace    https://github.com/eethan1/TampermonkeyScripts
// @updateUrl    https://raw.githubusercontent.com/eethan1/TampermonkeyScripts/master/NTUNeedBetterUX.js
// @version      0.1
// @description  reload course selection page when it is about to expire
// @author       eethan1
// @match        https://if177.aca.ntu.edu.tw/*
// @grant        none
// ==/UserScript==


// reload course selection page when it is about to expire
(function () {
    'use strict';
    setTimeout(() => { location.reload(); }, (9 * 60 + 30) * 1000);
})();