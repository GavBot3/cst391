import { Request, RequestHandler, Response } from "express";
import { Estate } from "./estates.model";
import * as EstateDao from "./estates.dao";
import { OkPacket } from "mysql";

// READ ALL ESTATES / READ ESTATES BY ID 
export const readEstates: RequestHandler = async (req: Request, res: Response) => {
  try {
    let estates;
    let estateId = parseInt(req.query.estateId as string);

    console.log("estateId: ", estateId);

    if (!Number.isNaN(estateId)) {
      estates = await EstateDao.readEstateById(estateId);
    } else {
      estates = await EstateDao.readEstates();
    }

    res.status(200).json(estates);
  } catch (error) {
    console.error("[estates.controller][readEstates][Error] ", error);
    res.status(500).json({
      message: "There was an error when fetching estates",
    });
  }
};

// READ ESTATES BY OWNER ID
export const readEstatesByOwner: RequestHandler = async (req: Request, res: Response) => {
  try {
    let estates;
    let ownerId = parseInt(req.params.ownerId as string);

    console.log("ownerId: ", ownerId);

    if (!Number.isNaN(ownerId)) {
      estates = await EstateDao.readEstatesByOwner(ownerId);
    } else {
      estates = await EstateDao.readEstates();
    }

    res.status(200).json(estates);
  } catch (error) {
    console.error("[estates.controller][readEstatesByOwner][Error] ", error);
    res.status(500).json({
      message: "There was an error when fetching estates",
    });
  }
};

// CREATE ESTATE
export const createEstate: RequestHandler = async (req: Request, res: Response) => {
  try {
    const okPacket: OkPacket = await EstateDao.createEstate(req.body);

    console.log("req.body", req.body);
    console.log("estate", okPacket);

    res.status(200).json(okPacket);
  } catch (error) {
    console.error("[estates.controller][createEstate][Error] ", error);
    res.status(500).json({
      message: "There was an error when creating estate",
    });
  }
};

// UPDATE ESTATE
export const updateEstate: RequestHandler = async (req: Request, res: Response) => {
  try {
    const okPacket: OkPacket = await EstateDao.updateEstate(req.body);

    console.log("req.body: ", req.body);
    console.log("estate: ", okPacket);

    res.status(200).json(okPacket);
  } catch (error) {
    console.error("[estates.controller][updateEstate][Error] ", error);
    res.status(500).json({
      message: "There was an error when updating estate",
    });
  }
};

// DELETE ESTATE BY ID
export const deleteEstateById: RequestHandler = async (req: Request, res: Response) => {
  try {
    let estateId = parseInt(req.params.id as string);

    if (!Number.isNaN(estateId)) {
      console.log("estateId: ", estateId);
      const response = await EstateDao.deleteEstate(estateId);

      res.status(200).json(response);
    } else {
      throw new Error("Integer expected for estateId");
    }
  } catch (error) {
    console.error("[estates.controller][deleteEstateById][Error] ", error);
    res.status(500).json({
      message: "There was an error when deleting estate",
    });
  }
};
