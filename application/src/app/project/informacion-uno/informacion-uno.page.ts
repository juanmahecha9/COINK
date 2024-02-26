import { Component, Inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { IonIcon, IonicModule } from "@ionic/angular";

import { HttpClientModule } from "@angular/common/http";
import { CoinkService } from "src/app/shared/services/coink.service";
import { catchError, finalize } from "rxjs";
import { DocumentType } from "src/app/shared/models/document-type";
import { Util } from "src/default/functions/util";
import { ProgressBarComponent } from "../../tools/progress-bar/progress-bar.component";
import {
  IonInput,
  IonItem,
  IonSelect,
  IonContent,
  IonSelectOption,
} from "@ionic/angular/standalone";

@Component({
  selector: "app-informacion-uno",
  templateUrl: "./informacion-uno.page.html",
  styleUrls: ["./informacion-uno.page.scss"],
  standalone: true,
  imports: [
    IonInput,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressBarComponent,
    IonItem,
    IonSelect,
    IonContent,
    IonSelectOption,
  ],
})
export class InformacionUnoPage implements OnInit {
  formGroup!: FormGroup;

  documentTypes: DocumentType[] = [];
  genders: { description: string; notation: string }[] = [];

  showPassword: boolean = false;
  showPasswordConfirm: boolean = false;
  passwordIcon1: string = "/assets/icon/eye.svg";
  passwordIcon2: string = "/assets/icon/eye.svg";
  ispassword1: string = "password";
  ispassword2: string = "password";

  emailCheck: string = "";

  isPinError: boolean = false;
  isEmailError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    protected coinkService: CoinkService,
    private util: Util
  ) {
    this.loadDocumentType();

    this.genders = [
      { description: "Femenino", notation: "F" },
      { description: "Masculino", notation: "M" },
    ];

    this.formGroup = this.formBuilder.group({
      documentType: new FormControl("", [Validators.required]),
      documentNumber: new FormControl("", [Validators.required]),
      documentExpedition: new FormControl("", [Validators.required]),
      dornDate: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      confirmEmail: new FormControl("", [Validators.required]),
      pin: new FormControl("", [
        Validators.required,
        Validators.maxLength(4),
        Validators.minLength(4),
      ]),
      confirmPin: new FormControl("", [
        Validators.required,
        Validators.maxLength(4),
        Validators.minLength(4),
      ]),
    });
  }

  ngOnInit() {
    this.util.getFormChanges("confirmEmail", this.formGroup, (v: string) => {
      if (v == this.formGroup.get("email")?.value) {
        this.isEmailError = false;
      } else {
        this.isEmailError = true;
      }
    });

    this.util.getFormChanges("confirmPin", this.formGroup, (v: string) => {
      if (v.length == 4 && this.formGroup.get("pin")?.value.length == 4) {
        if (this.formGroup.get("pin")?.value != v) {
          this.isPinError = true;
        } else {
          this.isPinError = false;
        }
      }
    });
  }

  loadDocumentType() {
    this.coinkService
      .getDocumetTypes()
      .pipe(
        finalize(() => {}),
        catchError((err) => {
          console.log("Se ha presentado un error con la consulta del servicio");
          return [];
        })
      )
      .subscribe({
        next: (res: DocumentType[]) => {
          this.documentTypes = res;
        },
      });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      this.passwordIcon1 = "/assets/icon/eye-off.svg";
      this.ispassword1 = "number";
    }
    if (!this.showPassword) {
      this.passwordIcon1 = "/assets/icon/eye.svg";
      this.ispassword1 = "password";
    }
  }

  togglePasswordConfirmVisibility() {
    this.showPasswordConfirm = !this.showPasswordConfirm;
    if (this.showPasswordConfirm) {
      this.passwordIcon2 = "/assets/icon/eye-off.svg";
      this.ispassword2 = "number";
    }

    if (!this.showPasswordConfirm) {
      this.passwordIcon2 = "/assets/icon/eye.svg";
      this.ispassword2 = "password";
    }
  }

  next() {
    if (this.formGroup.valid && !this.isPinError) {
      this.util.goTo("contrato", {});
    }
  }
}
