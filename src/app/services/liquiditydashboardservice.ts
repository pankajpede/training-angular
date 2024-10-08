import { Injectable } from '@angular/core';
    
@Injectable()
export class LiquidityDashboardService {
    getProductsData() {
        return [
            {
                id: '1',
                institutionImg:'./assets/images/institute/institute1.svg',
                institution: 'Bank Centeral Asia',
                hysarate: '4.35',
                hysalimit: '4.5',
                sblrate: 'Tiered',
                hysa: 'Yes',
                sbl: 'Yes',
                CDs: 'NA',
                brandedcc: 'Yes',
                martgage: 'NA',
                preferred:true
            },
            {
                id: '2',
                institutionImg:'./assets/images/institute/institute2.svg',
                institution: 'Bank of America',
                hysarate: '4.69',
                hysalimit: '5.5',
                sblrate: 'N/A',
                hysa: 'NA',
                sbl: 'NA',
                CDs: 'Yes',
                brandedcc: 'Yes',
                martgage: 'NA',
                preferred:false
            },
            {
                id: '3',
                institutionImg:'./assets/images/institute/institute3.svg',
                institution: 'United Stated National Bank',
                hysarate: '4.18',
                hysalimit: '4.26',
                sblrate: 'Tiered',
                hysa: 'Yes',
                sbl: 'Yes',
                CDs: 'NA',
                brandedcc: 'Yes',
                martgage: 'Yes',
                preferred:false
            },
            {
                id: '4',
                institutionImg:'./assets/images/institute/institute4.svg',
                institution: 'Samenwerkende Nederlandse Spaarbanken',
                hysarate: '4.69',
                hysalimit: '5.5',
                sblrate: 'N/A',
                hysa: 'Yes',
                sbl: 'NA',
                CDs: 'Yes',
                brandedcc: 'NA',
                martgage: 'Yes',
                preferred:false
            },
            {
                id: '5',
                institutionImg:'./assets/images/institute/institute5.svg',
                institution: 'Trend Financial Banking',
                hysarate: '4.69',
                hysalimit: '5.5',
                sblrate: 'N/A',
                hysa: 'NA',
                sbl: 'Yes',
                CDs: 'NA',
                brandedcc: 'NA',
                martgage: 'Yes',
                preferred:false
            },
            {
                id: '6',
                institutionImg:'./assets/images/institute/institute6.png',
                institution: 'Toronto-Dominion Bank',
                hysarate: '4.69',
                hysalimit: '5.5',
                sblrate: 'Tiered',
                hysa: 'Yes',
                sbl: 'NA',
                CDs: 'NA',
                brandedcc: 'Yes',
                martgage: 'NA',
                preferred:true
            },
            {
                id: '7',
                institutionImg:'./assets/images/institute/institute7.png',
                institution: 'Citizens Financial Group, Inc.',
                hysarate: '4.69',
                hysalimit: '5.5',
                sblrate: 'Tiered',
                hysa: 'Yes',
                sbl: 'NA',
                CDs: 'NA',
                brandedcc: 'NA',
                martgage: 'Yes',
                preferred:true
            },
            {
                id: '8',
                institutionImg:'./assets/images/institute/institute8.png',
                institution: 'Airnet Cable & Datacom Private Limited',
                hysarate: '4.69',
                hysalimit: '5.5',
                sblrate: 'N/A',
                hysa: 'Yes',
                sbl: 'Yes',
                CDs: 'NA',
                brandedcc: 'NA',
                martgage: 'NA',
                preferred:true
            },
            {
                id: '9',
                institutionImg:'./assets/images/institute/institute9.png',
                institution: 'Open Systems Interconnection',
                hysarate: '4.69',
                hysalimit: '5.5',
                sblrate: 'Tiered',
                hysa: 'Yes',
                sbl: 'NA',
                CDs: 'Yes',
                brandedcc: 'NA',
                martgage: 'Yes',
                preferred:true
            },
            {
                id: '10',
                institutionImg:'./assets/images/institute/institute10.png',
                institution: 'Nine Entertainment Co.',
                hysarate: '4.69',
                hysalimit: '5.5',
                sblrate: 'N/A',
                hysa: 'NA',
                sbl: 'Yes',
                CDs: 'NA',
                brandedcc: 'Yes',
                martgage: 'NA',
                preferred:true
            }
        ];
    }

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    }

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    }

    getProducts() {
        return Promise.resolve(this.getProductsData());
    }

};