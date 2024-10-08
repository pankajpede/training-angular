import { Injectable } from '@angular/core';
    
@Injectable()
export class AccountDetailsListService {
    getAccountDetailsData() {
        return [
            {
                id: '1',
                accname:'John and Mary Barnes HYSA',
                clientname: 'Mr. John Barnes and Mrs. Mary P. Barnes',
                accnumber: 'FI - THR - 735234',
                acctype: 'HYSA',
                accstatus: 'Addition Pending',
                accbalance: 657502.71,
            },
        ];
    }

    getAccountDetailsMini() {
        return Promise.resolve(this.getAccountDetailsData().slice(0, 10));
    }

    getAccountDetailsSmall() {
        return Promise.resolve(this.getAccountDetailsData().slice(0, 10));
    }

    getAccountDetails() {
        return Promise.resolve(this.getAccountDetailsData());
    }

};