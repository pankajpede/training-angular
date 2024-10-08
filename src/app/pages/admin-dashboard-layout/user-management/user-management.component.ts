import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ConfirmationService, MessageService } from "primeng/api";
import {
  AutoCompleteCompleteEvent,
  AutoCompleteModule,
} from "primeng/autocomplete";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DialogModule } from "primeng/dialog";
import { DividerModule } from "primeng/divider";
import { IconFieldModule } from "primeng/iconfield";
import { InputIconModule } from "primeng/inputicon";
import { InputMaskModule } from "primeng/inputmask";
import { InputSwitchModule } from "primeng/inputswitch";
import { InputTextModule } from "primeng/inputtext";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { TableLazyLoadEvent, TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { TooltipModule } from "primeng/tooltip";

type Column = { header: string; field: string; tooltip?: string };

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isActive: boolean;
  lastLoggedIn: string;
}

@Component({
  selector: "app-user-management",
  standalone: true,
  imports: [
    ButtonModule,
    RouterModule,
    CommonModule,
    DividerModule,
    OverlayPanelModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    CheckboxModule,
    ReactiveFormsModule,
    TableModule,
    FormsModule,
    InputSwitchModule,
    TooltipModule,
    DialogModule,
    AutoCompleteModule,
    ToastModule,
    ConfirmDialogModule,
    InputMaskModule,
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: "./user-management.component.html",
  styleUrl: "./user-management.component.scss",
})
export class UserManagementComponent implements OnInit {
  userForm!: FormGroup;
  usersList: User[] = [];
  isUserDialogVisible = false;
  userDialogMode: "create" | "edit" = "create";
  isSearchInputVisible = false;
  tableColumns: Column[] = [];
  _selectedTableColoumns: Column[] = [];
  items: User[] | undefined;
  selectedUser: User = {
    email: "",
    firstName: "",
    isActive: false,
    lastName: "",
    phone: "",
    lastLoggedIn: "",
  };
  userSuggestions: User[] = [];

  get selectedTableColumns(): Column[] {
    return this._selectedTableColoumns;
  }

  set selectedTableColumns(val: Column[]) {
    //restore original order
    this._selectedTableColoumns = this.tableColumns.filter((col) =>
      val.includes(col)
    );
  }

  constructor(
    private readonly confirmationService: ConfirmationService,
    private readonly messageService: MessageService,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.usersList = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@gmail.com",
        phone: "1234567899",
        isActive: true,
        lastLoggedIn: "2021-09-01 12:00:00",
      },
      {
        firstName: "Jane",
        lastName: "Doe",
        email: "jane.doe@gmail.com",
        phone: "1234567899",
        isActive: true,
        lastLoggedIn: "2021-09-01 12:00:00",
      },
      {
        firstName: "John",
        lastName: "Smith",
        email: "john.smith@gmail.com",
        phone: "1234567899",
        isActive: true,
        lastLoggedIn: "2021-09-01 12:00:00",
      },
    ];

    this.tableColumns = [
      {
        header: "First Name",
        field: "firstName",
      },
      {
        header: "Last Name",
        field: "lastName",
      },
      {
        header: "Email",
        field: "email",
      },
      {
        header: "Phone",
        field: "phone",
      },
      {
        header: "Last Logged In",
        field: "lastLoggedIn",
      },
    ];
    this._selectedTableColoumns = this.tableColumns;

    this.buildForm();
  }

  buildForm() {
    this.userForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(2)]],
      lastName: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required]],
    });
  }

  // Helper to easily access form controls in the template
  get formControls() {
    return this.userForm.controls;
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.messageService.add({
        severity: "success",
        summary: "Success",
        detail:
          this.userDialogMode === "create"
            ? "Invitation has been sent to the user"
            : "User has been updated",
      });

      this.toggleUserDialog("create");
    }
  }

  onCancel() {
    this.toggleUserDialog("create");
  }

  searchUsers(event: AutoCompleteCompleteEvent) {
    this.userSuggestions = this.usersList.filter((user) =>
      user.firstName.toLowerCase().includes(event.query.toLowerCase())
    );
  }

  getOptionLabel() {
    return (option: User) => option.email;
  }

  onLazyLoad(event: TableLazyLoadEvent) {
    if (event && typeof event.forceUpdate === "function") {
      event.forceUpdate();
    }
  }

  toggleUserDialog(mode: "create" | "edit") {
    this.userDialogMode = mode;
    this.isUserDialogVisible = !this.isUserDialogVisible;

    if (this.userDialogMode === "create") {
      this.userForm.reset();
    }

    if (this.userDialogMode === "edit") {
      this.userForm.patchValue({
        firstName: this.selectedUser.firstName,
        lastName: this.selectedUser.lastName,
        email: this.selectedUser.email,
        phone: this.selectedUser.phone,
      });

      this.userForm.markAllAsTouched();
    }
  }

  toggleSearchInput() {
    this.isSearchInputVisible = !this.isSearchInputVisible;
  }

  onVisibleChange(event: boolean) {
    if (!event) {
      this.selectedUser = {
        email: "",
        firstName: "",
        isActive: false,
        lastName: "",
        phone: "",
        lastLoggedIn: "",
      };
    }

    this.isUserDialogVisible = event;
  }

  onConfirmResetPassword(event: MouseEvent) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: "Are you sure that you want to proceed?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptIcon: "none",
      rejectIcon: "none",
      rejectButtonStyleClass: "p-button-text",
      accept: () => {
        this.messageService.add({
          severity: "info",
          summary: "Confirmed",
          detail: "A link to reset password has been sent to the user",
        });
      },
      reject: () => {
        this.messageService.add({
          severity: "error",
          summary: "Rejected",
          detail: "You have rejected the action",
        });
      },
    });
  }
}
