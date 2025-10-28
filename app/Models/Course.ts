import {
  Model,
} from "Illuminate/Database/Eloquent/index.ts";

export type CourseSchema = {
  id?: number;
  email: string;
  password: string;
  name: string;
};

class Course extends Model<CourseSchema> {
  protected static override _fillable = [];

  
}

export default Course;
