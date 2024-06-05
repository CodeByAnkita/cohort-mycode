// src/app.ts
import express, { json, urlencoded } from "express";
import { RegisterRoutes } from "../build/routes";
// swagger use for making open api spec file
// import swaggerUi from "swagger-ui-express";
// import {response as ExResponse, request as ExRequest} from "express";

export const app = express();
// use for swagger
// app.use("/docs", swaggerUi.serve, async(_req: ExRequest, res:ExResponse)=>{
//   return res.send(
//     swaggerUi.generateHTML(await import("../build/swagger.json"))
//   )
// })
//use command after that
// yarn run tsc --outDirbuild --experimentalDecoraters
//node build/src/server.js
// then you can see open api spec file in localhost:3000/docs you can see
// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

RegisterRoutes(app);
