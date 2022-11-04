import {Injectable} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class IncludeIconServiceService {

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {

  }

  public init() {
    this.iconRegistry.addSvgIcon(
      'banana',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/banana.svg')
    );
  }
}
