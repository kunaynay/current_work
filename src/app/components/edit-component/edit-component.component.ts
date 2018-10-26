import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Margin } from "../../models/Margin";

@Component({
  selector: "app-edit-component",
  templateUrl: "./edit-component.component.html",
  styleUrls: ["./edit-component.component.css"]
})
export class EditComponentComponent implements OnInit {
  @Output()
  new_margin: EventEmitter<Margin> = new EventEmitter();

  margin: Margin;

  constructor() {}

  ngOnInit() {
    this.margin = {
      left: null,
      right: null,
      top: null,
      bottom: null
    };
  }

  sendOutput() {
    this.new_margin.emit(this.margin);
  }
}
