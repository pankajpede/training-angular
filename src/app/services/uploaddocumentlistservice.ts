import { Injectable } from '@angular/core';
    
@Injectable()
export class UploadDocumentListService {
    getUploadDocumentListData() {
        return [
            {
                id: '1',
                category:'Passport',
                isdocumentuplad: true,
                documentname: 'passport.pdf',
                uploadstatus: 'success'
            },
            {
                id: '2',
                category:'Social Security Card',
                isdocumentuplad: true,
                documentname: 'ssn.pdf',
                uploadstatus: 'failed'
            },
            {
                id: '3',
                category:'Driver license',
                isdocumentuplad: true,
                documentname: 'driverlicense.pdf',
                uploadstatus: 'inprogress'
            },
            {
                id: '4',
                category:'Voter identity card',
                isdocumentuplad: false,
                documentname: 'voter_id.pdf',
                uploadstatus: 'not uploaded'
            },
            {
                id: '5',
                category:'Housing contracts and rental agreements',
                isdocumentuplad: true,
                documentname: 'agreement_2023.pdf',
                uploadstatus: 'success'
            },
            {
                id: '6',
                category:'Housing contracts and rental agreements',
                isdocumentuplad: true,
                documentname: 'agreement_2023.pdf',
                uploadstatus: 'success'
            },
            {
                id: '7',
                category:'Utility bills',
                isdocumentuplad: true,
                documentname: 'bill_unity.pdf',
                uploadstatus: 'failed'
            },
            {
                id: '8',
                category:'Bank account statement or Passbook entries',
                isdocumentuplad: true,
                documentname: 'bank_statement_2024.pdf',
                uploadstatus: 'success'
            },
            {
                id: '9',
                category:'Maintenance bills',
                isdocumentuplad: true,
                documentname: 'maintainance_bill_2023.pdf',
                uploadstatus: 'success'
            },
            {
                id: '10',
                category:'Recent pay stubs',
                isdocumentuplad: true,
                documentname: 'recent_pay_2024.pdf',
                uploadstatus: 'success'
            },
            {
                id: '11',
                category:'Tax forms',
                isdocumentuplad: true,
                documentname: 'Tax_final_form.pdf',
                uploadstatus: 'success'
            },
        ];
    }

    getUploadDocumentListMini() {
        return Promise.resolve(this.getUploadDocumentListData().slice(0, 10));
    }

    getUploadDocumentListSmall() {
        return Promise.resolve(this.getUploadDocumentListData().slice(0, 10));
    }

    getUploadDocumentList() {
        return Promise.resolve(this.getUploadDocumentListData());
    }

};