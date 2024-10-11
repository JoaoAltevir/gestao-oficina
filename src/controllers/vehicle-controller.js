import Vehicle from "../models/vehicle-model.js";

export const store = async (req,res) => {
    try {
        await Vehicle.create(req.body);
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
}

export const index = async (req, res) => {
    try {
        const content = await Vehicle.find().exec();
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const show = async (req,res) => {
    try {
        const content = await Vehicle.findById(req.params.id).populate("maintenances").exec();
        res.json(content); 
    } catch (error) {
        res.status(400).json(error);
    }
}

export const update = async (req, res) => {
    try {
        await Vehicle.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json();    
    } catch (error) {
        res.status(400).json(error);
    }
}

export const destroy = async (req, res) => {
    try {
        await Vehicle.findByIdAndDelete(req.params.id).exec();
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
}