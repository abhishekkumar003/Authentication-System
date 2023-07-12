import express from "express";

const router = express.Router();

import UserController from "../controllers/userController.js";
import checkUserAuth from "../middlewares/authMiddleware.js";


// // route level middleware
// router.use('/updatePassword', checkUserAuth);

//public router
router.post('/register', UserController.userRegistration);
router.post('/login', UserController.userLogin);
router.post('/user-forget-password', UserController.sendUserPasswordResetLink);
router.post('/reset-password/:id/:token', UserController.resetUserPassword);


//private router
router.post('/updatePassword', checkUserAuth, UserController.updatePassword);
router.get('/showUserData', checkUserAuth, UserController.showUserData);



export default router;



