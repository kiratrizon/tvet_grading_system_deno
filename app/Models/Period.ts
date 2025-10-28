import {
  Model,
} from "Illuminate/Database/Eloquent/index.ts";

export type PeriodSchema = {
  id?: number;
  email: string;
  password: string;
  name: string;
};

class Period extends Model<PeriodSchema> {
  protected static override _fillable = [];

  
}

export default Period;
