import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/shared/address.model';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  addresses:Address[]=[];

  constructor(private sharedService: SharedService){}

  ngOnInit(): void {
    this.addresses = this.sharedService.addresses;
  }

}
