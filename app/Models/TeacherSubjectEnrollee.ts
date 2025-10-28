import {
  Model,
} from "Illuminate/Database/Eloquent/index.ts";

export type TeacherSubjectEnrolleeSchema = {
  id?: number;
  email: string;
  password: string;
  name: string;
};

class TeacherSubjectEnrollee extends Model<TeacherSubjectEnrolleeSchema> {
  protected static override _fillable = [];

  
}

export default TeacherSubjectEnrollee;
