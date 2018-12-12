
var buttonArray = document.querySelectorAll('li-icon[type="check-icon"]')
var iterator = 0;
var counter = 9;
var time = 300;
function detox(){
    buttonArray[iterator].click();
    if(iterator++ < buttonArray.length){
        counter++;
        if(counter%8 == 0)
        {       
         setInterval(function() {
          window.scrollTo(0, document.body.scrollHeight);
          }, 200);
          buttonArray = document.querySelectorAll('li-icon[type="check-icon"]');
          iterator=0;
        }
        setTimeout(detox, time);    
}

}
detox();


