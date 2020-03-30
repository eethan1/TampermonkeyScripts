// ==UserScript==
// @name         NTUAutoLogin
// @namespace    https://github.com/eethan1/TampermonkeyScripts
// @require http://code.jquery.com/jquery-latest.js
// @updateURL    https://raw.githubusercontent.com/eethan1/TampermonkeyScripts/master/NTULAutoLogin.js
// @downloadURL  https://raw.githubusercontent.com/eethan1/TampermonkeyScripts/master/NTULAutoLogin.js
// @version      0.4.2
// @description  auto login
// @author       eethan1
// @match        https://*.ntu.edu.tw/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(location.href.match(/web2.cc.ntu.edu.tw\/p\/s\/login2/))
        $('form').submit();
    else if(location.href.match(/mail.ntu.edu.tw\/owa\/auth\/logon.aspx/))
        $('.signinbutton').click();
    else if(location.href.match(/ceiba.ntu.edu.tw\/$/))
        $('form[name=login2]').submit();
    else if(location.href.match(/https:\/\/ceiba.ntu.edu.tw\/login_test.php/))
        $('form[name=login2]').submit();
    else if(location.href.match(/https:\/\/adfs.ntu.edu.tw\/adfs\/ls\//)){
        document.querySelector('#ContentPlaceHolder1_SubmitButton').click();
    }else if(location.href.match(/https:\/\/cool.ntu.edu.tw\/login\/portal/)){
        saml.click();
    }
})();