import { Component } from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {Subscription} from 'rxjs';
import {Recipe} from '../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  httpSub: Subscription;

  constructor(private dataStorageService: DataStorageService) {
  }

  onSaveData(){
    this.dataStorageService.storeRecipes();
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
  }
}

