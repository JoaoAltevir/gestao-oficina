import { Schema, model } from "mongoose";

const serviceSchema = new Schema ({
    name: {
        type: Schema.Types.String,
        required: true,
    },
    price: {
        type: Schema.Types.Number,
        required: true 
    }
});

const maintenanceSchema = new Schema ({
    date: {
        type: Schema.Types.Date,
        required: true
    },
    services: [serviceSchema],
    workshop: {
        type: Schema.Types.ObjectId,
        ref: "Workshop",
        required: true
    },
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: "Vehicle",
        required: true
    },
    totalCost: {
        type: Schema.Types.Number,
        required: false
    }
    
});

const Maintenance = model("Maintenance", maintenanceSchema);

export default Maintenance