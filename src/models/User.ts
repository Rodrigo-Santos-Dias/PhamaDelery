import { Product } from "./Product";

export default interface User {
    id: number;
    name: string;
    user: string;
    photo: string;
    password: string;
    product?: Product | null;
  }