import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import {SelectItem} from 'primeng/primeng';
var $ = require('jquery');
var _= require('underscore');
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent {
  @ViewChild('table') table:ElementRef;
  order: string = 'name';
  reverse: boolean = false;
  collection: any[] = [
    {
      name: 'John',
      number: '555-1212',
      age: 10
    },{
      name: 'Mary',
      number: '555-9876',
      age: 19
    },{
      name: 'Mike',
      number: '555-4321',
      age: 21
    },{
      name: 'Julie',
      number: '555-8765',
      age: 29
    },{
      name: 'Adam',
      number: '555-5678',
      age: 35
    },
  ];

  cities: SelectItem[];

    selectedCities: string[];

    constructor() {
        this.cities = [];
        this.cities.push({label: 'Name', value: 'name'});
        this.cities.push({label: 'Number', value: 'number'});
        this.cities.push({label: 'Age', value: 'age'});
    }

    // itemsMatched(){
    //   let match = _.contains(this.collection, this.selectedCities)
    //   return match;
    // }

   

    showHideTableCols(event){
      debugger;
      var collec:any[];
      let selected = event.target.parentElement.parentElement.innerText.toLowerCase().trim();
      var elem = this.table.nativeElement;
      collec = $(elem)[0].children[0].children[0].cells;
      var elementToBeToggled = _.contains(collec,selected);
      alert("elementToBeToggled"+elementToBeToggled);
     // if(this.selectedCities.length==1){
        let toggle = _.contains(this.collection, selected);
       alert("checkbox selected"+ toggle + elem);
     // }
      // if(this.selectedCities.length>1){
      //   let toggle = this.selectedCities.filter(this.itemsMatched);
      //     if(toggle){

      //     }
      // }
    }

    ngOnChange(){
      debugger;
      var selectedItem = this.selectedCities.filter;
      console.log("selctedtem"+selectedItem);
    }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

}
