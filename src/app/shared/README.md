# Shared Folder Overview

The `src/app/shared` folder is designed to house components, services, and utilities that are used across different parts of the application. This central location helps in maintaining a clean codebase and promotes the reuse of code.

## Sidebar Service

The `sidebar-service` is a crucial part of this shared module. It manages the state and behavior of the sidebar component, providing functions to open, close, and toggle the sidebar. This service ensures that the sidebar's state is consistent across the application.

### Features

- Open and close the sidebar programmatically.
- Toggle the sidebar's visibility.
- Query the current state of the sidebar.

### Usage

To use the `sidebar-service` in your component:

1. Import the `SidebarService` from the shared folder into your standalone component:

   ```typescript
   import { SidebarService } from "./src/app/shared/sidebar-service";

   @Component({
     selector: "app-my-component",
     templateUrl: "./my-component.component.html",
     styleUrls: ["./my-component.component.scss"],
     // make sure to import here
     imports: [SidebarService],
   })
   ```

2. Make use of the `SidebarService` in your component:

   ```typescript
   constructor(private sidebarService: SidebarService) {}

   toggleSidebar() {
       this.sidebarService.toggle();
   }
   ```
