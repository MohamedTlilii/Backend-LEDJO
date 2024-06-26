const express = require("express");
const route = express.Router();
const verifiedToken = require("../../middlewares/verifyToken");
const upload = require("../../middlewares/multer");

// signup
route.post("/signup", require("./signup"));
// login
route.post("/login", require("./login"));
// get products
route.get("/getProducts", require("./getProducts"));
// get single product
route.get("/getSingleProduct/:id", require("./getSingleProduct"));
// get information
route.get("/getInformation", verifiedToken, require("./GetInformation"));
// addProductToCart
route.post(
  "/addProductToCart/:productId",
  verifiedToken,
  require("./addProductToCart")
);

// update user photo
route.put(
  "/updatePhoto",
  verifiedToken,
  upload.single("photo"),
  require("./updatePhoto")
);
// update information
route.put("/updateInformation", verifiedToken, require("./updateInformation"));

//  get Own Cart
route.get("/getOwnCart", verifiedToken, require("./getOwnCart"));

// delete cart
route.delete("/deleteCart", verifiedToken, require("./restartCart"));

// update product quantity from cart
route.put(
  "/incProductQuantityFromCart/:productId",
  verifiedToken,
  require("./incProductQuantityFromCart")
);

// update product quantity from cart
route.put(
  "/decProductQuantityFromCart/:productId",
  verifiedToken,
  require("./decProductQuantityFromCart")
);
// delete product from cart
route.delete(
  "/removeProductFromCart/:productId",
  verifiedToken,
  require("./removeProductFromCart")
);

//  create Order
route.post("/createOrder", verifiedToken, require("./createOrder"));

//  get Own Order
route.get("/getOwnOrder", verifiedToken, require("./getOwnOrder"));

module.exports = route;
