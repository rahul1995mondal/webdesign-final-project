function formData() {
  let jname = document.forms["contactUs"]["name"];

  let jemail = document.forms["contactUs"]["email"];

  let jphNumber = document.forms["contactUs"]["phoneNumber"];

  let jdate = document.forms["contactUs"]["date"];

  let jtime = document.forms["contactUs"]["time"];

  let joption = document.forms["contactUs"]["option"];

  let jmSg = document.forms["contactUs"]["message"];

  if (jname.value == "") {
    window.alert("Please Enter your name-");
    jname.focus();
    return false;
  }
  if (jemail.value == "") {
    window.alert("Please Enter your email id-");
    jemail.focus();
    return false;
  }
  if (jphNumber.value == "") {
    window.alert("Please Enter your phone-number-");
    jphNumber.focus();
    return false;
  }
  if (jdate.value == "") {
    window.alert("Please Enter date-");
    jdate.focus();
    return false;
  }
  if (jtime.value == "") {
    window.alert("Please Enter time-");
    jtime.focus();
    return false;
  }
  if (joption.value == "") {
    window.alert("select option-");
    joption.focus();
    return false;
  }
  if (jmSg.value == "") {
    window.alert("tell something-");
    jmSg.focus();
    return false;
  }
  return true;
}
