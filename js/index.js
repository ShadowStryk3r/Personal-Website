var i = 0;
var x = 0;
var txt = 'Vishal Sundaram';
var speed = 150;
var anim = "/|\\-/|\\-";
var reps = 0;
var intro = 0;
function typeWriter() {
    if(intro<6){
        if(intro%2==0){
            document.getElementById("title").innerHTML+= "_";
        }else{
            var curr = document.getElementById("title").innerHTML;
            document.getElementById("title").innerHTML=curr.substring(0, curr.length-1);
        }
        setTimeout(typeWriter, 200);
        intro++;
    }
    else if (i < txt.length) {
    var curr = document.getElementById("title").innerHTML;
    document.getElementById("title").innerHTML=curr.substring(0, curr.length-1);
    if(i ==6 ){
        document.getElementById("title").innerHTML+="<br>";
    }
    else{
        document.getElementById("title").innerHTML+= txt.charAt(i);
    }
    document.getElementById("title").innerHTML+= "_";
    setTimeout(typeWriter, speed);
    i++;
  }else{
    loader();
  }
}
function loader(){
    if(reps <10){
        var curr = document.getElementById("title").innerHTML;
        document.getElementById("title").innerHTML=curr.substring(0, curr.length-1);
        document.getElementById("title").innerHTML+= anim.charAt(x);
        x++;
        if(x == anim.length){
            x=0;
        }
        setTimeout(loader, 250);
    }
    else{
        var curr = document.getElementById("title").innerHTML;
        document.getElementById("title").innerHTML=curr.substring(0, curr.length-1);
    }
}
Window.onload=typeWriter();

function highlight(tab){
    let home = document.getElementById("home-btn");
    let about = document.getElementById("about-btn");
    let projects = document.getElementById("projects-btn");
    let blog = document.getElementById("blog-btn");
    let contact = document.getElementById("contact-btn");
    if(home.classList.contains('active')){
        home.classList.remove('active');
    }
    if(about.classList.contains('active')){
        about.classList.remove('active');
    }
    if(projects.classList.contains('active')){
        projects.classList.remove('active');
    }
    if(blog.classList.contains('active')){
        blog.classList.remove('active');
    }
    if(contact.classList.contains('active')){
        contact.classList.remove('active');
    }
    if(tab == 'home'){
        home.classList.add('active');
    }
    if(tab == 'about'){
        about.classList.add('active');
    }
    if(tab == 'projects'){
        projects.classList.add('active');
    }
    if(tab == 'blog'){
        blog.classList.add('active');
    }
    if(tab == 'contact'){
        contact.classList.add('active');
    }
}

function showdesc(parent,name){
    document.getElementById(name).style.visibility = "visible";
    document.getElementById(parent).style.visibility = "visible";
}

function hidedesc(parent,name){
    document.getElementById(name).style.visibility = "hidden";
    document.getElementById(parent).style.visibility = "hidden";
}

document.getElementById("personal-website").onclick = function(){
    window.open("file:///C:/Users/sunda/OneDrive/Documents/Code/Personal%20Website/demo/index.html#home");
}
document.getElementById("overgrown").onclick = function(){
    window.open("https://overgrown-game.web.app/");
}
document.getElementById("general-science").onclick = function(){
    window.open("https://www.uiltexas.org/academics/stem/science");
}
document.getElementById("link").onclick = function(){
    window.open("https://www.linkedin.com/in/vishal-sundaram-138aa11ab/");
}
document.getElementById("git").onclick = function(){
    window.open("https://github.com/ShadowStryk3r");
}
document.getElementById("viewblog").onclick = function(){
    window.location.href = "blog.html";
}

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}