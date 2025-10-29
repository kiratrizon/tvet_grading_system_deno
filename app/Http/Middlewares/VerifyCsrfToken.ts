export default class VerifyCsrfToken {
  public handle: HttpMiddleware = async ({ request }, next) => {
    if (["POST", "PUT", "PATCH", "DELETE"].includes(request.method)) {
      const tokenFromInput = request.input("_token");
      const tokenFromHeader = request.header("X-CSRF-TOKEN");
      const tokenFromStore = request.session.get("_token");

      const providedToken = tokenFromInput || tokenFromHeader;

      if (!providedToken || providedToken !== tokenFromStore) {
        if (request.expectsJson() || request.ajax()) {
          return response().json(
            {
              message: "CSRF token mismatch.",
            },
            403
          );
        } else {
          return redirect().back();
        }
      }
    }

    return next();
  };
}
