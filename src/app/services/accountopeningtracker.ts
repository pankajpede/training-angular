import { Injectable } from '@angular/core';

@Injectable()
export class AccountOpeningTrackerListService {
    getAccountOpeningTrackerData() {
        return [
            {
                id: '1',
                clientname: 'Mr. John Barnes',
                email:'johnbarnes@gmail.com',
                status:'In progress',
                currentstage: 'Personal Details',
                progress: 1,
                timeelapsed: 19,
                delaystatus: 'yes',
                acctype:'Individual',
                step1:'completed',
                step2:'completed',
                step3:'pending',
                step4:'pending',
                step5:'pending',
            },
            {
                id: '2',
                clientname: 'Mr. Charles Smith',
                email:'cssmith@gmail.com',
                status:'failed',
                currentstage: 'Completed',
                progress: 2,
                timeelapsed: 15,
                delaystatus: 'yes',
                acctype:'Individual',
                step1:'completed',
                step2:'failed',
                step3:'pending',
                step4:'pending',
                step5:'pending',
            },
            {
                id: '3',
                clientname: 'Mrs. Beth Smith',
                email:'beth_smith@gmail.com',
                status:'failed',
                currentstage: 'Open Account',
                progress: 3,
                timeelapsed: 11,
                delaystatus: 'no',
                acctype:'Individual',
                step1:'completed',
                step2:'completed',
                step3:'completed',
                step4:'completed',
                step5:'failed',
            },
            {
                id: '4',
                clientname: 'Mr. John Barnes',
                email:'johnbarnes@gmail.com',
                status:'In progress',
                currentstage: 'Personal Details',
                progress: 2,
                timeelapsed: 3,
                delaystatus: 'no',
                acctype:'Individual',
                step1:'completed',
                step2:'completed',
                step3:'pending',
                step4:'pending',
                step5:'pending',
            },
            {
                id: '5',
                clientname: 'Mr. Charles Smith',
                email:'cssmith@gmail.com',
                status:'completed',
                currentstage: 'Completed',
                progress: 3,
                timeelapsed: 8,
                delaystatus: 'no',
                acctype:'Individual',
                step1:'completed',
                step2:'failed',
                step3:'pending',
                step4:'pending',
                step5:'pending',
            },
            // {
            //     id: '6',
            //     clientname: 'Mrs. Beth Smith',
            //     email:'beth_smith@gmail.com',
            //     status:'failed',
            //     currentstage: 'Open Account',
            //     progress: 4,
            //     timeelapsed: 11,
            // },
            // {
            //     id: '7',
            //     clientname: 'Mr. John Barnes',
            //     email:'johnbarnes@gmail.com',
            //     status:'In progress',
            //     currentstage: 'Personal Details',
            //     progress: 2,
            //     timeelapsed: 3,
            // },
            // {
            //     id: '8',
            //     clientname: 'Mr. Charles Smith',
            //     email:'cssmith@gmail.com',
            //     status:'completed',
            //     currentstage: 'Completed',
            //     progress: 5,
            //     timeelapsed: 8,
            // },
            // {
            //     id: '9',
            //     clientname: 'Mrs. Beth Smith',
            //     email:'beth_smith@gmail.com',
            //     status:'failed',
            //     currentstage: 'Open Account',
            //     progress: 4,
            //     timeelapsed: 11,
            // },
            // {
            //     id: '10',
            //     clientname: 'Mr. John Barnes',
            //     email:'johnbarnes@gmail.com',
            //     status:'In progress',
            //     currentstage: 'Personal Details',
            //     progress: 2,
            //     timeelapsed: 3,
            // },
        ];
    }

    getAccountOpeningTrackerMini() {
        return Promise.resolve(this.getAccountOpeningTrackerData().slice(0, 10));
    }

    getAccountOpeningTrackerSmall() {
        return Promise.resolve(this.getAccountOpeningTrackerData().slice(0, 10));
    }

    getAccountOpeningTracker() {
        return Promise.resolve(this.getAccountOpeningTrackerData());
    }

};