// ==UserScript==
// @name         GentleSuit
// @namespace    https://github.com/eethan1/TampermonkeyScripts
// @require http://code.jquery.com/jquery-latest.js
// @version      0.1.2
// @description  Be a gentle.
// @author       eethan1
// @match        http*://hbo6.hboav.com/v3/player.php*
// @grant        none
// ==/UserScript==
// @updateURL    https://raw.githubusercontent.com/eethan1/TampermonkeyScripts/master/GentleSuit.js
// @downloadURL  https://raw.githubusercontent.com/eethan1/TampermonkeyScripts/master/GentleSuit.js
(function() {
    'user strict';
    console.log('match!');
    if(location.href.match(/hbo6\.hboav\.com\/v3\/player\.php/))
        $('#inplayer').remove();
})();