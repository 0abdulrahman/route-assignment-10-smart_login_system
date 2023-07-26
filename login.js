const username = document.getElementById("username");
const password = document.getElementById("password");
const submitBtn = document.querySelector("form > button");
const feedback = document.getElementById("feedback");
const localUsers = JSON.parse(localStorage.getItem("users"));

const currentUser = localUsers?.find((user) => user.signed) ?? undefined;
if (currentUser) location.assign("./index.html");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!username.value || !password.value) {
    feedback.innerText = "All inputs are required";
  } else {
    const loginUser = localUsers?.find((user) => user.username === username.value);
    if (loginUser) {
      loginUser.signed = true;
      localUsers.forEach((user) => {
        user.username === loginUser.username ? (user.signed = true) : user;
      });
      localStorage.setItem("users", JSON.stringify(localUsers));
      location.assign("./index.html");
    } else {
      feedback.innerText = "Invalid username or password";
    }
  }
});
