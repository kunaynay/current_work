import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { Margin } from "src/app/models/Margin";

@Component({
  selector: "app-view-component",
  templateUrl: "./view-component.component.html",
  styleUrls: ["./view-component.component.css"]
})
export class ViewComponentComponent implements OnInit {
  @Input()
  margins: Margin;
  padding_styles: {
    "padding-left": string;
    "padding-right": string;
    "padding-top": string;
    "padding-bottom": string;
  };

  font_size: {
    "font-size": "10px";
  };

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.marginSet();
  }

  marginSet() {
    this.padding_styles = {
      "padding-left": `${this.margins.left * 5}%`,
      "padding-right": `${this.margins.right * 5}%`,
      "padding-top": `${this.margins.top * 5}%`,
      "padding-bottom": `${this.margins.bottom * 5}%`
    };

    console.log(this.padding_styles);
  }
}
