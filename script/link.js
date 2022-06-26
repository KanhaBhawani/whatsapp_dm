var phn = localStorage.getItem("phoneNo");
document.getElementById("otp").href = "https://wa.me/+91" + phn;
document.getElementById("otp_p").innerText = "Chat on WhatsApp with +91 " + phn;
window.location.reload;