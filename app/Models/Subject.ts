import {
  Model,
} from "Illuminate/Database/Eloquent/index.ts";

export type SubjectSchema = {
  id?: number;
  email: string;
  password: string;
  name: string;
};

class Subject extends Model<SubjectSchema> {
  protected static override _fillable = [];

  
}

export default Subject;
