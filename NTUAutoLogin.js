// ==UserScript==
// @name         NTUAutoLogin
// @namespace    https://github.com/eethan1/TampermonkeyScripts
// @updateURL    https://raw.githubusercontent.com/eethan1/TampermonkeyScripts/master/NTUAutoLogin.js
// @downloadURL  https://raw.githubusercontent.com/eethan1/TampermonkeyScripts/master/NTUAutoLogin.js
// @version      0.5.2
// @description  auto login
// @author       eethan1
// @match        https://*.ntu.edu.tw/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(location.href.match(/web2.cc.ntu.edu.tw\/p\/s\/login2/))
        document.querySelector('form').submit();
    else if(location.href.match(/mail.ntu.edu.tw\/owa\/auth\/logon.aspx/))
        document.querySelector('.signinbutton').click();
    else if(location.href.match(/ceiba.ntu.edu.tw\/(index\.php)+$/))
        document.querySelector('form[name=login2]').submit();
    else if(location.href.match(/ceiba.ntu.edu.tw\/login_test.php/))
        document.querySelector('form[name=login2]').submit();
    else if(location.href.match(/adfs.ntu.edu.tw\/adfs\/ls\//)){
        document.querySelector('#ContentPlaceHolder1_SubmitButton').click();
    }else if(location.href.match(/cool.ntu.edu.tw\/login\/portal/)){
        saml.click();
    }
})();