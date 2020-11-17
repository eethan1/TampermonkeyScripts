// ==UserScript==
// @name         NTUAutoLogin
// @namespace    https://github.com/eethan1/TampermonkeyScripts
// @updateURL    https://raw.githubusercontent.com/eethan1/TampermonkeyScripts/master/NTUAutoLogin.js
// @downloadURL  https://raw.githubusercontent.com/eethan1/TampermonkeyScripts/master/NTUAutoLogin.js
// @version      0.5.3
// @description  auto login
// @author       eethan1
// @match        https://*.ntu.edu.tw/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if(location.href.match(/web2.cc.ntu.edu.tw\/p\/s\/login2/)){
        if(document.querySelector('input[name="user"]').value && document.querySelector('input[name="pass"]').value)
            document.querySelector('form').submit();
    }else if(location.href.match(/mail.ntu.edu.tw\/owa\/auth\/logon.aspx/)){
        if(document.querySelector('input[name="username"]').value && document.querySelector('input[name="password"]').value)
            document.querySelector('.signinbutton').click();
    }else if(location.href.match(/ceiba.ntu.edu.tw\/(index\.php)*$/))
        document.querySelector('form[name=login2]').submit();
    else if(location.href.match(/ceiba.ntu.edu.tw\/login_test.php/))
        document.querySelector('form[name=login2]').submit();
    else if(location.href.match(/adfs.ntu.edu.tw\/adfs\/ls\//)){
        if(ContentPlaceHolder1_UsernameTextBox.value &&  ContentPlaceHolder1_PasswordTextBox.value)
            document.querySelector('#ContentPlaceHolder1_SubmitButton').click();
    }else if(location.href.match(/cool.ntu.edu.tw\/login\/portal/)){
        saml.click();
    }
})();