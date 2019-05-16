// Llamado de los .JSON a escena 
var users = new XMLHttpRequest();
users.open('GET', 'https://jsonplaceholder.typicode.com/users', false);
users.send(null);
if(users.status == 200)
    var usersJson = JSON.parse(users.responseText);

var posts = new XMLHttpRequest();
posts.open('GET', 'https://jsonplaceholder.typicode.com/posts', false);
posts.send(null);
if(posts.status == 200)
    var postsJson = JSON.parse(posts.responseText);

var contador
for(contador=0; contador<4; contador++){
    const getMessage = () => {
        return(`
            <div class="testimonioImg mt-4 mb-4">
                <img src="img/person_${contador+1}.jpg">
            </div>
            <div class="text-center row">
                <div class="col-12 col-md-8 offset-md-2"><cite class="testimonialTexto">"${postsJson[contador].body}"</cite>
                <p class="testimonialAutor mt-3">${usersJson[contador].name}</p>
                </div>
            </div>
        `);
    }
    document.getElementsByClassName("mySlides")[contador].innerHTML = getMessage();
}

var slideIndex = 1;
showDivs(slideIndex);

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}



