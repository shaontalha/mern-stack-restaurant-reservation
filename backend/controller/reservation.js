import Errorhandler from "../error/error.js";
import Reservation from "../models/resevationSchema.js";

export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, time, date } = req.body;
    if (!firstName || !lastName || !email || !phone || !time || !date) {
        return next(new Errorhandler("Please fill all the fields", 400));

    }
    try {
        const reservation = await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            time,
            date
        });

        res.status(201).json({
            success: true,
            message: "Reservation created successfully",
            reservation
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return next(new Errorhandler(validationErrors.join(', '), 400));
        }
        return next(error);
    }
    
}