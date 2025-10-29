import User from "App/Models/User.ts";
import Teacher from "App/Models/Teacher.ts";
import { AuthConfig } from "configs/@types/index.d.ts";

const constant: AuthConfig = {
  default: {
    guard: "user",
  },
  guards: {
    user: {
      driver: "jwt",
      provider: "users",
    },
    teacher: {
      driver: "session",
      provider: "teachers",
    },
  },
  providers: {
    users: {
      driver: "eloquent",
      model: User,
    },
    teachers: {
      driver: "eloquent",
      model: Teacher,
    },
  },
};

export default constant;
