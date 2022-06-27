

document.getElementById("submitButton").addEventListener("click", ()=>{
    var phoneNumber = document.getElementById("phn").value;
    document.getElementById("otp_div").classList.remove("hidden");
    document.getElementById("otp_p").innerText = "Chat on WhatsApp with +91 " + phoneNumber;
    document.getElementById("otp").href = "https://wa.me/+91" + phoneNumber;
    document.getElementById("otp").innerText = "Continue to Chat";
    document.getElementById("QrCode").innerHTML = "";
    new QRCode(document.getElementById("QrCode"), "https://wa.me/+91" + phoneNumber);
});