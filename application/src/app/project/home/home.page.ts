import { Component } from "@angular/core";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/angular/standalone";
import { Util } from "src/default/functions/util";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor(private util: Util) {}

  next() {
    this.util.goTo("/ingreso", {});
  }
}
