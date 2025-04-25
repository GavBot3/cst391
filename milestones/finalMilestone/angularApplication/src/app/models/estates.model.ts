import { User } from "./users.model";

export interface Estate {
  id: number;
  type: string;
  ownerId: number;
  costOfRent: number;
  pictureLocation: string;
  address: string;
  owner?: User;
}
