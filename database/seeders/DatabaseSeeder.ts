import Seeder from "Illuminate/Database/Seeder.ts";
import User from "App/Models/User.ts";
import Teacher from "App/Models/Teacher.ts";

export default class DatabaseSeeder extends Seeder {
  public async run() {
    const teacherFactory = (await Teacher.factory(this.connection)).count(10);
    await teacherFactory.create();
  }
}
