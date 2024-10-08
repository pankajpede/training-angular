import { Injectable } from '@angular/core';
    
@Injectable()
export class BussinessAccountListService {
    getBussinessAccountListData() {
        return [
            {
                id: '1',
                bussinessname:'Columbia University',
                accholdername: 'Mr. John Barnes and Mrs. Mary P. Barnes',
                accnumber: 'FI - THR - 735234',
                bankname: 'Bank of America',
                routingnumber: '597348009',
            },
            {
                id: '1',
                bussinessname:'Exotic Cars',
                accholdername: 'Mr. Charles Smith',
                accnumber: 'FI - TRS - 127373',
                bankname: 'TD Bank',
                routingnumber: '173713943',
            },
        ];
    }

    getBussinessAccountListMini() {
        return Promise.resolve(this.getBussinessAccountListData().slice(0, 10));
    }

    getBussinessAccountListSmall() {
        return Promise.resolve(this.getBussinessAccountListData().slice(0, 10));
    }

    getBussinessAccountList() {
        return Promise.resolve(this.getBussinessAccountListData());
    }

};