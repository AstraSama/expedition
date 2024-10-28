import "dotenv/config";
import "../database/conn.js";
import e from "express";
import expedition_route from "../http/routes/expedition_route.js";
import explorer_route from "../http/routes/explorer_route.js"
import species_route from "../http/routes/species_route.js";

const app = e();

app.use(e.json());

app.use("/expedition", expedition_route);
app.use("/explorer", explorer_route);
app.use("/species", species_route);

app.listen(process.env.PORT, () => console.log("App running!"));