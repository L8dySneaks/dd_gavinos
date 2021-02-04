import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-two',
  templateUrl: './assignment-two.component.html',
  styleUrls: ['./assignment-two.component.scss']
})
export class AssignmentTwoComponent implements OnInit {

  public username = '';
  public allowAddUsername = false;
  constructor() { }

  ngOnInit(){

  }

  public onReset(event: Event) {
    this.username = '';
  }
}
