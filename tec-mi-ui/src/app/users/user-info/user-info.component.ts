import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/client.model';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private sharedServicee:SharedService){}

  user!: Client;

  ngOnInit(): void {
    this.user = this.sharedServicee.user;
  }

  openModal(){}

}
