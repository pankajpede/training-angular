import { Injectable } from '@angular/core';
    
@Injectable()
export class transactiondetailsservice {
    getTransactionDetailsData() {
        return [
            {
                id: '1',
                date:'February 16, 2023',
                securityid: '1736438984',
                activitytype: 'FDIC Cash Deposit',
                netammount: 592000,
                accbalance: 592000,
            },
            {
                id: '2',
                date:'February 28, 2023',
                securityid: '0198485580',
                activitytype: 'Interest Payment',
                netammount: 1051,
                accbalance: 593051,
            },
            {
                id: '3',
                date:'February 28, 2023',
                securityid: '8479837592',
                activitytype: 'Interest Payment',
                netammount: 2719.91,
                accbalance: 597770.91,
            },
            {
                id: '4',
                date:'April 28, 2023',
                securityid: '0193827346',
                activitytype: 'Interest Payment',
                netammount: 2467.96,
                accbalance: 598238.87,
            },
            {
                id: '5',
                date:'May 18, 2023',
                securityid: '3748194736',
                activitytype: 'FDIC Cash Deposit',
                netammount: 50000,
                accbalance: 648238.87,
            },
            {
                id: '6',
                date:'May 31, 2023',
                securityid: '9381627381',
                activitytype: 'Interest Payment',
                netammount: 3016.88,
                accbalance: 651288.76,
            },
            {
                id: '7',
                date:'June 30, 2023',
                securityid: '9829301973',
                activitytype: 'Interest Payment',
                netammount: 2890.50,
                accbalance: 654146.26,
            },
            {
                id: '8',
                date:'July 31, 2023',
                securityid: '6471829182',
                activitytype: 'Interest Payment',
                netammount: 3000.11,
                accbalance: 657146.37,
            },
            {
                id: '9',
                date:'August 31, 2023',
                securityid: '3748193846',
                activitytype: 'Interest Payment',
                netammount: 2573.82,
                accbalance: 659720.59,
            },
            {
                id: '10',
                date:'September 31, 2023',
                securityid: '1839162741',
                activitytype: 'Interest Payment',
                netammount: 2583.91,
                accbalance: 662304.50,
            },
            {
                id: '11',
                date:'October 31, 2023',
                securityid: '2718912748',
                activitytype: 'Interest Payment',
                netammount: 2594.03,
                accbalance: 664898.53,
            },
            {
                id: '12',
                date:'November 30, 2023',
                securityid: '9387162839',
                activitytype: 'Interest Payment',
                netammount: 2604.19,
                accbalance: 664898.53,
            },
            {
                id: '13',
                date:'December 31, 2023',
                securityid: '3817912034',
                activitytype: 'Interest Payment',
                netammount: 2614.39,
                accbalance: 667502.71,
            },
        ];
    }

    getTransactionDetailsMini() {
        return Promise.resolve(this.getTransactionDetailsData().slice(0, 10));
    }

    getTransactionDetailsSmall() {
        return Promise.resolve(this.getTransactionDetailsData().slice(0, 10));
    }

    getTransactionDetails() {
        return Promise.resolve(this.getTransactionDetailsData());
    }

};