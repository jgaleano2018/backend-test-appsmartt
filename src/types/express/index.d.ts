// types/express/index.d.ts
import { User } from "../models/User"; // o el tipo que uses para tu usuario

declare global {
  namespace Express {
    interface Request {
      user?: User; // o el tipo que definas
    }
  }
}