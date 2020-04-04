// ==UserScript==
// @name         NTUC00ler
// @namespace    https://github.com/eethan1/TampermonkeyScripts
// @require http://code.jquery.com/jquery-latest.js
// @updateURL    https://raw.githubusercontent.com/eethan1/TampermonkeyScripts/master/NTUC00ler.js
// @downloadURL  https://raw.githubusercontent.com/eethan1/TampermonkeyScripts/master/NTUC00ler.js
// @version      0.1.2
// @description  C00ler video plugin
// @author       eethan1
// @match        https://lti.dlc.ntu.edu.tw/courses/*/videos/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    function after(){
        let a = document.createElement('a');
        var vid = document.querySelector('video');
        console.log(document.querySelector);
        let f = document.createElement('form');
        let div0 = document.createElement('div');
        let div01 = document.createElement('div');
        let div02 = document.createElement('div');

        div01.style.float='left';
        div02.style.float='left';
        // Download link
        a.id = 'c00ler_download';
        a.href = vid.src;
        a.target = '_blank';
        a.innerText = 'Download it  ';
        a.style.fontSize = '20px';
        div01.appendChild(a);

        f.innerHTML = "<input id='c00ler_rate' placeholder='c00ler rate'>";
        f.action = "javascript:(function (){let vid=document.querySelector('video');vid.playbackRate=parseFloat(c00ler_rate.value); console.log(vid.playbackRate);})()";
        div02.appendChild(f);
        div0.appendChild(div01);
        div0.appendChild(div02);
        vid.parentElement.parentElement.insertBefore(div0,vid.parentElement.nextSibling);
        c00ler_rate.style.fontSize='20px';
    }
    setTimeout(after,4000);

})();