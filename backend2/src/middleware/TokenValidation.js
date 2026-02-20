import jwt from "jsonwebtoken";
import User from "../../model/User.js";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies["auth-token"]; //auth-token is the name of the cookie that contains the JWT

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized, need JWT to access or expired session",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET); //decode token n verify with secret key
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    req.user = user;
    next();
  } catch (err) {
    return res
      .status(403)
      .json({ message: "Unauthorized, JWT token wrong or expired" });
  }
};
