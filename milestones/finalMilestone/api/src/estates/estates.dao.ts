import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Estate } from "./estates.model";
import { estateQueries } from "./estates.queries";

export const readEstates = async () => {
  return execute<Estate[]>(estateQueries.readEstates, []);
};

export const readEstateById = async (estateId: number) => {
  return execute<Estate[]>(estateQueries.readEstateById, [estateId]);
};

export const readEstatesByOwner = async (ownerId: number) => {
  return execute<Estate[]>(estateQueries.readEstatesByOwner, [ownerId]);
};

export const createEstate = async (estate: Estate) => {
  return execute<OkPacket>(estateQueries.createEstate, [
    estate.type,
    estate.ownerId,
    estate.costOfRent,
    estate.pictureLocation,
    estate.address
  ]);
};

export const updateEstate = async (estate: Estate) => {
  return execute<OkPacket>(estateQueries.updateEstate, [
    estate.type,
    estate.ownerId,
    estate.costOfRent,
    estate.pictureLocation,
    estate.address,
    estate.id
  ]);
};

export const deleteEstate = async (estateId: number) => {
  return execute<OkPacket>(estateQueries.deleteEstate, [estateId]);
};
