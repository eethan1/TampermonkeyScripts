// ==UserScript==
// @name         GentleSuit
// @namespace    https://github.com/eethan1/TampermonkeyScripts
// @version      0.1.6
// @description  Be a gentle.
// @author       eethan1
// @match        http*://hbo6.hboav.com/*/player.php*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/eethan1/TampermonkeyScripts/master/GentleSuit.js
// @downloadURL  https://raw.githubusercontent.com/eethan1/TampermonkeyScripts/master/GentleSuit.js
// @run-at document-end
// ==/UserScript==
(async function() {
    'user strict';
    let m3u8url = document.body.innerHTML.match(/'http.*m3u8.*'/)[0].slice(1,-1);
    console.log('match!');
    let c = document.getElementById('inplayer');
    c.parentNode.removeChild(c);
    console.log('remove inpley');

    console.log(document.getElementById);
    console.log(document.body.children);
    var d = document.body;
    console.log(d);
    d.insertAdjacentHTML('afterbegin',`
       <a href="https://cjiso.ninja/5278?m3u8url=${encodeURIComponent(location.href)}"> m3u8 </a>
    `);
})();