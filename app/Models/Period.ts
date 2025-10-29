import { Model } from "Illuminate/Database/Eloquent/index.ts";

export type PeriodSchema = {
  id?: number;
  label: string;
  weight: number;
};

class Period extends Model<PeriodSchema> {
  protected static override _fillable = ["label", "weight"];
}

export default Period;
