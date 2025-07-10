import jwt from "jsonwebtoken";
function checkAuth(req, res, next) {
  try{
    
    const token = req?.headers?.authorization?.split(" ")[1];
  // to split the token from the bearrer
  if (!token) {
    res.status(404).json({ message: "token not found" });
    return;
  }
  const decodedUser = jwt.verify(token,process.env.JWT_SECRET);



  req.user = decodedUser;
  next();
  }catch(error){
    res.status(401).json({ message: "your token is invalid" });
  }
}
export { checkAuth };
