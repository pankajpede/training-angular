import { Injectable } from '@angular/core';
    
@Injectable()
export class LiquidityRatesService {
    getLiquidityRatesData() {
        return [
            {
                id: '1',
                liqidityname: 'Effective Fund Rate',
                rate: '5.31',
                status: 'up',
            },
            {
                id: '2',
                liqidityname: 'SOFR',
                rate: '5.31',
                status: 'down',
            },
            {
                id: '3',
                liqidityname: '30 - Day Average SOFR',
                rate: '5.31',
                status: 'up',
            },
            {
                id: '4',
                liqidityname: '90 - Day Average SOFR',
                rate: '5.31',
                status: 'up',
            },
            {
                id: '5',
                liqidityname: '180 - Day Average SOFR',
                rate: '5.31',
                status: 'up',
            },
        ];
    }

    getLiquidityRatesMini() {
        return Promise.resolve(this.getLiquidityRatesData().slice(0, 10));
    }

    getLiquidityRatesSmall() {
        return Promise.resolve(this.getLiquidityRatesData().slice(0, 10));
    }

    getLiquidityRates() {
        return Promise.resolve(this.getLiquidityRatesData());
    }

};