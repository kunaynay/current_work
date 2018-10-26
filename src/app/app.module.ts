import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ViewComponentComponent } from "./components/view-component/view-component.component";
import { EditComponentComponent } from "./components/edit-component/edit-component.component";

@NgModule({
  declarations: [AppComponent, ViewComponentComponent, EditComponentComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
