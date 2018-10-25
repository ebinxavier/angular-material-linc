import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ownership-management',
  templateUrl: './ownership-management.component.html',
  styleUrls: ['./ownership-management.component.css']
})
export class OwnershipManagementComponent implements OnInit {
  public favoriteSeason = ["addr1","other"];
  constructor() { }

  ngOnInit() {
  }
  debug(){
    console.log(this.favoriteSeason);
    debugger;
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

}
