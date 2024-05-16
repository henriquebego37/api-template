/* eslint-disable operator-linebreak */
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import output from "../../../hooks/output";

const prisma = new PrismaClient();

const delRoute = async (req: Request, res: Response) => {
  // ------------------------------------------------------------------------------>
  const { id } = req.query;
  // ------------------------------------------------------------------------------>
  await prisma.nometabela.delete({
    where: { ID: Number(id) },
  });
  // ------------------------------------------------------------------------------>
  return output({
    res,
    message: "Sucesso!",
    type: "ok",
    data: {},
  });
};

export default delRoute;
