import { Component, OnInit } from '@angular/core';
import {Animal } from './animal';
import { AnimalService } from './animal.service'

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

   animals : any;


  constructor(private animalService: AnimalService) { 
    console.log("constructor")
    this.getAnimals()
  }

  ngOnInit() {
    
  }

  getAnimals(){
    this.animalService.getAnimals().subscribe(
      data =>  {this.animals = data, console.log(data.length), console.log(this.animals[0].name)},
      err => console.error(err),
      ()=>console.log('animals loaded')
    ).closed

    if(this.animals != null){
      console.log("length " + this.animals.length)
    }else{
      console.log("animals is null")

    }
  }

  

}
