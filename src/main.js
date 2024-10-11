import "dotenv/config";
import "./conn.js"
import e from "express";
import vehicleRouter from "./routers/vehicle-router.js"
import maintenanceRouter from "./routers/maintenance-router.js";
import workshopRouter from "./routers/workshop-router.js"
const app = e();

app.use(e.json());

app.use("/vehicle", vehicleRouter);
app.use("/workshop", workshopRouter);
app.use("/maintenance", maintenanceRouter);



app.listen(process.env.API_PORT, () => {
    console.log(`listening on port ${process.env.API_PORT}`)
});