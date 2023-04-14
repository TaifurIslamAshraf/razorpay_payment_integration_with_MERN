import express from "express";
import {
  createOrder,
  paymentVerification,
} from "../controllers/payment.controller.js";
const router = express.Router();

router.post("/order", createOrder);
router.post("/paymentVerification", paymentVerification);

export default router;
