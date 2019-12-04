import { Component } from '@angular/core';
import { SearchService } from 'src/providers/search';
import { ReportPage } from '../report/report.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public strings = [];
  public retrieveSearchFood = [];
  report = ReportPage;
  constructor(private searchService: SearchService) {
    this.strings = new Array<string>();
  }

  onInputFood(e){
    if(e.length < 3){
      console.log('Indique al menos 3 caracteres para empezar la busqueda');
    } else {
      this.searchFood(e);
    }
  }

  searchFood(e){
    this.searchService.postSearchFood(e);
    //get data from localStorage
    let food = JSON.parse(localStorage.getItem('foods'));
    if(food.foods){
      this.retrieveSearchFood = food.foods;
      console.log(this.retrieveSearchFood);
    } 
  }

}
