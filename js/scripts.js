let buttons= document.getElementsByClassName("btn");
let changeMe= document.getElementById("changeMe");
// run through a loop and add an event listener

for(let i=0; i<buttons.length;i++){
    buttons[i].addEventListener("click",function(e){
        alert("You clicked on " + e.target.innerText);
        changingText(e.target.innerText);
        // You can do this too:  changeMe.innerText=e.target.innerText;
    });

};

function changingText(textToChange){
    // this will retrieve a variable 
    changeMe.innerText = textToChange;
    // this works if you want all buttons to do a similar task!
    changeMe.classList="";
    switch(textToChange)
    {
        case "First":
            changeMe.classList.add("blue");
            break;
        case "Second":
            changeMe.classList.add("grey");
            break;
        case "Third":
            changeMe.classList.add("teal");
            break;
        case "Fourth":
            changeMe.classList.add("green");
            break;
        case "Fifth":
            changeMe.classList.add("red");
            break;
        case "Sixth":
            changeMe.classList.add("yellow");
            break;
        default:
            changeMe.classList.add("white");
            break;
    }
};

// Hugo's code here
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function(e){
//         changeMe.innerHTML = e.target.innerHTML;
//         changeMe.className = this.className;
//     });
// }// end of loop

