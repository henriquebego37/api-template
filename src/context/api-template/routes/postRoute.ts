import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import output from "../../../hooks/output";

const prisma = new PrismaClient();

const postRoute = async (req: Request, res: Response) => {
  // ------------------------------------------------------------------------------>
  const { name, age, email } = req.body;
  // ------------------------------------------------------------------------------>
  if (name.length === 0) {
    return output({
      message: "Selecione um nome!",
      res,
      type: "bad_request",
      data: {},
    });
  }
  // ------------------------------------------------------------------------------>
  const access = await prisma.nometabela.createMany({
    data: {
      name,
      age,
      email,
    },
  });

  // ------------------------------------------------------------------------------>
  return output({
    res,
    message: "Sucesso!",
    type: "ok",
    data: { ...access },
  });
};

export default postRoute;
