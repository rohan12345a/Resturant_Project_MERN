//  Using Node.js environment with the Express.js framework.

import express from "express";
import send_reservation from "../controller/reservation.js";

const router = express.Router();

router.post("/send", send_reservation);

export default router;