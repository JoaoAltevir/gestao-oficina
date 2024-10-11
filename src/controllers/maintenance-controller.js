import Maintenance from "../models/maintenance-model.js";


export const store = async (req,res) => {
    try {
        req.body.totalCost = 0;
        console.log(req.body.services.length)
        for(let i = 0; i < req.body.services.length;i++){
            console.log("entrei")
            req.body.totalCost += req.body.services[i].price
        };
        await Maintenance.create(req.body);
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
}

export const index = async (req, res) => {
    try {
        const content = await Maintenance.find().exec();
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const show = async (req,res) => {
    try {
    const content = await Maintenance.findById(req.params.id).populate("vehicle", "workshop").exec();
        res.json(content); 
    } catch (error) {
        res.status(400).json(error);
    }
}

export const update = async (req, res) => {
    try {
        await Maintenance.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json();    
    } catch (error) {
        res.status(400).json(error);
    }
}

export const destroy = async (req, res) => {
    try {
        await Maintenance.findByIdAndDelete(req.params.id).exec();
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
}