!function(n){var e={};function o(t){if(e[t])return e[t].exports;var a=e[t]={i:t,l:!1,exports:{}};return n[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=n,o.c=e,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="",o(o.s=0)}([function(n,e,o){n.exports=o(1)},function(n,e){$(function(){$("#bs-example-navbar-collapse-1").on("shown.bs.collapse",function(){$("#navbar-hamburger").addClass("hidden"),$("#navbar-close").removeClass("hidden")}).on("hidden.bs.collapse",function(){$("#navbar-hamburger").removeClass("hidden"),$("#navbar-close").addClass("hidden")}),$(document).click(function(n){$(".navbar-collapse").collapse("hide")}),$(document).on("click",".navbar-collapse.in",function(n){$(n.target).is("a")&&"dropdown-toggle"!=$(n.target).attr("class")&&$(this).collapse("hide")})}),$(document).ready(function(){setTimeout(function(){$("#cookieConsent").fadeIn(200)},4e3),$("#closeCookieConsent, .cookieConsentOK").click(function(){$("#cookieConsent").fadeOut(200)})}),$(document).ready(function(){var n=$("#scroll_navbar"),e=n.offset();n.length&&$(document).scroll(function(){$(this).scrollTop()>e.top?($(".navbar-default").addClass("navbar-scroll"),$(".navbar-desktop img").attr("src","../assets/images/logo_text_dark.png")):($(".navbar-default").removeClass("navbar-scroll"),$(".navbar-desktop img").attr("src","../assets/images/logo_text_light.png"))})})}]);