import { Factory } from "Illuminate/Database/Eloquent/Factories/index.ts";
import Admin from "App/Models/Admin.ts";

export default class AdminFactory extends Factory {

  protected override _model = Admin;

  public definition() {
    return {
      email: this.faker.email(),
      password: this.faker.password(12),
      name: this.faker.name()
    };
  }
}
