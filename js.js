const mailCharter = document.querySelector('.email-input');
const error = document.querySelector('.error')



mailCharter.addEventListener("input", function () {
  const email = mailCharter.value;
  const atIndex = email.indexOf("@");
  if (atIndex === -1) {
    mailCharter.style.borderColor = "#EF4877";
    error.style.display = "block";
  } else {
    mailCharter.style.borderColor = "";
    error.style.display = "none";
  }
});