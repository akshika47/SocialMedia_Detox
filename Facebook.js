
/* 
* variable "c" was an attempt to see the unfollowing happens in sync with the auto scrolling. It was not successful. 
* "time" variable is important keep the process "slow", so that the Facebook will not stop you from running scripts. 
*/
var profileArray = document.getElementsByClassName("_5u3n");
var iterator = 0;
var counter = 17;
var query = document.querySelector('[data-testid ="unfollow"]');
var quryScorllable = unf.querySelector(".scrollable");
var time = 300;
function detox(){
	profileArray[x].click();
    if(iterator++ < profileArray.length){
       counter++;
       if(counter%16 == 0){
       setInterval(function(){ 
	   	quryScorllable.scrollTop = quryScorllable.scrollHeight; 
	    }, 200
        );
       }   
	setTimeout(detox, time);    
    }
}
detox();
