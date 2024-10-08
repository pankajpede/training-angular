# Components

This folder contains all the Angular components used in the project.

## Structure

The components are organized into subfolders based on their functionality or feature. Each component folder contains the following files:

- `component-name.component.ts`: The TypeScript file that defines the component logic.
- `component-name.component.html`: The HTML template for the component.
- `component-name.component.scss`: The SCSS file for styling the component.
- `component-name.component.spec.ts`: The unit tests for the component.

## Usage

To use a component in your Angular application, you need to import it into the module where it will be used. You can then add the component selector to the HTML template of the parent component.

For example, to use the `example-component`:

1. Import the component in the module:

```typescript
import { ExampleComponent } from './example-component/example-component.component';
```

2. Add the component to the `declarations` array in the module:

```typescript
@NgModule({
    declarations: [
        ExampleComponent
    ],
    // ...
})
export class AppModule { }
```

3. Use the component selector in the HTML template of the parent component:

```html
<app-example-component></app-example-component>
```

## Contributing

If you want to contribute to the components in this folder, please follow the guidelines in the [CONTRIBUTING.md](../CONTRIBUTING.md) file.
