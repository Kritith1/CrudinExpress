import jsonwebtoken from "jsonwebtoken";
import { config } from "dotenv";

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  if (!token) {
    console.log("i am here");

    return res.status(401).send("A token is reqiured for authentication");
  }
  try {
    const decoded = jsonwebtoken.verify(token, config.SECRET_KEY);

    req.userModel = decoded;
  } catch (error) {
    return res.status(401).send("Invalid token");
  }
  return next();
};
export default verifyToken;
