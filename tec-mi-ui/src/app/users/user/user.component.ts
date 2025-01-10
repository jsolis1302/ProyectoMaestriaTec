import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/client.model';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:Client = {
    name: '',
    email: '',
    phone: 0,
    clientType: '',
    clientId:0
  };

  constructor(private sharedService:SharedService){}

  ngOnInit(): void {
    this.user = this.sharedService.user;
  }

}
