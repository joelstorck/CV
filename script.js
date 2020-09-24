//Skickar vidare dig till githubaddressen när du klickar på ikonen
function github(){ 
    window.open("https://github.com/joelstorck", "_blank");
}

//öppnar mail till addressen nedan när du klickar på ikonen
function mail(){ 
   window.open("mailto:Joel Storck<stjo20zs@student.ju.se>");
   }

   //Skickar vidare dig till githubaddressen när du klickar på ikonen
function github(){ 
    window.open("https://github.com/joelstorck", "_blank");
}

//öppnar mail till addressen nedan när du klickar på ikonen
function mail(){ 
   window.open("mailto:Joel Storck<stjo20zs@student.ju.se>");
   }

   
   fetch("https://api.github.com/users/joelstorck/repos")
   .then(function(response) {
       return response.json();
   })
   .then(function(json) {
       console.log("Github API", json);

       var gh_pf = document.getElementById("gh_pf");

       for (i=0; i<json.length; i++) {
        gh_pf.insertAdjacentHTML("beforeend", "<a href='"+ json[i].html_url + "'target =' _blank'><div class = 'gh_pf'>" + json[i].name + "<div></a>");
       }

   })