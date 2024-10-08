import { Injectable } from '@angular/core';
    
@Injectable()
export class addresslistService {
    getAddressData() {
        return [
            {
                id: '1',
                addresstype: 'Residence',
                address1: '#805 Hilll Rapid, Port Santos, KY 70785',
                address2: '#301 Street Road, Lake SIde, KY 47236',
            },
            {
                id: '2',
                addresstype: 'Rented',
                address1: '#805 Hilll Rapid, Port Santos, KY 70785',
            },
        ];
    }

    getAddressMini() {
        return Promise.resolve(this.getAddressData().slice(0, 10));
    }

    getAddressSmall() {
        return Promise.resolve(this.getAddressData().slice(0, 10));
    }

    getAddress() {
        return Promise.resolve(this.getAddressData());
    }

};