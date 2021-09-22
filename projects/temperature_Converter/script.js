let celsius = document.getElementById("celsius"); //getting the value of celcius input field
let fahrenheit = document.getElementById('fahrenheit'); //getting the value of fahrenheit input field

// this function will be called when user will input a value in the celsius input field
function celToFar(){
    let cel = parseFloat(celsius.value);
    let output = (cel * 9/5) + 32;
    fahrenheit.value = output.toFixed(2);
}


// this function will be called when user will input a value in the fahrenheit input field
function farToCel(){
    let far = parseFloat(fahrenheit.value);
    let output = (far - 32) * 5/9;
    celsius.value = output.toFixed(2);
    console.log(output.toFixed(2));
}