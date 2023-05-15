const express = require("express");
const router = express.Router();

// Route files.
const authRoutes = require("./auth.routes");
const departmentRoutes = require('./department.routes')

/* ------------------------------------------------------ Routes ----------------------------------------------------- */

// Auth Routes.
router.use("/auth", authRoutes);
router.use("/department", departmentRoutes);

module.exports = router;
