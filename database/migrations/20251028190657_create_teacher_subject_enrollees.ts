import { Migration } from "Illuminate/Database/Migrations/index.ts";
import { Schema } from "Illuminate/Support/Facades/index.ts";
import { Blueprint } from "Illuminate/Database/Schema/index.ts";

export default new (class extends Migration {
  public async up() {
    await Schema.create(
      "teacher_subject_enrollees",
      (table: Blueprint) => {
        table.id();
        table.integer("student_id").notNullable();
        table.integer("teacher_subject_id").notNullable();
        table.integer("read_flg").notNullable().default(0);
        table.timestamps();
      },
      this.connection
    );
  }

  public async down() {
    await Schema.dropIfExists("teacher_subject_enrollees", this.connection);
  }
})();
