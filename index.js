


// detecting mouse click

var buttons= document.querySelectorAll('.drum');
 for (var i=0; i<buttons.length ;i++){
   buttons[i].addEventListener('click',function (){
     highlight(this.innerHTML);
     makeSound(this.innerHTML);
   });

 }




// Detecting key press


document.addEventListener('keydown', function (event){
  highlight(event.key);
  makeSound(event.key);


});





// makes sound when got a key which was pressed or was clicked



function makeSound(key){
  switch (key) {
    case 'w':
      var audio=new Audio('sounds/crash.mp3');
      audio.play();
      break;
      case 'a':
        var audio=new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;
        case 's':
          var audio=new Audio('sounds/snare.mp3');
          audio.play();
          break;
          case 'd':
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
            case 'j':
              var audio=new Audio('sounds/tom-2.mp3');
              audio.play();
              break;
              case 'k':
                var audio=new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
                case 'l':
                  var audio=new Audio('sounds/tom-4.mp3');
                  audio.play();
                  break;
    default:

  }

}




function highlight(key){
  var element=document.querySelector('.'+key);
  element.classList.add('pressed');


  setTimeout(function (){
    element.classList.remove('pressed');
  },
      1000);


}
