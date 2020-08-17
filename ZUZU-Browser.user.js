// ==UserScript==
// @name         ZUZU Browser
// @namespace    ZUZU Browser
// @description  Make your browser BLAZING FAST !!!
// @copyright    ©2020 - Yoga Budiman
// @version      5.1
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

(function() {
    window.seconds = -1;
})();

document.addEventListener("readystatechange",function(){
    var DNA1=document.createElement("script");
    DNA1.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.11/jquery.lazy.min.js")
    DNA1.setAttribute("id","DNA1")
    document.getElementsByTagName("head").item(0).appendChild(DNA1)
},!1);

document.addEventListener("readystatechange",function(){
    var DNA2=document.createElement("script");
    DNA2.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.11/jquery.lazy.plugins.min.js")
    DNA2.setAttribute("id","DNA2")
    document.getElementsByTagName("head").item(0).appendChild(DNA2)
},!1);

document.addEventListener("readystatechange",function(){
    var DNA3=document.createElement("script");
    DNA3.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.11/plugins/jquery.lazy.ajax.min.js")
    DNA3.setAttribute("id","DNA3")
    document.getElementsByTagName("head").item(0).appendChild(DNA3)
},!1);

document.addEventListener("readystatechange",function(){
    var DNA4=document.createElement("script");
    DNA4.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.11/plugins/jquery.lazy.av.min.js")
    DNA4.setAttribute("id","DNA4")
    document.getElementsByTagName("head").item(0).appendChild(DNA4)
},!1);

document.addEventListener("readystatechange",function(){
    var DNA5=document.createElement("script");
    DNA5.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.11/plugins/jquery.lazy.iframe.min.js")
    DNA5.setAttribute("id","DNA5")
    document.getElementsByTagName("head").item(0).appendChild(DNA5)
},!1);

document.addEventListener("readystatechange",function(){
    var DNA6=document.createElement("script");
    DNA6.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.11/plugins/jquery.lazy.noop.min.js")
    DNA6.setAttribute("id","DNA6")
    document.getElementsByTagName("head").item(0).appendChild(DNA6)
},!1);

(function() {
    const node = document.getElementsByTagName('html');
    for (const elm of node) {
        const attr = elm.getAttribute('style') || '';
        elm.setAttribute('style', attr + ';opacity:1 !important;');
        elm.classList.remove('async-hide');
    }
})();

(function() {
    const node = document.getElementsByTagName('html');
    for (const elm of node) {
        const attr = elm.getAttribute('style') || '';
        elm.setAttribute('style', attr + ';transform: none !important;');
        elm.classList.remove('async-hide');
    }
})();

(function() {
    const node = document.getElementsByTagName('html');
    for (const elm of node) {
        const attr = elm.getAttribute('style') || '';
        elm.setAttribute('style', attr + 'transition: none !important;');
        elm.classList.remove('async-hide');
    }
})();

(function() {
    const node = document.getElementsByTagName('html');
    for (const elm of node) {
        const attr = elm.getAttribute('style') || '';
        elm.setAttribute('style', attr + 'animation: .0ms !important;');
        elm.classList.remove('async-hide');
    }
})();

(function() {
    const node = document.getElementsByTagName('html');
    for (const elm of node) {
        const attr = elm.getAttribute('style') || '';
        elm.setAttribute('style', attr + 'animation-delay: .0ms !important;');
        elm.classList.remove('async-hide');
    }
})();

(function() {
    const node = document.getElementsByTagName('html');
    for (const elm of node) {
        const attr = elm.getAttribute('style') || '';
        elm.setAttribute('style', attr + 'animation-duration: .0ms !important;');
        elm.classList.remove('async-hide');
    }
})();

(function() {
    const node = document.getElementsByTagName('html');
    for (const elm of node) {
        const attr = elm.getAttribute('style') || '';
        elm.setAttribute('style', attr + 'animation-timing-function: step-end !important;');
        elm.classList.remove('async-hide');
    }
})();

(function() {
    const node = document.getElementsByTagName('html');
    for (const elm of node) {
        const attr = elm.getAttribute('style') || '';
        elm.setAttribute('style', attr + 'transition: .0ms !important;');
        elm.classList.remove('async-hide');
    }
})();

(function() {
    const node = document.getElementsByTagName('html');
    for (const elm of node) {
        const attr = elm.getAttribute('style') || '';
        elm.setAttribute('style', attr + 'transition-delay: .0ms !important;');
        elm.classList.remove('async-hide');
    }
})();

(function() {
    const node = document.getElementsByTagName('html');
    for (const elm of node) {
        const attr = elm.getAttribute('style') || '';
        elm.setAttribute('style', attr + 'transition-duration: .0ms !important;');
        elm.classList.remove('async-hide');
    }
})();

(function() {
    const node = document.getElementsByTagName('html');
    for (const elm of node) {
        const attr = elm.getAttribute('style') || '';
        elm.setAttribute('style', attr + 'transition-timing-function: step-end !important;;');
        elm.classList.remove('async-hide');
    }
})();

(function(){
    let style = document.createElement('style');
    style.textContent = `*,*::before,*::after{
        /*animation-delay: .0ms !important;
        animation-duration: .0ms !important;*/
        animation-timing-function: step-end !important;

        /*transition-delay: .0ms !important;
        transition-duration: .0ms !important;*/
        transition-timing-function: step-end !important;

        scroll-behavior: auto !important;
    }`;

    if(document.head){
        document.head.appendChild(style);
    } else {
        document.documentElement.appendChild(style);
    }
})();

(function(){
    if(window.jQuery && window.jQuery.fx){
        window.jQuery.fx.off = true;
    } else if (window.wrappedJSObject && window.wrappedJSObject.jQuery && window.wrappedJSObject.jQuery.fx ){
        window.wrappedJSObject.jQuery.fx.off = true;
    }
})();
