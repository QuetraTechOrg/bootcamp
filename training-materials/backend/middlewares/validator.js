import { check, validationResult } from "express-validator";

const registerRules = () => [
  check("name", "This field is required").notEmpty(),
  check("email", "This field is required").notEmpty(),
  check("email", "This should be a valid email").isEmail(),
  check("password", "The password should be at least 6 character").isLength({
    min: 6,
  }),
];
const loginRules = () => [
  check("email", "This field is required").notEmpty(),
  check("email", "This should be a valid email").isEmail(),
  check("password", "The password should be at least 6 character").isLength({
    min: 6,
  }),
];

const validator = (req, res, next) => {
  const errors = validationResult(req);
  errors.isEmpty() ? next() : res.status(400).json({ msg: errors.array() });
};

export { registerRules, loginRules, validator };
