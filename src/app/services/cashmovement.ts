import { Injectable } from '@angular/core';
    
@Injectable()
export class cashmovementlistservice {
    getCashMovementListData() {
        return [
            {
                id: '1',
                recipientname:'Exotic Cars',
                sendername:'John and Barnes',
                date: 'January 06, 2024',
                status: 'Pending',
                bankname: 'TD Bank',
                transfertype: 'Bank Wire',
                accnumber: '15478964-445211',
                routingnumber: 597348009,
                transferamount: 23845,
            },
            {
                id: '2',
                recipientname:'Columbia University',
                sendername:'John and Barnes',
                date: 'August 10, 2023',
                status: 'Completed',
                bankname: 'TD Bank',
                transfertype: 'Bank Wire',
                accnumber: '15478964-445211',
                routingnumber: 597348009,
                transferamount: 26796,
            },
            {
                id: '3',
                recipientname:'Faraway Yachts',
                sendername:'John and Barnes',
                date: 'June 06, 2023',
                status: 'Completed',
                bankname: 'Bank of America',
                transfertype: 'Bank Wire',
                accnumber: '47896654-5541',
                routingnumber: 834965872,
                transferamount: 250000,
            },
            {
                id: '4',
                recipientname:'Columbia University',
                sendername:'John and Barnes',
                date: 'January 05, 2023',
                status: 'Completed',
                bankname: 'TD Bank',
                transfertype: 'Bank Wire',
                accnumber: '15478964-445211',
                routingnumber: 597348009,
                transferamount: 23822,
            },
        ];
    }

    getCashMovementListMini() {
        return Promise.resolve(this.getCashMovementListData().slice(0, 10));
    }

    getCashMovementListSmall() {
        return Promise.resolve(this.getCashMovementListData().slice(0, 10));
    }

    getCashMovementList() {
        return Promise.resolve(this.getCashMovementListData());
    }

};