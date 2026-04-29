import express from "express";
import mongoose from "mongoose";
import Product from "../model/product.model.js";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";


const router = express.Router()
// POST - product banana
router.post("/", createProduct);

router.put("/:id", updateProduct)
// GET - products dekhna  naya route
router.get("/", getProducts);

router.delete("/:id",deleteProduct )
export default router;
