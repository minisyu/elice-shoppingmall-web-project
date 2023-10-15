export const regex = (props) => {
  const EmailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  /* 8 ~ 15 자리 비번 &*/
  const PasswordRegex =
    /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  const PhoneNumberRegex = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;

  if (EmailRegex.test(props)) {
    return true;
  } else if (PasswordRegex.test(props)) {
    console.log(props);
    return true;
  } else if (PhoneNumberRegex.test(props)) {
    return true;
  } else {
    return false;
  }
};
