const pToken = document.getElementById("token");
const pTimezone = document.getElementById("timezone");
const pTimestamp = document.getElementById("timestamp");
const pNumber = document.getElementById("number");
const pName = document.getElementById("name");
const pEmail = document.getElementById("email");



let currUser = JSON.parse(localStorage.getItem("otpFreeUser"));
console.log(currUser);

// if (currUser == null) {
//     window.location.href = "../index.html";
// } else {
    pToken.innerText = `Token : ${currUser.token}`;
    pTimestamp.innerText = `Timestamp : ${currUser.timestamp}`;
    pTimezone.innerText = `Timezone : ${currUser.timezone}`;
    pName.innerText = `Name :  ${currUser.mobile.name}`;
    pNumber.innerText = `Number : ${currUser.mobile.number}`;
    pEmail.innerText = `Email : ${currUser.email.email}`;
// }

