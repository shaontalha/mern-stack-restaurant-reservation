import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'Please enter a valid email address']
    },
    phone: {
        type: String,
        required: true,
       minlength: [11, 'Phone number must be at least 11 characters'],
       maxlength: [11, 'Phone number must be at least 11 characters'],
        
       
    },
    time: {
        type: String,
        required: true,
        
    },
    date: {
        type: Date,
        required: true,
    },
});
export const Reservation = mongoose.model('Reservation', reservationSchema);
export default Reservation;
  