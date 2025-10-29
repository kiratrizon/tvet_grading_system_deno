import { Model } from "Illuminate/Database/Eloquent/index.ts";
import { HasFactory } from "Illuminate/Database/Eloquent/Factories/index.ts";
import { Authenticatable } from "Illuminate/Contracts/Auth/index.ts";

export type TeacherSchema = {
  id?: number;
  email: string;
  password: string;
  name: string;
  status?: boolean;
  gender?: string;
  image?: string;
};

class Teacher extends Authenticatable<TeacherSchema> {
  protected static override _fillable = [
    "name",
    "email",
    "password",
    "gender",
    "status",
    "image",
  ];

  protected static override use = {
    HasFactory,
  };
}

export default Teacher;
