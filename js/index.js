// animating subheading
new TypeIt("#sub-head", {
    strings:"",
    speed: 120,
    loop: true,
  }).go();

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