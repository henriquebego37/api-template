/* eslint-disable no-console */
import express from "express";
import cors from "cors";
// import rtDELETE from "./src/router/rtDELETE";
// import rtPOST from "./src/router/rtPOST";
// ==============================================================================>
require("dotenv").config();

export const router = express();
// ==============================================================================>
const port = 3333;
const name = "api-template";
// ==============================================================================>
router.use(express.json({ limit: "50mb" }));
// router.use(helmet());
router.use(express.json());
router.use(cors());
// ==============================================================================>
// rtPOST(router);
// rtDELETE(router);
// ==============================================================================>
router.listen(port, () =>
  console.log(`Server ${name} ready at: http://localhost:${port} <<`)
);
// ==============================================================================>

export default router;
