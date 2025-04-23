console.log("Here is my Script")

let result = {

    "tag": "",
    "free": true,
    "role": false,
    "user": "nakulgzod",
    "email": "nakulgzod@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true

}

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("Clicked!!");
    resultCont.innerHTML = `<img src="img/loading.svg" alt="" width="60">`;

    let key = "ema_live_cC3PJZVEDDm0FcEq1hcqfPJIgfM3OuqVZMwWWNej";
    let email = document.getElementById("email").value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

    let res = await fetch(url);
    let result = await res.json();

    let validity = result["format_valid"] && result["smtp_check"] && result["state"] === "deliverable";

    // Main result message
    let statusMsg = validity
        ? `<h3 style="color: green;">✅ Email is Valid</h3>`
        : `<h3 style="color: red;">❌ Email is Invalid</h3>`;

    // Details toggle button and hidden section
    let detailsBtn = `<button class="btn" onclick="toggleDetails()">More Details</button>`;
    let str = `<div id="details" style="display:none; margin-top:10px;">`;

    for (let key of Object.keys(result)) {
        str += `<div><b>${key}</b> : ${result[key]}</div>`;
    }

    str += `</div>`;

    resultCont.innerHTML = statusMsg + detailsBtn + str;
});

// Function to show/hide details
function toggleDetails() {
    let details = document.getElementById("details");
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

