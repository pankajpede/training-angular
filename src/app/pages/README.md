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