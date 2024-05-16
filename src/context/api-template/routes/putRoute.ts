import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import output from "../../../hooks/output";

const prisma = new PrismaClient();

const putRoute = async (req: Request, res: Response) => {
  // ------------------------------------------------------------------------------>
  const { id } = req.params;
  // ------------------------------------------------------------------------------>

  const element = await prisma.nometabela.update({
    where: {
      ID: Number(id),
    },
    data: {},
  });
  // ------------------------------------------------------------------------------>

  return output({
    res,
    message: "Sucesso!",
    type: "ok",
    data: { ...element },
  });
};

export default putRoute;
