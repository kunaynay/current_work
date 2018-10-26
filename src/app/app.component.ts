import { Component } from "@angular/core";
import { Margin } from "../app/models/Margin";
// import { Observable, of } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "prescription-template";

  margins: Margin;

  ngOnInit() {
    this.margins = {
      left: null,
      right: null,
      top: null,
      bottom: null
    };
  }

  onMarginChange(margin: Margin) {
    console.log(this.margins.left);
    return (this.margins = margin);
  }
}
