var button=document.querySelector(".header__icon")
var menu=document.querySelector(".header__navigation")
var cont=0

button.onclick=function(){
  if(cont%2==0){
    menu.classList.add("header__navigation--active")
    menu.classList.remove("header__navigation--disabled")
  }
  else{
    menu.classList.remove("header__navigation--active")
    menu.classList.add("header__navigation--disabled")
  }
  cont++
}
/*VER SI SE PUEDE HACER, FALTA*/
var article=document.querySelector(".article__item")
var display=document.querySelector(".articles__list")

article.onclick=function(){
  display.classList.add("articles__list--active")
}
