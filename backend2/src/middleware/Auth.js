import jwt from "jsonwebtoken";

export const ensuereAuthenctication = (req, res, next) => {
  const auth = req.headers["authorization"];

  if (!auth) {
    return res.status(403).json({
      message: "Unauthorizes, need JWT to access or expired seession",
    });
  }
  try {
    const decoded = jwt.verify(auth, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res
      .status(403)
      .json({ message: "Unauthorizes, JWT toek wrong or expired" });
  }
};
