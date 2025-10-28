import { Factory } from "Illuminate/Database/Eloquent/Factories/index.ts";
import Teacher from "App/Models/Teacher.ts";

export default class TeacherFactory extends Factory {

  protected override _model = Teacher;

  public definition() {
    return {
      email: this.faker.email(),
      password: this.faker.password(12),
      name: this.faker.name()
    };
  }
}
