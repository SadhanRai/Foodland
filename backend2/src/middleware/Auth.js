import jwt from "jsonwebtoken";

export const ensuereAuthenctication = (req, res, next) => {
  const auth = req.headers["authorixation"];

  if (!auth) {
    return res
      .status(403)
      .json({
        message: "Unauthorizes, need JWT to access or expired seession",
      });
  }
  try {
    const decoded = jwt.verify(auth, process.env.JWT_SECRET);
    next();
  } catch (err) {
    return res
      .status(403)
      .json({ message: "Unauthorizes, JWT toek wrong or expired" });
  }
};
