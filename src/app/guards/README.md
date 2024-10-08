# Guards

Guards in this folder are used to implement the functional approach for handling route access and authentication in the application.

## Example

Here's an example of how to implement a guard using a functional approach:

```typescript
import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthService } from "../services/auth.service";

const createAuthGuard = (authService: AuthService, router: Router): CanActivate => {
  return (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
    return authService.isAuthenticated().pipe(
      map((isAuthenticated: boolean) => {
        if (isAuthenticated) {
          return true;
        } else {
          // Redirect to login page
          return router.parseUrl("/login");
        }
      })
    );
  };
};
```

In this example, the `AuthGuard` implements the `CanActivate` interface and provides the `canActivate` method. This method checks if the user is authenticated using the `AuthService`. If the user is authenticated, it allows access to the route. Otherwise, it redirects the user to the login page.

To use this guard, you can add it to the `canActivate` property of a route in your routing configuration:

```typescript
const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  // Other routes...
];
```

This ensures that the `AuthGuard` is executed before allowing access to the `DashboardComponent` route.
