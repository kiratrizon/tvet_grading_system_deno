import Controller from "App/Http/Controllers/Controller.ts";
import Teacher from "../../Models/Teacher.ts";
import { Hash } from "Illuminate/Support/Facades/index.ts";

class TeacherController extends Controller {
  // GET /resource
  public index: HttpDispatch = async ({ request }) => {
    // List all resources
    return response().json({
      message: "index",
    });
  };

  // GET /resource/{id}
  public show: HttpDispatch = async ({ request }, id) => {
    // Show a single resource by ID
    return response().json({
      message: `show ${id}`,
    });
  };

  // GET /resource/create
  public create: HttpDispatch = async ({ request }) => {
    // Return form or data for creating resource
    return response().json({
      message: `create`,
    });
  };

  // POST /resource
  public store: HttpDispatch = async ({ request }) => {
    // Create a new resource
    return response().json({
      message: `store`,
    });
  };

  // GET /resource/{id}/edit
  public edit: HttpDispatch = async ({ request }, id) => {
    // Return form or data for editing resource
    return response().json({
      message: `edit ${id}`,
    });
  };

  // PUT or PATCH /resource/{id}
  public update: HttpDispatch = async ({ request }, id) => {
    // Update a resource by ID
    return response().json({
      message: `update ${id}`,
    });
  };

  // DELETE /resource/{id}
  public destroy: HttpDispatch = async ({ request }, id) => {
    // Delete a resource by ID
    return response().json({
      message: `delete ${id}`,
    });
  };

  public login: HttpDispatch = async ({ request, Auth }) => {
    if (request.method === "POST") {
      const formData = await request.validate({
        email: "required|email",
        password: "required|min:6",
      });
      const data = await Teacher.where("email", formData.email).first();
      if (!data) {
        request.session.flash("error_email", "Email not found.");
        return redirect().back();
      }
      // @ts-ignore //
      if (!Hash.check(formData.password, data.password)) {
        request.session.flash("error_password", "Invalid password.");
        return redirect().back();
      } else {
        await Auth.guard("teacher").login(data as Teacher);
        return redirect().route("teacher.dashboard");
      }
    }
    return view("teacher.login");
  };
}

export default TeacherController;
