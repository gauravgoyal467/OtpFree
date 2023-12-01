function otpless(otplessUser) {
    setTimeout(() => {
      window.location.href = "../profile/index.html";
    }, 100);
    localStorage.setItem("otpFreeUser",JSON.stringify(otplessUser));
    console.log(JSON.stringify(otplessUser));
  }
  