// ==UserScript==
// @name         ZUZU Browser
// @namespace    ZUZU Browser
// @description  Make your browser BLAZING FAST !!!
// @copyright    ©2020 - Yoga Budiman
// @version      1.2
// @author       Last Roze
// @homepageURL  https://github.com/LastRoze/
// @supportURL   https://linkedin.com/in/lastroze
// @updateURL    https://github.com/LastRoze/ZUZU-Browser/raw/master/ZUZU-Browser.meta.js
// @downloadURL  https://github.com/LastRoze/ZUZU-Browser/raw/master/ZUZU-Browser.user.js
// @icon         https://github.com/LastRoze/ZUZU-Browser/blob/master/ZUZU%20Hospitality.jpg?raw=true
// @run-at       document-start
// @include      *
// @include      http://*
// @include      https://*
// @match        *://*/*
// @connect      *
// @grant        GM_addStyle
// @grant        GM_deleteValue
// @grant        GM_getResourceURL
// @grant        GM_getValue
// @grant        GM_openInTab
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @grant        GM.deleteValue
// @grant        GM.getResourceUrl
// @grant        GM.getValue
// @grant        GM.openInTab
// @grant        GM.xmlHttpRequest
// @grant        unsafeWindow
// @noframes
// ==/UserScript==

document.addEventListener('readystatechange', function() {
    var e = document.createElement("script");
    e.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/jquery.turbolinks/2.1.0/jquery.turbolinks.min.js");
    document.getElementsByTagName("head").item(0).insertBefore(e, document.getElementById('hvt-script'));
}, !1);

(function() {
    'use strict';
    window.seconds = -1;
})();
