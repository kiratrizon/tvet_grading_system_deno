import {
  Model,
} from "Illuminate/Database/Eloquent/index.ts";

export type GradingCriterionSchema = {
  id?: number;
  email: string;
  password: string;
  name: string;
};

class GradingCriterion extends Model<GradingCriterionSchema> {
  protected static override _fillable = [];

  
}

export default GradingCriterion;
