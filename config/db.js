import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://saleehaakram:saleehaakram237@cluster0.tznjr.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}