import { Router } from "express";
import { addNewUser } from "../services/user-services";

export const userRouter = new Router();

userRouter.post("/", async (req, res) => {
  if (
    !req.body ||
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email
  ) {
    res.status(401).send("❌Invalid request❌");
    return;
  }
  const newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  };
  await addNewUser(newUser);
  res.status(201).send("Success");
});

userRouter.get("/", async (req, res) => {
  const users = await getUsers();
  res.status(201).send(users);
});
