import { Injectable } from '@angular/core';
    
@Injectable()
export class depositaccountService {
    getDepositAccountData() {
        return [
            {
                id: '1',
                accountname:'Smith Individual',
                clientname: 'Mr. Charles',
                secondaryclientname: 'Mr. A. Smith & Ms. Beth Smith',
                accountnumber: 'FI - AP - 285927',
                accounttype: 'HYSA',
                addvisordetails: 'Yes',
                accountstatus: 'Open',
                accountbalance: '$869,801.42',
                isloading: true,
                accbalanceasof: '',
                isSecondaryClientExceed: false,
            },
            {
                id: '2',
                accountname:'John and Barnes',
                clientname: 'Mr. John Barnes ',
                secondaryclientname: 'Mrs. Mary P. Barnes',
                accountnumber: 'FI - THR - 735234',
                accounttype: 'HYSA',
                addvisordetails:'No',
                accountstatus: 'Open',
                accountbalance: '$667,502.71',
                isloading: false,
                accbalanceasof: 'As of June 2, 2024',
                isSecondaryClientExceed: true,
            },
            {
                id: '3',
                accountname:'Sam Sharaf',
                clientname: 'Mr. Samuel P. Sharaf',
                secondaryclientname: '',
                accountnumber: 'FI - PER - 652248',
                accounttype: 'HYSA',
                addvisordetails:'Yes',
                accountstatus: 'Open',
                accountbalance: '$248,879.24',
                isloading: false,
                accbalanceasof: '',
                isSecondaryClientExceed: false,
            },
            {
                id: '4',
                accountname:'Harrisons',
                clientname: 'Mr. Dean Harrisons',
                secondaryclientname: 'Mrs. Angela Harisons',
                accountnumber: 'FI - PER - 652248',
                accounttype: 'HYSA',
                addvisordetails: 'No',
                accountstatus: 'Awaiting Funding',
                accountbalance: '$0',
                isloading: false,
                accbalanceasof: '',
                isSecondaryClientExceed: false,
            },
            {
                id: '5',
                accountname:'Paulley Shore',
                clientname: 'Mrs. Paulley Shore',
                secondaryclientname: '',
                accountnumber: 'FI - THR - 652248',
                accounttype: 'HYSA',
                addvisordetails:'No',
                accountstatus: 'Open',
                accountbalance: '$745,148.57',
                isloading: false,
                accbalanceasof: 'As of June 1, 2024',
                isSecondaryClientExceed: false,
            },
            {
                id: '6',
                accountname:'Smith Individual',
                clientname: 'Mr. Charles',
                secondaryclientname: 'A. Smith & Ms. Beth Smith',
                accountnumber: 'FI - AP - 285927',
                accounttype: 'HYSA',
                addvisordetails:'Yes',
                accountstatus: 'Open',
                accountbalance: '$869,801.42',
                isloading: false,
                accbalanceasof: '',
                isSecondaryClientExceed: false,
            },
            {
                id: '7',
                accountname:'John and Barnes',
                clientname: 'Mr. Samuel P. Sharaf',
                secondaryclientname: '',
                accountnumber: 'FI - THR - 735234',
                accounttype: 'HYSA',
                addvisordetails:'Yes',
                accountstatus: 'Open',
                accountbalance: '$667,502.71',
                isloading: false,
                accbalanceasof: '',
                isSecondaryClientExceed: false,
            },
            {
                id: '8',
                accountname:'Sam Sharaf',
                clientname: 'Mr. Dean Harrisons',
                secondaryclientname: 'Mrs. Angela Harisons',
                accountnumber: 'FI - PER - 652248',
                accounttype: 'HYSA',
                addvisordetails: 'Yes',
                accountstatus: 'Open',
                accountbalance: '$248,879.24',
                isloading: false,
                accbalanceasof: '',
                isSecondaryClientExceed: false,
            },
            {
                id: '9',
                accountname:'Harrisons',
                clientname: 'Mr. Dean Harrisons',
                secondaryclientname: 'Mrs. Angela Harisons',
                accountnumber: 'FI - AP - 285927',
                accounttype: 'HYSA',
                addvisordetails:'No',
                accountstatus: 'Awaiting Funding',
                accountbalance: '$0',
                isloading: true,
                accbalanceasof: '',
                isSecondaryClientExceed: false,
            },
            {
                id: '10',
                accountname:'Paulley Shore',
                clientname: 'Mrs. Paulley Shore',
                secondaryclientname: '',
                accountnumber: 'FI - THR - 652248',
                accounttype: 'HYSA',
                addvisordetails:'Yes',
                accountstatus: 'Open',
                accountbalance: '$745,148.57',
                isloading: false,
                accbalanceasof: '',
                isSecondaryClientExceed: false,
            },
        ];
    }

    getDepositAccountMini() {
        return Promise.resolve(this.getDepositAccountData().slice(0, 10));
    }

    getDepositAccountSmall() {
        return Promise.resolve(this.getDepositAccountData().slice(0, 4));
    }

    getDepositAccount() {
        return Promise.resolve(this.getDepositAccountData());
    }

};