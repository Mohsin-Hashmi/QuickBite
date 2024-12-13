const Validator = require("validator");
const validateSignUpUser = (req) => {
  const { firstName, lastName, emailId, password } = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!firstName || !lastName || !emailId || !password) {
    throw new Error("All fields are required");
  } else if (!Validator.isEmail(emailId)) {
    throw new Error("Invalid email format");
  } else if (password.length < 6) {
    throw new Error("passowrd must be atleast six characters");
  } else if (!Validator.isStrongPassword(password)) {
    throw new Error("Password must be strong");
  }
};
const validEditableFields = (req) => {
  const editDataFields = [
    "firstName",
    "lastName",
    "password",
    "profilePicture",
    "phoneNumber",
    "bio",
    "address",
  ];

  const isEditAllowed = Object.keys(req.body).every((field) =>
    editDataFields.includes(field)
  );
  return isEditAllowed;
};

const validRestaurantsFields = (req) => {
  const { name, emailId, phoneNumber, address } = req.body;
  if (!name || !emailId || !phoneNumber || !address) {
    throw new Error("Missing required fields");
  }
};

const validRestaurantEditableFields = (req) => {
  const editDataFeilds = [
    "name",
    "phoneNumber",
    "description",
    "address",
    "openingHours",
    "menu",
    "rating",
    "reviews",
    "image",
  ];
  const isEditAllowed = Object.keys(req.body).every((field) =>
    editDataFeilds.includes(field)
  );
  return isEditAllowed;
};
module.exports = {
  validateSignUpUser,
  validEditableFields,
  validRestaurantsFields,
  validRestaurantEditableFields
};
