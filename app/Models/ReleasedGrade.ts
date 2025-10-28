import {
  Model,
} from "Illuminate/Database/Eloquent/index.ts";

export type ReleasedGradeSchema = {
  id?: number;
  email: string;
  password: string;
  name: string;
};

class ReleasedGrade extends Model<ReleasedGradeSchema> {
  protected static override _fillable = [];

  
}

export default ReleasedGrade;
