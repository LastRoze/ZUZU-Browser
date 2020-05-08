// ==UserScript==
// @name         ZUZU Browser
// @namespace    ZUZU Browser
// @description  Make your browser BLAZING FAST !!!
// @copyright    ©2020 - Yoga Budiman
// @version      1.0
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
    e.setAttribute("src", "https://cdn.jsdelivr.net/npm/turbolinks@5.3.0-beta.1/dist/turbolinks.min.js");
    document.getElementsByTagName("head").item(0).insertBefore(e, document.getElementById('hvt-script'));
}, !1);

document.addEventListener("turbolinks:load", function() {
    location.reload(false);
}, !1);

(function() {
    'use strict';
    window.seconds = -1;
})();

var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 1px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
].join(';');

console.log('%c ZUZU Browser Loaded...', styles);
