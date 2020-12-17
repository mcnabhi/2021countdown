var deadline = new Date("dec 31, 2020 23:59:59").getTime(); 

var menu = document.getElementById('freeze');
var nav = document.getElementById('nav');
var resume = document.getElementById('resume');

            freeze.addEventListener('click', function(e) {
                nav.classList.toggle('hide-mobile');
                e.preventDefault();
                clearInterval(x)
            });

            resume.addEventListener('click', function(e) {
                nav.classList.add('hide-mobile');
                e.preventDefault();
                var deadline = new Date("dec 31, 2020 23:59:59").getTime(); 
  
                    var now = new Date().getTime(); 
                    var t = deadline - now; 
                    var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
                    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
                    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
                    var seconds = Math.floor((t % (1000 * 60)) / 1000); 
                    document.getElementById("day").innerHTML =days ; 
                    document.getElementById("hour").innerHTML =hours; 
                    document.getElementById("minute").innerHTML = minutes;  
                    document.getElementById("second").innerHTML =seconds;  
            });

  
var x = setInterval(function() { 

  
var now = new Date().getTime(); 
var t = deadline - now; 
var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((t % (1000 * 60)) / 1000); 
document.getElementById("day").innerHTML =days ; 
document.getElementById("hour").innerHTML =hours; 
document.getElementById("minute").innerHTML = minutes;  
document.getElementById("second").innerHTML =seconds;  



if (t < 0) { 

        clearInterval(x); 

        document.getElementById("demo").innerHTML = "WELCOME TO 2021"; 

        document.getElementById("day").innerHTML ='0'; 

        document.getElementById("hour").innerHTML ='0'; 

        document.getElementById("minute").innerHTML ='0' ;  

        document.getElementById("second").innerHTML = '0'; } 
}, 1000); 


