import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ProgressBarComponent } from "../../tools/progress-bar/progress-bar.component";
import { Util } from "src/default/functions/util";

@Component({
  selector: "app-contrato",
  templateUrl: "./contrato.page.html",
  styleUrls: ["./contrato.page.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ProgressBarComponent],
})
export class ContratoPage implements OnInit {
  accept: boolean = false;
  constructor(private util: Util) {}

  ngOnInit() {}

  acceptTerm() {
    this.accept = !this.accept;
  }

  next() {
    if (this.accept) {
      this.util.goTo("exito", {});
    }
  }
}
