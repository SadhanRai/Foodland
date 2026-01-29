import User from "../../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const exists = await User.findOne({ email });

    if (exists) {
      return res
        .status(409)
        .json({ message: `User ${exists.name} already exists` });
    }
    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hash,
    });

    res.status(201).json({ message: "Creating new user is working " });
  } catch (error) {
    console.error({ message: "faild while resgistering user", error });
  }
};

export const getRegister = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    console.error({ message: "failed to fetch user from database", error });
  }
};

export const Login = async (req, res) => {
  try {
    // 1. Destructure email and password from req.body
    // Make sure your index.js has app.use(express.json())!
    const { email, password } = req.body;

    // 2. SAFETY CHECK: If the user didn't send email or password
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide both email and password" });
    }

    // 3. Use the 'email' variable to find the user
    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(
      password, // Use the destructured 'password' variable
      user.password //this password coming from user, if both compare same logic true
    );

    if (!validPassword) return res.status(400).json("wrong password!");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "lax",
    });

    res.status(200).json({ token, username: user.name, role: user.role });
  } catch (error) {
    // This will now tell you exactly what is wrong if it fails again
    res
      .status(500)
      .json({ message: "error while login", error: error.message });
  }
};

export const Logout = async (req, res) => {
  try {
    // 1. Clear the 'token' cookie
    res.clearCookie("auth-token", {
      httpOnly: true, // must match login cookie
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax", // must match login cookie
      path: "/", // important: path must match
    });

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Logout failed", error: error.message });
  }
};
