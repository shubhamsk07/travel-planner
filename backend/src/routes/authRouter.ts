import { Router } from "express";
import { userSignUpSchema } from "../types";
import { prisma } from "../prisma";

export const authRouter = Router();

authRouter.get("/signup", async (req, res) => {
  const { data } = userSignUpSchema.safeParse(req.body);
  if (!data) {
    res.status(404).json({ message: "Invalid inputs" });
    return;
  }
  const isExisting = await prisma.user.findFirst({
    where: { email: data.email },
  });

  if (isExisting) {
    res.status(401).json({ message: "user already exists!" });
  }
  const user = await prisma.user.create({
    data:{
        username:data.username,
        password:data.password,
        email:data.email
    }
  })

});
