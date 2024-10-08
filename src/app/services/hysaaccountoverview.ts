import { Injectable } from '@angular/core';

@Injectable()
export class HysaAccountOverviewService {
    getHysaAccountOverviewData() {
        return [
            {
                id: '1',
                clientname: 'Mr. John Barnes',
                banklogo: 'Bank1',
                accountbalance:185000,
                nameinitial: 'J',
                interestrate: 4.25,
            },
            {
                id: '2',
                clientname: 'Mr. Charles Smith',
                banklogo: 'Bank1',
                accountbalance:250000,
                nameinitial: 'C',
                interestrate: 5.15,
            },
            {
                id: '3',
                clientname: ' Mrs. Beth Smith',
                banklogo: 'Bank1',
                accountbalance:150000,
                nameinitial: 'B',
                interestrate: 3.14,
            },
            {
                id: '4',
                clientname: ' Mrs. Mary P. Barens',
                banklogo: 'Bank1',
                accountbalance:75000,
                nameinitial: 'B',
                interestrate: 4.75,
            },
            {
                id: '5',
                clientname: ' Mrs. Mary P. Barens',
                banklogo: 'Bank1',
                accountbalance:200000,
                nameinitial: 'B',
                interestrate: 4.25,
            },
            {
                id: '6',
                clientname: ' Mr. Martin J. Davis',
                banklogo: 'Bank1',
                accountbalance:75000,
                nameinitial: 'B',
                interestrate: 5,
            },
            {
                id: '7',
                clientname: ' Mr. Carey H. Hudson',
                banklogo: 'Bank1',
                accountbalance:150000,
                nameinitial: 'B',
                interestrate: 3.25,
            },
        ];
    }

    getHysaAccountOverviewMini() {
        return Promise.resolve(this.getHysaAccountOverviewData().slice(0, 10));
    }

    getHysaAccountOverviewSmall() {
        return Promise.resolve(this.getHysaAccountOverviewData().slice(0, 10));
    }

    getHysaAccountOverview() {
        return Promise.resolve(this.getHysaAccountOverviewData());
    }

};