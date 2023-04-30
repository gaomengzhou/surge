// ==UserScript==
// @name         Get NGA Cookie
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Get NGA Cookie for Surge
// @author       Your Name
// @match        https://bbs.nga.cn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var cookieValue = '';
    if(document.cookie.length > 0){
        var cookieStart = document.cookie.indexOf("ngaPassportUid=");
        if(cookieStart !== -1){
            cookieStart = cookieStart + "ngaPassportUid=".length;
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
            if(cookieEnd === -1){
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart, cookieEnd));
        }
    }
    $done({headers: {'Cookie': 'ngaPassportUid=' + cookieValue}});
})();