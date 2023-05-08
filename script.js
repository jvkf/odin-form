const pwd = document.querySelector("#password");
const confirmPwd = document.querySelector("#confirm-pwd");
const submit = document.querySelector("#submit-button");
const pwdFields = document.querySelectorAll("input[type='password']");

function verifyPwd() {
  if (pwd.value === confirmPwd.value) {
    pwd.classList.remove("error");
    confirmPwd.classList.remove("error");
    submit.removeAttribute("disabled");
  } else {
    pwd.classList.add("error");
    confirmPwd.classList.add("error");
    submit.setAttribute("disabled", "");
  }
}

pwdFields.forEach((field) => {
  field.addEventListener("change", verifyPwd);
});
