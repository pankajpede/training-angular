import { Injectable } from '@angular/core';

@Injectable()
export class TransactionListService {
    getTransactionListData() {
        return [
            {
                id: '1',
                clientname: 'Mr. John Barnes',
                date:'01 Sep 2024',
                transactiontype:'Transfer',
                ammount: 5000,
                account: 'Saving',
                notes: '',
                accnumber: '874664445-8885',
            },
            {
                id: '2',
                clientname: 'Mrs. Beth Smith',
                date:'02 Sep 2024',
                transactiontype:'Investment',
                ammount: 1525,
                account: 'Checking',
                notes: '',
                accnumber: '7863827573',
            },
            {
                id: '3',
                clientname: 'Mrs. Mary P. Barens',
                date:'03 Sep 2024',
                transactiontype:'Investment',
                ammount: 1000,
                account: 'Investment',
                notes: '',
                accnumber: '874664445-8885',
            },
            {
                id: '4',
                clientname: 'Mr. John Barnes',
                date:'01 Sep 2024',
                transactiontype:'Transfer',
                ammount: 5000,
                account: 'Saving',
                notes: '',
                accnumber: '7863827573',
            },
            {
                id: '5',
                clientname: 'Mrs. Beth Smith',
                date:'02 Sep 2024',
                transactiontype:'Investment',
                ammount: 1525,
                account: 'Checking',
                notes: '',
                accnumber: '874664445-8885',
            },
            {
                id: '6',
                clientname: 'Mrs. Mary P. Barens',
                date:'03 Sep 2024',
                transactiontype:'Investment',
                ammount: 1000,
                account: 'Investment',
                notes: '',
                accnumber: '7863827573',
            },
            {
                id: '7',
                clientname: 'Mr. John Barnes',
                date:'01 Sep 2024',
                transactiontype:'Transfer',
                ammount: 5000,
                account: 'Saving',
                notes: '',
                accnumber: '874664445-8885',
            },
            {
                id: '8',
                clientname: 'Mrs. Beth Smith',
                date:'02 Sep 2024',
                transactiontype:'Investment',
                ammount: 1525,
                account: 'Checking',
                notes: '',
                accnumber: '7863827573',
            },
            {
                id: '9',
                clientname: 'Mrs. Mary P. Barens',
                date:'03 Sep 2024',
                transactiontype:'Investment',
                ammount: 1000,
                account: 'Investment',
                notes: '',
                accnumber: '874664445-8885',
            },
            {
                id: '10',
                clientname: 'Mr. John Barnes',
                date:'01 Sep 2024',
                transactiontype:'Transfer',
                ammount: 5000,
                account: 'Saving',
                notes: '',
                accnumber: '7863827573',
            },
            {
                id: '11',
                clientname: 'Mrs. Beth Smith',
                date:'02 Sep 2024',
                transactiontype:'Investment',
                ammount: 1525,
                account: 'Checking',
                notes: '',
                accnumber: '874664445-8885',
            },
            {
                id: '12',
                clientname: 'Mrs. Mary P. Barens',
                date:'03 Sep 2024',
                transactiontype:'Investment',
                ammount: 1000,
                account: 'Investment',
                notes: '',
                accnumber: '7863827573',
            },
        ];
    }

    getTransactionListMini() {
        return Promise.resolve(this.getTransactionListData().slice(0, 10));
    }

    getTransactionListSmall() {
        return Promise.resolve(this.getTransactionListData().slice(0, 10));
    }

    getTransactionList() {
        return Promise.resolve(this.getTransactionListData());
    }

};