

document.getElementById("submitButton").addEventListener("click", ()=>{
    var phoneNumber = document.getElementById("phn").value;
    document.getElementById("otp").href = "https://wa.me/+91" + phoneNumber;
});