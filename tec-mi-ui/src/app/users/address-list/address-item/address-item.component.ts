import { Component, Input } from '@angular/core';
import { Address } from 'src/app/shared/address.model';

@Component({
  selector: 'app-address-item',
  templateUrl: './address-item.component.html',
  styleUrls: ['./address-item.component.css']
})
export class AddressItemComponent {
  @Input() address!:Address;

}
