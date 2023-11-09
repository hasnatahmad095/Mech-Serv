let local = JSON.parse(localStorage.getItem("items")) || [];
let admin = true;
let adminEmail = "admin@gmail.com";
let adminPassword = "Admin@123";

function store(e) {
  var name = document.getElementById("name");
  var userName = document.getElementById("userName");
  var pw = document.getElementById("pw");
  var userId = document.getElementById("id");
  var userNumber = document.getElementById("number");
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;
  let userNameObj = userName.value;
  let nameObj = name.value;
  let pwObj = pw.value;
  let idObj = userId.value;
  let numberObj = userNumber.value;
  let obj = { userNameObj, nameObj, pwObj, idObj, numberObj };
  if (name.value.length == 0) {
    alert("Please fill in email");
  } else if (pw.value.length == 0) {
    alert("Please fill in password");
  } else if (name.value.length == 0 && pw.value.length == 0) {
    alert("Please fill in email and password");
  } else if (pw.value.length > 8) {
    alert("Max of 8");
  } else if (!pw.value.match(numbers)) {
    alert("please add 1 number");
  } else if (!pw.value.match(upperCaseLetters)) {
    alert("please add 1 uppercase letter");
  } else if (!pw.value.match(lowerCaseLetters)) {
    alert("please add 1 lovercase letter");
  } else {
    local.push(obj);
    localStorage.setItem("items", JSON.stringify(local));
    alert("Your account has been created");
    window.open("./signIn.html", "_blank");
  }
  e.preventDefault();
}
function check(e) {
  var userName = document.getElementById("userName");
  var userPw = document.getElementById("userPw");
  var userRemember = document.getElementById("rememberMe");

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("items"))
    ? JSON.parse(localStorage.getItem("items"))
    : [];

  var userFound = local.filter((e, i) => {
    return e.nameObj == userName.value && e.pwObj == userPw.value;
  });
  console.log(userFound, "userrrrr");

  if (
    user_records.some((v) => {
      return v.nameObj == userName.value && v.pwObj == userPw.value;
    })
  ) {
    alert("User logged in");
    let current_user = user_records.filter((v) => {
      return v.nameObj == userName.value && v.pwObj == userPw.value;
    })[0];
    localStorage.setItem("name", current_user.userNameObj);
    localStorage.setItem("email", current_user.nameObj);

    window.open("./singleProfile.html", "_blank");
  } else if (userName.value === adminEmail) {
    alert("Admin logged in.");
    window.open("./form.html", "_blank");
    console.log("working");
  } else {
    alert("Error on login");
  }
  e.preventDefault();
}

console.log(adminPassword);
console.log(adminEmail);
