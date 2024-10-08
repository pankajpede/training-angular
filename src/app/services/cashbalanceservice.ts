import { Injectable } from '@angular/core';
    
@Injectable()
export class cashbalanceService {
    getCashBalanceData() {
        return [
            {
                id: '1',
                bank:'Barclays - Lead Bank',
                cashbalance: 222500,
                currentapr: 4.59,
                estimatedannualincome: 10212.79
            },
            {
                id: '2',
                bank:'Thread Bank - Partner Bank',
                cashbalance: 222500,
                currentapr: 4.63,
                estimatedannualincome: 10301.79
            },
            {
                id: '3',
                bank:'DR Bank - Partner Bank',
                cashbalance: 222500,
                currentapr: 4.74,
                estimatedannualincome: 10546.54
            },
        ];
    }

    getCashBalanceMini() {
        return Promise.resolve(this.getCashBalanceData().slice(0, 10));
    }

    getCashBalanceSmall() {
        return Promise.resolve(this.getCashBalanceData().slice(0, 10));
    }

    getCashBalance() {
        return Promise.resolve(this.getCashBalanceData());
    }

};