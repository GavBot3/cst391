import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { User } from "./users.model";
import { userQueries } from "./users.queries";

export const readUsers = async () => {
  return execute<User[]>(userQueries.readUsers, []);
};

export const readUserById = async (userId: number) => {
  return execute<User[]>(userQueries.readUserById, [userId]);
};

export const readUserByEmail = async (email: string) => {
  return execute<User[]>(userQueries.readUserByEmail, [email]);
};

export const createUser = async (user: User) => {
  return execute<OkPacket>(userQueries.createUser, [
    user.firstName,
    user.lastName,
    user.email,
    user.password,
    user.phoneNumber,
    user.status,
    user.creationDate,
    user.lastLoginDate
  ]);
};

const convertToMySQLDate = (date: Date): string => {
    console.log(date.toISOString())
    // Convert to format 'YYYY-MM-DD HH:MM:SS'
    return date.toUTCString().slice(0, 19).replace('T', ' ');
};

export const updateUser = async (user: User) => {
  return execute<OkPacket>(userQueries.updateUser, [
    user.firstName,
    user.lastName,
    user.email,
    user.phoneNumber,
    user.status,
    user.lastLoginDate,
    user.id
  ]);
};

export const deleteUser = async (userId: number) => {
  return execute<OkPacket>(userQueries.deleteUser, [userId]);
};
