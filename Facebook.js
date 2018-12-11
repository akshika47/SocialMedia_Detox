
/* 
* variable "c" was an attempt to see the unfollowing happens in sync with the auto scrolling. It was not successful. 
* "time" variable is important keep the process "slow", so that the Facebook will not stop you from running scripts. 
*/
var a = document.getElementsByClassName("_5u3n");
var x = 0;
var c = 17;
var unf = document.querySelector('[data-testid ="unfollow"]');
var scr = unf.querySelector(".scrollable");
var time = 300;
function amol(){
	a[x].click();
    if(x++ < a.length){
        c++;
        if(c%16 == 0)
        {
        setInterval(function(){ 
		scr.scrollTop = scr.scrollHeight; 
	}, 200
);
}
		setTimeout(amol, time);
    
}

}
amol();
