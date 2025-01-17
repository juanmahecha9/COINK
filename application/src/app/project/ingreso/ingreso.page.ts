import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { Util } from "src/default/functions/util";

@Component({
  selector: "app-ingreso",
  templateUrl: "./ingreso.page.html",
  styleUrls: ["./ingreso.page.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class IngresoPage implements OnInit {
  constructor(private util: Util) {}

  ngOnInit() {}

  next() {
    this.util.goTo("/numero-celular", {});
  }
}
