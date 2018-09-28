import {Request, Response, NextFunction} from "express";
import usersModels from '../models/usersSchema';
//login controller
export let getLogin = (req : Request, res : Response) => {
  if (req.user) {
    res
      .status(200)
      .json(req.user);
  }
};

//logout controller
export let LogoutUser = (req : Request, res : Response) => {
  req.logout();
  res
    .status(200)
    .json("succefully logout!");
};

//Auth controller
export let authUser = (req : Request, res : Response) => {
  if (req.isAuthenticated()) {
    res
      .status(200)
      .json(req.user)
  } else {
    res
      .status(401)
      .json('user is not logged in!')
  }
};

//SignUp controller
export let signUpPost = (req : Request, res : Response) => {
  let newUser = new usersModels(req.body);
  newUser.save((err, user) => {
    if (err) {
      res
        .status(500)
        .json("error has been occored!")
    } else {
      res
        .status(200)
        .json("successfully registered")
    }
  });
};
