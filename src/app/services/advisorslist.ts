import { Injectable } from '@angular/core';
    
@Injectable()
export class AdvisorsListService {
    getAdvisorsListData() {
        return [
            {
                id: '1',
                advisorname:'Mr. Brett Watson',
                share: 60,
            },
            {
                id: '2',
                advisorname:'Mr. John Barnes',
                share: 40,
            },
        ];
    }

    getAdvisorsListMini() {
        return Promise.resolve(this.getAdvisorsListData().slice(0, 10));
    }

    getAdvisorsListSmall() {
        return Promise.resolve(this.getAdvisorsListData().slice(0, 10));
    }

    getAdvisorsList() {
        return Promise.resolve(this.getAdvisorsListData());
    }

};