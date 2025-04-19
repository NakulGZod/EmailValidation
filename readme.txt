This website helps in finding whether the email entered by the user is valid or not 
Tech Used: HTML,CSS,JS
EmailValidate.io is a email checker software which  provides API  for the  checking of email

//Align-item for vertical alignment, justify-content for horizontal alignment

Syntax:
@media  screen and (max-width: 600px){}:-
For making the website responsive like how it will appear when width will be less then 600px we can have different css style it helps in making a responsive website for the mobile too.

JS : 

let str=``

for (key of Object.keys(result)){
    str = str + `<div>${key} : ${result[key]}</div>`
}
console.log(str)---->to print in console

resultCont.innerHTML = str --> to print on the page innerHTML is used resultCont s id for div tag in html inside which we need to print the result.

To apply css in id 
#resultCont div{}

ex: #resultCont div::first-letter{  --> Only first letter will be upper case
    text-transform: uppercase;
}
*****
Data Fetching :
Go to account on emailvalidation.io
go to api Dashboard
take API Key
the go in JS 
at start paste key="COPIED LINK API"
also copy response url 
url="";
//syntax
let url=`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`

submitBtn.addEventListener("click", ()=>{
    console.log("Clicked!!")
})---> To get response after clicking the button




submitBtn.addEventListener("click", () => {
    console.log("Clicked!!")

    // Data Fetching
    key = "ema_live_cC3PJZVEDDm0FcEq1hcqfPJIgfM3OuqVZMwWWNej"
    let email = document.getElementById("email").value
    
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`

    let str = ``

    for (key of Object.keys(result)) {
        str = str + `<div>${key} : ${result[key]}</div>`
    }
    console.log(str)

    resultCont.innerHTML = str
})



