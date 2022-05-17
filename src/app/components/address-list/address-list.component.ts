import { Component } from '@angular/core';
import { addressTitle } from 'src/app/Constants';
import { AddressService } from 'src/app/services';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent {

  addresses: any;
  titles: string[] = addressTitle;

  constructor(private address: AddressService) { 
    this.get();
  }

  get(){
    this.address.getAddresses().subscribe(data => this.addresses = data);
  }

}
