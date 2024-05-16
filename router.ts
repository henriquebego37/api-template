/* eslint-disable no-console */
import express from "express";
import cors from "cors";
// ==============================================================================>
require("dotenv").config();

export const router = express();
// ==============================================================================>
const DEFAULT_PORT = 8500;
const DEFAULT_API_PREFIX = "api-template";
// ==============================================================================>
router.use(express.json({ limit: "50mb" }));
// router.use(helmet());
router.use(express.json());
router.use(cors());
// ==============================================================================>
// rtPOST(router);
// rtDELETE(router);
// ==============================================================================>
router.listen(DEFAULT_PORT, () =>
  console.log(
    `Server ${DEFAULT_API_PREFIX} listen at: http://localhost:${DEFAULT_PORT} 🎢 ->`
  )
);
// ==============================================================================>

export default router;
