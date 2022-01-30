var myurl = "www.example.com";
 var currenturl = window.location.hostname;
    if(myurl != currenturl) {
     function pageRedirect() {
       alert ("External Working Success"); 
    }      
   setTimeout("pageRedirect()", 1);  
    }

