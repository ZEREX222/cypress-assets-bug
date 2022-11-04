import {Component} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {IncludeIconServiceService} from "../include-icon-service.service";

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent {

  title = 'cypress-assets-bug';

  constructor(includeIconServiceService: IncludeIconServiceService) {
    includeIconServiceService.init();
  }
}
