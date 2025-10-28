import {
  Model,
} from "Illuminate/Database/Eloquent/index.ts";

export type AdminSchema = {
  id?: number;
  email: string;
  password: string;
  name: string;
};

class Admin extends Model<AdminSchema> {
  protected static override _fillable = [];

  
}

export default Admin;
