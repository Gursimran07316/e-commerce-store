const bcrypt = require("bcryptjs");
const users = [
  {
    name: "Admin1",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Jane Doe",
    email: "admin@example1.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jhon Doe",
    email: "admin@example2.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
module.exports = users;
