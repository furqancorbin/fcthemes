 var Base64 = {_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (input) {var output = ""; var chr1, chr2, chr3, enc1, enc2, enc3, enc4; var i = 0; input = Base64._utf8_encode(input); while (i < input.length) {chr1 = input.charCodeAt(i++); chr2 = input.charCodeAt(i++); chr3 = input.charCodeAt(i++); enc1 = chr1 >> 2; enc2 = ((chr1 & 3) << 4) | (chr2 >> 4); enc3 = ((chr2 & 15) << 2) | (chr3 >> 6); enc4 = chr3 & 63; if (isNaN(chr2)) {enc3 = enc4 = 64;} else if (isNaN(chr3)) {enc4 = 64;} output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);} return output; }, decode: function (input) {var output = ""; var chr1, chr2, chr3; var enc1, enc2, enc3, enc4; var i = 0; input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ""); while (i < input.length) {enc1 = this._keyStr.indexOf(input.charAt(i++)); enc2 = this._keyStr.indexOf(input.charAt(i++)); enc3 = this._keyStr.indexOf(input.charAt(i++)); enc4 = this._keyStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2); chr3 = ((enc3 & 3) << 6) | enc4; output = output + String.fromCharCode(chr1); if (enc3 != 64) {output = output + String.fromCharCode(chr2);} if (enc4 != 64) {output = output + String.fromCharCode(chr3);} } output = Base64._utf8_decode(output); return output;}, _utf8_encode: function (string) {string = string.replace(/\r\n/g, "\n"); var utftext = ""; for (var n = 0; n < string.length; n++) {var c = string.charCodeAt(n); if (c < 128) {utftext += String.fromCharCode(c);} else if ((c > 127) && (c < 2048)) {utftext += String.fromCharCode((c >> 6) | 192); utftext += String.fromCharCode((c & 63) | 128);} else {utftext += String.fromCharCode((c >> 12) | 224); utftext += String.fromCharCode(((c >> 6) & 63) | 128); utftext += String.fromCharCode((c & 63) | 128); }} return utftext;}, _utf8_decode: function (utftext) {var string = ""; var i = 0; var c = c1 = c2 = 0; while (i < utftext.length) {c = utftext.charCodeAt(i); if (c < 128) {string += String.fromCharCode(c); i++;} else if ((c > 191) && (c < 224)) {c2 = utftext.charCodeAt(i + 1); string += String.fromCharCode(((c & 31) << 6) | (c2 & 63)); i += 2;} else {c2 = utftext.charCodeAt(i + 1); c3 = utftext.charCodeAt(i + 2); string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)); i += 3;}} return string; }}; var encode = document.getElementById('encode'), decode = document.getElementById('decode'), output = document.getElementById('output'), input = document.getElementById('input');
function progressbara(){var e=document.getElementById("myBar"),t=0,n=setInterval(function(){t>=100&&(clearInterval(n),document.getElementById("content").style.display="block");t>=100&&(myBar.style.display="none",myProgress.style.display="none");t>=100?document.getElementById("Showcaptcha").style.display="block":(t++,e.style.width=t+"%")},300)}!function(){var e=document.getElementById("btnoclick"),t=document.getElementById("btonTo");e.addEventListener("click",function(){"hidden"===t.style.display?t.style.visibility="visible":t.style.display="none"},!1)}();
  var goto=function(e){e&&(PreviousFields=document.getElementById("donedownloaddd").innerHTML,document.getElementById("donedownloaddd").innerHTML=PreviousFields+'<div style="text-align: center;"><h2 class="heading-s3">Ready To - Download <span class="fa fa-download"></span></h2></div><a class="button-b bstyle2" href="javascript:;" onclick="changeLink();" id="link">Download Now</a><a href="javascript:history.back(-4)" class="button-b bstyle1" id="btn">Go Back</a><p class="avbox success"> Thanks for visiting our website. I hope you are well.</p>')};
 var currentURL=location.href; var str = currentURL; var res = str.replace('https://www.fcthemes.eu.org/p/dl2.html' + '?url=', ""); function changeLink(){var decodedString = Base64.decode(res);
window.open(decodedString,'_self',"location=no, toolbar=no, scrollbars=no")
window.resizeTo(500, 750)};

var myurl = "www.fcthemes.eu.org";
    var currenturl = window.location.hostname;
    if(myurl != currenturl) {
     function pageRedirect() {
        window.location.replace("https://www.fcthemes.eu.org");
    }      
    setTimeout("pageRedirect()", 5000);  
    }

