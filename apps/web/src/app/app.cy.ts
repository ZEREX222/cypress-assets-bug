import {mount} from "cypress/angular"
import {AppComponent} from "./app.component"
import {AppModule} from "./app.module";
import {Component} from "@angular/core";
import {MainComponentComponent} from "./main-component/main-component.component";


@Component({
  selector: 'app-wrapper',
  template: `
    <ng-content></ng-content>`,
})
export class WrapperComponent {
  constructor() {
  }
}

describe('AppComponent', () => {

  it('should load', () => {
    mount(`
    <app-wrapper>
      <app-main-component> </app-main-component>
    </app-wrapper>`, {imports: [AppModule], declarations: [WrapperComponent, MainComponentComponent],});
  })
})
