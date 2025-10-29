import { Factory } from "Illuminate/Database/Eloquent/Factories/index.ts";
import Teacher from "App/Models/Teacher.ts";
import { Hash } from "Illuminate/Support/Facades/index.ts";

export default class TeacherFactory extends Factory {
  protected override _model = Teacher;

  public definition() {
    const gender = ["Male", "Female"];
    return {
      email: this.faker.email(),
      password: Hash.make("asterda23"),
      name: this.faker.name(),
      gender: gender[this.faker.numberBetween(0, 1)],
      status: 1,
    };
  }
}
