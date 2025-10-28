import {
  Model,
} from "Illuminate/Database/Eloquent/index.ts";

export type CriteriaGradeSchema = {
  id?: number;
  email: string;
  password: string;
  name: string;
};

class CriteriaGrade extends Model<CriteriaGradeSchema> {
  protected static override _fillable = [];

  
}

export default CriteriaGrade;
