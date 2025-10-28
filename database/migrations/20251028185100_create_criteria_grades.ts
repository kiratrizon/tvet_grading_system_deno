import { Migration } from "Illuminate/Database/Migrations/index.ts";
import { Schema } from "Illuminate/Support/Facades/index.ts";
import { Blueprint } from "Illuminate/Database/Schema/index.ts";

export default new (class extends Migration {
  public async up() {
    await Schema.create(
      "criteria_grades",
      (table: Blueprint) => {
        table.id();
        table.integer("criteria_note_record_id").notNullable();
        table.integer("score").notNullable();
        table.integer("enrollee_id").notNullable();
        table.timestamps();
      },
      this.connection
    );
  }

  public async down() {
    await Schema.dropIfExists("criteria_grades", this.connection);
  }
})();
