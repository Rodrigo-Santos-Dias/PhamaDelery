import { Category } from "./Category";
import User from "./User";

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: Category|null;
    userId?: User ;
    // Outros campos conforme necessário
  }