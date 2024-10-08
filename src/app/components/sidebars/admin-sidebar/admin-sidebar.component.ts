import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { MenuItemComponent } from "../../menu-item/menu-item.component";

@Component({
  selector: "app-admin-sidebar",
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, MenuItemComponent],
  templateUrl: "./admin-sidebar.component.html",
  styleUrl: "./admin-sidebar.component.scss",
})
export class AdminSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
