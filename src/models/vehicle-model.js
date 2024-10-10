import { Schema, model } from "mongoose";

const vehicleSchema = new Schema ({
    plate: {
        type: Schema.Types.String,
        required: true
    },
    model: {
        type: Schema.Types.String,
        required: true
    },
    year: {
        type: Schema.Types.Number,
        required: true
    },
    owner: {
        type: Schema.Types.String,
        required: true
    },
    maintenances: {
        type: [Schema.Types.ObjectId],
        ref: "Maintenances",
        required: false,
    }
})

const Vehicle = model("Vehicle", vehicleSchema);

export default Vehicle