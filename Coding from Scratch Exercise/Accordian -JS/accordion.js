function accordian_toggle(target){

    // when we click, it will show open in console
    console.log("open");

    // when we click, it will show the name of the section we clicked by putting id as a parameter.
    console.log(target);


// Creating a variable that refer to all sections using class name
var divsToHide = document.getElementsByClassName("accordian-section");

//loop theorugh each sections
for(var i = 0; i < divsToHide.length; i++){

    //hide each section
    divsToHide.style.display = "none";
}


    var content = document.getElementById(target);
 //console.log(content.style.display);

    // Check if the content is currently displayed
    
    if(document.getElementById(target).style.display == "block"){
        content.style.display = "none";
    }
    else{
        content.style.display = "block";
    }
}


