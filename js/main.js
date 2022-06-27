
"use strict";
var _slider = document.getElementsByClassName("slider-item");
var slider_point=document.getElementsByClassName("slider-point");
var sliderCount = _slider.length;
var sliderNo = 0;
var i = 0;


showSlider(sliderNo);

  
document.getElementById("slider-btn-left").onclick=function(){
    sliderNo--;
    showSlider(sliderNo);
}

document.getElementById("slider-btn-right").onclick=function() {
    sliderNo++;
    showSlider(sliderNo);
}

function showSlider(sliderNumber) {
    
    sliderNo = sliderNumber;
    
    if (sliderNumber >= sliderCount) sliderNo = 0;
    
    if (sliderNumber < 0) sliderNo = sliderCount - 1;
   
    for (i = 0; i < sliderCount; i++) {
      _slider[i].style.display = "none";
    }
    
    _slider[sliderNo].style.display = "flex";
    point(sliderNo);
}

function point(pointnumber){
    for(i=0;i<slider_point.length;i++){
        if(i==pointnumber){
            slider_point[i].style.backgroundColor="#a1a1a1";
        }
        else{
            slider_point[i].style.backgroundColor="#313132";
        }
    }
}
