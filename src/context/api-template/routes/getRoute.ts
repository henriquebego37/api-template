import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";
import output from "../../../hooks/output";

const prisma = new PrismaClient();

const getRoute = async (req: Request, res: Response) => {
  // ------------------------------------------------------------------------------>
  const itens = await prisma.nometabela.findMany({
    select: {},
    orderBy: {},
  });
  // ------------------------------------------------------------------------------>
  return output({
    res,
    message: "Sucesso!",
    type: "ok",
    data: itens,
  });
};

export default getRoute;
