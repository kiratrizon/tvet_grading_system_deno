import {
  Model,
} from "Illuminate/Database/Eloquent/index.ts";

export type CriteriaNoteRecordSchema = {
  id?: number;
  email: string;
  password: string;
  name: string;
};

class CriteriaNoteRecord extends Model<CriteriaNoteRecordSchema> {
  protected static override _fillable = [];

  
}

export default CriteriaNoteRecord;
