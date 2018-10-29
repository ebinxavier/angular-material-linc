import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-finalize',
  templateUrl: './finalize.component.html',
  styleUrls: ['./finalize.component.css']
})
export class FinalizeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  public firstNameFormControl= new FormControl('', []);
  public textArea1FormControl= new FormControl('', [
  
  ]);
  public textArea2FormControl= new FormControl('', [
    Validators.required
  ]);

  public dropdown1FormControl= new FormControl('', [
  
  ]);
  public dropdown2FormControl= new FormControl('', [
    Validators.required
  ]);

  public favoriteSeasonRadio= ["addr1","other"];

  selectedCard = 'a';
  selectedCardBig = 'a';


}
