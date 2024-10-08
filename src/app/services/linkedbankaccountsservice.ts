import { Injectable } from '@angular/core';
    
@Injectable()
export class LinkedAccountsListService {
    getLinkedAccountListData() {
        return [
            {
                id: '1',
                accountname:'Mr. Smith Individual',
                accnameholdertype:'Primary',
                bankname:'Bank of America',
                acctype: 'Savings',
                accnumber: '874664445-8885',
                accountbalance: '$869,801.42',
                isloading: true,
                accbalanceasof: '',
            },
            {
                id: '2',
                accountname:'Mr. John Barnes ',
                accnameholdertype:'Secondary',
                bankname:'TD Bank',
                acctype: 'Savings',
                accnumber: '7863827573',
                accountbalance: '$667,502.71',
                isloading: false,
                accbalanceasof: 'As of June 2, 2024',
            },
        ];
    }

    getLinkedAccountListMini() {
        return Promise.resolve(this.getLinkedAccountListData().slice(0, 10));
    }

    getLinkedAccountListSmall() {
        return Promise.resolve(this.getLinkedAccountListData().slice(0, 10));
    }

    getLinkedAccountList() {
        return Promise.resolve(this.getLinkedAccountListData());
    }

};