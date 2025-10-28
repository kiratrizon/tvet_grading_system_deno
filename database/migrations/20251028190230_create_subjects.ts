import { Migration } from "Illuminate/Database/Migrations/index.ts";
import { Schema } from "Illuminate/Support/Facades/index.ts";
import { Blueprint } from "Illuminate/Database/Schema/index.ts";

export default new (class extends Migration {
  public async up() {
    await Schema.create(
      "subjects",
      (table: Blueprint) => {
        table.id("id"); // primary auto-increment
        table.text("semester").notNullable();
        table.text("course_code").notNullable();
        table.text("descriptive_title").notNullable();
        table.text("nth").notNullable();
        table.text("units").notNullable();
        table.text("lee").notNullable();
        table.integer("lab").notNullable();
        table.text("covered_qualification").notNullable();
        table.text("pre_requisite").notNullable();
        table.text("year_level").notNullable();
        table.text("course").notNullable();
      },
      this.connection
    );
  }

  public async down() {
    await Schema.dropIfExists("subjects", this.connection);
  }
})();
