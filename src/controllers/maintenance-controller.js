import Maintenance from "../models/maintenance-model.js";
import Vehicle from "../models/vehicle-model.js";
import Workshop from "../models/workshop-model.js";

export const store = async (req,res) => {
    try {
        //processo para calcular o custo total
        req.body.totalCost = 0;
        for(let i = 0; i < req.body.services.length;i++){
            req.body.totalCost += req.body.services[i].price
        };
        //------------------------------------------------
        const maintenance = await Maintenance.create(req.body);
        const vehicle = await Vehicle.findById(req.body.vehicle).exec();
        vehicle.maintenances.push(maintenance)
        vehicle.save();
        const workshop = await Workshop.findById(req.body.workshop).exec();
        workshop.maintenances.push(maintenance);
        workshop.save();
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
    const content = await Maintenance.findById(req.params.id).populate(["vehicle", "workshop"]).exec();
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