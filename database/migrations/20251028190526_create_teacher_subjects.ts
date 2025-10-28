import { Migration } from "Illuminate/Database/Migrations/index.ts";
import { Schema } from "Illuminate/Support/Facades/index.ts";
import { Blueprint } from "Illuminate/Database/Schema/index.ts";

export default new (class extends Migration {
  public async up() {
    await Schema.create(
      "teacher_subjects",
      (table: Blueprint) => {
        table.id("id"); // primary auto-increment
        table.integer("teacher_id").notNullable();
        table.integer("subject_id").notNullable();
        table.string("course", 50).notNullable();
        table.string("section", 50).notNullable();
        table.string("year_level", 100).notNullable();
        table.string("semester", 100).notNullable();
        table.text("school_year").notNullable();
        table.text("assigned_date").notNullable();
        table.string("schedule_day", 255).notNullable();
        table.time("schedule_time_start").notNullable();
        table.time("schedule_time_end").notNullable();
        table.integer("room_id").nullable();
        table.time("m_start").nullable();
        table.time("t_start").nullable();
        table.time("w_start").nullable();
        table.time("th_start").nullable();
        table.time("f_start").nullable();
        table.time("s_start").nullable();
        table.time("ss_start").nullable();
        table.time("m_end").nullable();
        table.time("t_end").nullable();
        table.time("w_end").nullable();
        table.time("th_end").nullable();
        table.time("f_end").nullable();
        table.time("s_end").nullable();
        table.time("ss_end").nullable();
      },
      this.connection
    );
  }

  public async down() {
    await Schema.dropIfExists("teacher_subjects", this.connection);
  }
})();
