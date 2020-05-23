// animating subheading
new TypeIt("#sub-head", {
    strings:"",
    speed: 120,
    loop: true,
  }).go();

  //animating book-description
  new TypeIt(".book-description", {
    strings:"",
    speed: 40,
    loop: false,
  }).go();

  //book cover toggler
  let book = document.querySelector(".book-cover");
  book.front  =true;
  book.addEventListener("click",function(){
    //this.classList.toggle("book-bigger")
    if(this.front){
      this.src = "/img/bookcoverback.jpg";
      this.front = false;
    }else{
      this.src = "/img/bookcover.jpg";
      this.front = true;
    }
    
  })