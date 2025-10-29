import { Migration } from "Illuminate/Database/Migrations/index.ts";
import { Schema } from "Illuminate/Support/Facades/index.ts";
import { Blueprint } from "Illuminate/Database/Schema/index.ts";

export default new (class extends Migration {
  public async up() {
    await Schema.create(
      "periods",
      (table: Blueprint) => {
        table.id();
        table.string("label").notNullable();
        table.float("weight").notNullable();
        table.timestamps();
      },
      this.connection
    );
  }

  public async down() {
    await Schema.dropIfExists("periods", this.connection);
  }
})();
