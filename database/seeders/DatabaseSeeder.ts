import Seeder from "Illuminate/Database/Seeder.ts";
import User from "App/Models/User.ts";
import Teacher from "App/Models/Teacher.ts";
import Period from "App/Models/Period.ts";

export default class DatabaseSeeder extends Seeder {
  public async run() {
    const teacherFactory = (await Teacher.factory(this.connection)).count(10);
    await teacherFactory.create();

    const periods = [
      { label: "Prelim", weight: 20 },
      { label: "Midterm", weight: 30 },
      { label: "Finals", weight: 50 },
    ];
    for (const periodData of periods) {
      const period = new Period();
      period.fill(periodData);
      await period.save();
    }
  }
}
