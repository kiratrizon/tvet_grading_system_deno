import { Migration } from "Illuminate/Database/Migrations/index.ts";
import { Schema } from "Illuminate/Support/Facades/index.ts";
import { Blueprint } from "Illuminate/Database/Schema/index.ts";

export default new (class extends Migration {
  public async up() {
    await Schema.create(
      "criteria_note_records",
      (table: Blueprint) => {
        table.id();
        table.string("grading_criterion_id").notNullable();
        table.string("note").notNullable();
        table.integer("period").notNullable();
        table.integer("total_item").notNullable();
        table.timestamps();
      },
      this.connection
    );
  }

  public async down() {
    await Schema.dropIfExists("criteria_note_records", this.connection);
  }
})();
