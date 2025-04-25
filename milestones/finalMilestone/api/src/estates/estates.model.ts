import { User } from "../users/users.model";

export interface Estate {
  id: number;
  type: string;
  ownerId: number;
  costOfRent: number;
  pictureLocation: string;
  address: string;
  owner?: User; // Optional field to include User details if needed
}
