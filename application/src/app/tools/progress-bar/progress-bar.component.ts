import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.scss"],
  standalone: true,
})
export class ProgressBarComponent implements OnInit {
  @Input() title: string = "";
  @Input() progress: string = "";
  @Input() coinkLogo: string = "";
  @Input() text: string = "";
  @Input() subtext: string = "";
  @Input() subtitle: string = "";
  @Input() pSize: string = "font-size:16px";

  constructor() {}

  ngOnInit() {}
}
