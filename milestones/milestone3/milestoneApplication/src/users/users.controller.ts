import { Request, RequestHandler, Response } from "express";
import { Estate } from "../estates/estates.model";
import { User } from "./users.model";
import * as UserDao from "./users.dao";
import * as EstateDao from "../estates/estates.dao";
import { OkPacket } from "mysql";

// READ ALL USERS // READ USERS BY ID // READ USERS BY EMAIL
export const readUsers: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    let users;
    let userId = parseInt(req.query.userId as string);
    let userEmail = req.query.email as string;
    console.log("userId: ", userId);

    if (userEmail != null) {
      users = await UserDao.readUserByEmail(userEmail);
    } else if (Number.isNaN(userId)) {
      users = await UserDao.readUsers();
    } else {
      users = await UserDao.readUserById(userId);
    }

    res.status(200).json(users);
  } catch (e) {
    console.error("There was an error fetching users: ", e);
    res.status(500).json({
      message: "There was an error when fetching users",
    });
  }
};

// UPDATE USER
export const updateUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const okPacket: OkPacket = await UserDao.updateUser(req.body);

    console.log("req.body: ", req.body);
    console.log("user: ", okPacket);

    res.status(200).json(okPacket);
  } catch (e) {
    console.error("[user.controller][updateUser][Error] ", e);
    res.status(500).json({
      message: "There was an error when updating user",
    });
  }
};

// DELETE USER BY ID
export const deleteUserById: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    let userId = parseInt(req.params.userId as string);

    if (!Number.isNaN(userId)) {
      console.log("userId: ", userId);
      const response = await UserDao.deleteUser(userId);

      res.status(200).json(response);
    } else {
      throw new Error("Integer expected for userId");
    }
  } catch (error) {
    console.error("[users.controller][deleteUserById][Error] ", error);
    res.status(500).json({
      message: "There was an error when deleting users",
    });
  }
};

// CREATE USER
export const createUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const okPacket: OkPacket = await UserDao.createUser(req.body);

    console.log("req.body", req.body);
    console.log("user", okPacket);

    res.status(200).json(okPacket);
  } catch (error) {
    console.error("[users.controller][createUser][Error] ", error);
    res.status(500).json({
      message: "There was an error when writing users",
    });
  }
};
