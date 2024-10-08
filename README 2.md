# FiSpoke

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

# Setup

1. Install pnpm globally (make sure to use latest version of Nodejs)

```bash
npm install -g pnpm
```

2. Install dependencies

```bash
pnpm install
```

3. Start the development server

```bash
pnpm start
```

## Development server

Run `pnpm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `npx ng generate component component-name` to generate a new component. You can also use `npx ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Generating pages

1. Run `npx ng generate module pages/module-name --route && npx ng generate component pages/module-name --module pages/module-name` to generate a new page. This will create a new module and a new component with the same name.
2. Make sure to update the newly generated `module-name-routing.module.ts` file like this.

```typescript
const routes: Routes = [
  {
    path: "",
    component: ModuleNameComponent,
  },
];
```

3. Add the new module to the `app-routing.module.ts` file like this.

```typescript
const routes: Routes = [
  {
    path: "module-name",
    loadChildren: () => import("./pages/module-name/module-name.module").then((m) => m.ModuleNameModule),
  },
];
```

NOTE: similary you can generate other components like `directive`, `pipe`, `service`, `class`, `guard`, `interface`, `enum`, `module` etc.

## Build

Run `npx ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npx ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npx ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `npx ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

**Key Improvements:**

- **Clear Environment Commands:** Added separate `pnpm start` commands for each environment (`start:qa`, `start:uat`).
- **Build Commands:** Included instructions for building for all environments (`build:qa`, `build:uat`, `build:prod`).
- **Concise Instructions:** Streamlined the existing instructions for better readability.

**Additional Tips:**

- **package.json Scripts:** Consider adding scripts in your `package.json` file to make the commands even shorter (e.g., `"start:qa": "ng serve --configuration qa"`).
- **Environment Variables in README:** If you have specific environment variables (e.g., API URLs), you can document them in the README as well.