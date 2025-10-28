import {
  Model,
} from "Illuminate/Database/Eloquent/index.ts";

export type TeacherSubjectSchema = {
  id?: number;
  email: string;
  password: string;
  name: string;
};

class TeacherSubject extends Model<TeacherSubjectSchema> {
  protected static override _fillable = [];

  
}

export default TeacherSubject;
