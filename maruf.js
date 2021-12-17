        //sticky banner section
        window.addEventListener("scroll",function(){
            var banner=document.querySelector(".banner");
            banner.classList.toggle("sticky-banner",window.scrollY>50)
            })
    

                //menubar toggle and navigation
   
   const navigation=document.querySelector('.navigation');
   document.getElementById('toggle').onclick=function(){
    this.classList.toggle('active');
     navigation.classList.toggle('active');
    }
 function menuItem(){
   document.querySelector(".navigation").classList.remove("active");
   document.querySelector("#toggle").classList.remove("active");
 }

var loader=document.querySelector("#loader");
window.addEventListener("load",function(){
  loader.style.display="none";

})

 
//scroll progressbar//
 
let progress=document.getElementById('progressbar');
let totalWidth=document.body.scrollHeight-window.innerHeight;
window.onscroll=function(){
 let progressWidth=(window.pageYOffset / totalWidth)*100;
progress.style.width=progressWidth + "%";
}

