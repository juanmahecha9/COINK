import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { Util } from "src/default/functions/util";
import { ProgressBarComponent } from "src/app/tools/progress-bar/progress-bar.component";

@Component({
  selector: "app-numero-celular",
  templateUrl: "./numero-celular.page.html",
  styleUrls: ["./numero-celular.page.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ProgressBarComponent],
})
export class NumeroCelularPage implements OnInit {
  code: string = "";
  numberButtons: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  phoneRegex: any = /^(?!.*(.)\1{2})[2-9]{1}[0-9]{9}$/;

  phoneNumberError: boolean = false;

  constructor(private util: Util) {}

  ngOnInit() {}

  addDigit(digit: number) {
    if (this.code.length <= 9) {
      this.phoneNumberError = false;
      // Cambia el número según la longitud máxima de tu código
      this.code += digit;
    }
  }

  phoneFormat(telefono: string): string {
    this.phoneNumberError = false;
    // Insertar un espacio después de los primeros tres dígitos
    return telefono.replace(/^(\d{3})/, "$1 ");
  }

  deleteDigit() {
    if (this.code.length > 0) {
      this.code = this.code.slice(0, -1);
    }
  }

  next() {
    if (!this.phoneRegex.test(this.code)) {
      this.phoneNumberError = true;
      return;
    }
    this.util.goTo("informacion-uno", {});
  }
}
