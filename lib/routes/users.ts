import * as express from 'express';
import * as passport from 'passport';
import * as controllers from '../controllers/userControllers';

//create router
var router = express.Router();
//check route is working
router.get('/',(req,res)=>{
    res.status(200).json("route working!")
})

//route for signup
router.post('/signup',controllers.signUpPost);

//login route
router.post('/login',passport.authenticate('local'),controllers.getLogin)

//logout request
router.post('/logout',controllers.LogoutUser)

//athenticate user
router.post('/authenticate',controllers.authUser);

export default router;
