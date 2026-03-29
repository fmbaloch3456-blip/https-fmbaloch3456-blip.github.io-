// Typing Effect
const text = "Frontend Developer | Fiverr Seller";
let i = 0;

function typing() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
typing();

// Scroll to Contact
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("successMsg").innerText = "Message Sent Successfully!";
});

// Scroll Top Button
let btn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};