import bcrypt from "bcryptjs";

const users = [
  {
    firstName: "Admin",
    lastName: "User",
    email: "admin@email.com",
    password: bcrypt.hashSync("12345678", 12),
    avatar: "https://i.pravatar.cc/150?img=52",
    role: "admin",
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@email.com",
    password: bcrypt.hashSync("12345678", 12),
    avatar: "https://i.pravatar.cc/150?img=69",
    role: "seller",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    email: "jane@email.com",
    password: bcrypt.hashSync("12345678", 12),
    avatar: "https://i.pravatar.cc/150?img=47",
  },
];

export default users;
