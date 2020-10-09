import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  @Output() featureSelection = new EventEmitter<string>();

  onNavbarSelection(feature: string){
    this.featureSelection.emit(feature);
  }
}
