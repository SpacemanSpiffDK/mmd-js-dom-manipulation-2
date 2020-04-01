// JS by Dan Høegh
// UCN MMD 2020

function darkModeToggle(){
    // In this function we turn darkmode on if it is off and vice versa
    if (!darkModeCssIsPresent()){ // test if darkmode is off
        // dark mode is off, turn it on by adding extra stylesheet
        let darkStyle = document.createElement('link');
        darkStyle.href = "assets/css/darkmode.css";
        darkStyle.rel = "stylesheet";
        darkStyle.type = "text/css";
        darkStyle.id = "darkModeCssLink";
        document.head.appendChild(darkStyle);
    } else {
        // if dark mode is on, then turn it off by removing the <link> tag in head
        let darkCssLink = document.querySelector('#darkModeCssLink');
        document.head.removeChild(darkCssLink);
    }
}

function darkModeCssIsPresent(){
    // In this function we see if the dark mode css 
    // is present in the document
    let found = false; // the default value is "false", since we haven't found anything yet
    let darkCssLink = document.querySelector('#darkModeCssLink'); // grab the element
    // console.log(darkCssLink); // what do we get when we grab the element?
    if (darkCssLink){
        // ^^ this if-sentence checks if darkCssLink is "null", 
        // "null" is the same as false in this case
        // if we find the element, then it is true
        found = true; // we found the element, let's update our "found" variable with that information
    }
    return found; // return the value to who ever did the call for this function
}

// add eventlistener to the dark mode button in the HTML
document.querySelector('#btnMode').addEventListener('click', function(event){
    event.preventDefault(); // prevents adding a "#" to the url when the link is clicked
    darkModeToggle();
});

// we can read values of an elements css
let elmHero = document.querySelectorAll('.hero');
console.log(elmHero[0].style);

let buttonColorIsActive = false; // creating a status variable so we can easily check if button color is default or changed
function buttonColor(element){
    if (buttonColorIsActive){
        element.style.backgroundColor = "";
    } else {
        element.style.backgroundColor = "rgba(0,0,0,.7)";
        element.style.borderColor = "#00ffff";
        element.style.borderWidth = "2px";
        element.style.borderStyle = "solid";
        element.style.color = "yellow";
        //element.style = "color: yellow"; // this replace all the content in the style attribute
    }
    // every time we click the button, we want the status to change to the opposite (true/false)
    buttonColorIsActive = !buttonColorIsActive; // this reverses the value of the boolean variable
}

// add eventlistener to the font toggle button in the HTML
document.querySelector('#btnColor').addEventListener('click', function(event){
    event.preventDefault(); // prevents adding a "#" to the url when the link is clicked
    buttonColor(this);
});