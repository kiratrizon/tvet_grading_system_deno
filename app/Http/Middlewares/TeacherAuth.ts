export default class TeacherAuth {
  public handle: HttpMiddleware = async ({ request, Auth }, next) => {

    if (!(await Auth.guard("teacher").check())) {
      return redirect().route("teacher.login")
    }
    return next();
  };
}
