export const validate = (data, type) => {
  const errors = {};

  if (!data.email) {
    errors.email = "email required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = " email is invalid ";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "password required ";
  } else if (data.password.length < 6) {
    errors.password = "password need to be 6 characters or more ";
  } else {
    delete errors.password;
  }

  if (type === "signup") {
    if (!data.confirmPassword) {
      errors.confirmPassword = "confirm password";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "password is not math";
    } else {
      delete errors.confirmPassword;
    }

    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "accept our regulations";
    }
    if (!data.name.trim()) {
      errors.name = "username required";
    } else {
      delete errors.name;
    }
  }
  return errors;
};
