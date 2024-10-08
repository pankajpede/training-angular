import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { MenuItemComponent } from "../../menu-item/menu-item.component";

@Component({
  selector: "app-advisor-sidebar",
  standalone: true,
  templateUrl: "./advisor-sidebar.component.html",
  styleUrl: "./advisor-sidebar.component.scss",
  imports: [CommonModule, RouterModule, ButtonModule, MenuItemComponent],
})
export class AdvisorSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
