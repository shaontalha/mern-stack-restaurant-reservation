import express from 'express';
import { sendReservation } from '../controller/reservation.js';

const router = express.Router();

router.post('/send', sendReservation); // Handle POST requests to /api/v1/reservation


export default router;