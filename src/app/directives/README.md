# Directives

This folder contains custom directives used in the application.

## Overview

Directives in Angular are a way to extend the functionality of HTML elements or create reusable components. They allow you to manipulate the DOM, add event listeners, and apply custom behavior to elements.

## Usage

To use a directive, simply import it into your module and add it to the `declarations` array. Then, you can use the directive as an attribute on any HTML element.

```typescript
import { MyDirective } from './directives/my.directive';

@NgModule({
    declarations: [
        MyDirective
    ],
    // ...
})
export class AppModule { }
```

```html
<div myDirective></div>
```
