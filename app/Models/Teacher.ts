import {
  Model,
} from "Illuminate/Database/Eloquent/index.ts";

export type TeacherSchema = {
  id?: number;
  email: string;
  password: string;
  name: string;
};

class Teacher extends Model<TeacherSchema> {
  protected static override _fillable = [];

  
}

export default Teacher;
