import { Route } from "Illuminate/Support/Facades/index.ts";
import TeacherController from "App/Http/Controllers/TeacherController.ts";

Route.prefix("teacher")
  .as("teacher")
  .group(() => {
    Route.match(["get", "post"], "/login", [
      TeacherController,
      "login",
    ]).middleware("teacher.guest");

    Route.middleware("auth:teacher").group(() => {
      Route.get("/dashboard", [TeacherController, "index"]).name("dashboard");
    });
  });
