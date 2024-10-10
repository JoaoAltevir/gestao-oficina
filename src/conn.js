import mongoose from "mongoose";

(async () => {
    try {
        mongoose.connect(process.env.MONGODB);
        console.log("connected with DB");
    } catch (error) {
        console.log(error);
    }
})();