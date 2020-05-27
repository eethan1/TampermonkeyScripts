// ==UserScript==
// @name         GentleSuit
// @namespace    https://github.com/eethan1/TampermonkeyScripts
// @require http://code.jquery.com/jquery-latest.js
// @version      0.1.3
// @description  Be a gentle.
// @author       eethan1
// @match        http*://hbo6.hboav.com/*/player.php*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/eethan1/TampermonkeyScripts/master/GentleSuit.js
// @downloadURL  https://raw.githubusercontent.com/eethan1/TampermonkeyScripts/master/GentleSuit.js
// @run-at document-end
// ==/UserScript==
(function() {
    'user strict';
    console.log('match!');
    console.log('remove inpley');
    $('#inplayer').remove();
    let m3u8url = document.body.innerHTML.match(/'http.*m3u8.*'/)[0].slice(1,-1);
    let a = document.createElement('a');
    a.href = m3u8url;
    a.innerText = 'm3u8';
    document.body.insertBefore(a,document.body.childNodes[2])
    console.log(m3u8url);
})();