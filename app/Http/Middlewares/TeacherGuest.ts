export default class TeacherGuest {
  public handle: HttpMiddleware = async ({ request, Auth }, next) => {
    // if teacher already logged in, redirect to teacher dashboard
    if (await Auth.guard("teacher").check()) {
      return redirect().route("teacher.dashboard");
    }
    return next();
  };
}
