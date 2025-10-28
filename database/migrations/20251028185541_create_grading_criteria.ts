import { Migration } from "Illuminate/Database/Migrations/index.ts";
import { Schema } from "Illuminate/Support/Facades/index.ts";
import { Blueprint } from "Illuminate/Database/Schema/index.ts";

export default new (class extends Migration {
  public async up() {
    await Schema.create(
      "grading_criteria",
      (table: Blueprint) => {
        table.id();
        table.integer("teacher_subject_id").notNullable();
        table.string("criteria_name").notNullable();
        table.float("percentage").notNullable();
        table.softDeletes();
        table.timestamps();
      },
      this.connection
    );
  }

  public async down() {
    await Schema.dropIfExists("grading_criteria", this.connection);
  }
})();
