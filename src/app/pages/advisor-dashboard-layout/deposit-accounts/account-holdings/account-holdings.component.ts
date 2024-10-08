import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { TabViewModule } from 'primeng/tabview';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputMaskModule } from 'primeng/inputmask';

import { MenuItem } from 'primeng/api';

// Cash Balance Service
import { cashbalanceService } from '../../../../services/cashbalanceservice';
import { cashbalancedetails } from '../../../../domain/cashbalance';

// Transaction Details Service
import { transactiondetailsservice } from '../../../../services/transactionservice';
import { transactiondetails } from '../../../../domain/transactionservice';

// Cash Movement Service
import { cashmovementlistservice } from '../../../../services/cashmovement';
import { cashmovementlist } from '../../../../domain/cashmovementservice';

// Account Details Service
import { AccountDetailsListService } from '../../../../services/accountdetailsservice';
import { AccountDetailsList } from '../../../../domain/accountdetails';

// Linked Account Details Service
import { LinkedAccountsListService } from '../../../../services/linkedbankaccountsservice';
import { LinkedAccountsList } from '../../../../domain/linkedbankaccountsservice';


// Linked Account Details Service
import { BussinessAccountListService } from '../../../../services/bussinessaccount';
import { BussinessAccountList } from '../../../../domain/bussinessaccount';

// Deposit Account Service
import { depositaccountService } from '../../../../services/depositaccountservice';
import { depositaccountlist } from '../../../../domain/depositaccountservice';

// Advisor Service
import { AdvisorsListService } from '../../../../services/advisorslist';
import { AdvisorsList } from '../../../../domain/advisorslist';

// Client List
import { clientlist } from '../../../../domain/clientlist';
import { clientlistService } from '../../../../services/clientlistservice';

type Column = { header: string; field: string; tooltip?: string; }
interface City {
    name: string;
    code: string;
}
interface BankName {
    name: string;
}
interface TransactionType {
    name: string;
}
interface WithdrawCashSelection{
    name: string
}
interface AddCashSelection{
    name: string
}

interface Clients {
    name: string;
  }
@Component({
    selector: 'app-account-holdings',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonModule, TableModule, DropdownModule, TooltipModule,
        TagModule, DialogModule, IconFieldModule, InputIconModule, InputTextModule, MenuModule, AccordionModule,
        CheckboxModule,RadioButtonModule, OverlayPanelModule, TabViewModule, BadgeModule, DividerModule,InputGroupModule,InputGroupAddonModule,InputMaskModule],
    providers: [cashbalanceService, transactiondetailsservice,cashmovementlistservice,AccountDetailsListService,
        LinkedAccountsListService, BussinessAccountListService,depositaccountService, AdvisorsListService,clientlistService],
    templateUrl: './account-holdings.component.html',
    styleUrl: './account-holdings.component.scss'
})
export class AccountHoldingsComponent {

    showHysaInfo: boolean = false;
    showSBLRateInfo: boolean = false;
    searchExpanded: boolean = false;
    togglePresetFilterStatus: boolean = false;
        // items: MenuItem[] | undefined;
    activeIndex: number = 0;

    tabBussinessAccount:boolean = false;
    tabLinkedAccount:boolean = false;
    tabTransaction:boolean = false;
    tabLinkedAccountAddCash:boolean = false;
    tabTransactionAddCash:boolean = false;

    // tabCashTransaction:boolean = false;
    // tabCashLinkedAccountAddCash:boolean = false;

    primaryAdvisoryName:string = 'Mrs. John Barnes';
    secondaryAdvisoryName:string = '';
    primaryRevenueSharing:number = 100;
    secondaryRevenueSharing1:number = 30;
    secondaryRevenueSharing2:number = 0;
    secondaryAdvisory: boolean = false;
    showExistingAdvisorList:boolean = false
    existingModal:number = 0;

    showClientDetails:boolean = false;
    showSendMovementModal:boolean = false;
    showAddCashModal:boolean = false;
    showAddBussiness:boolean = false
    // Cash Balance Data
    cashbalancedetails!: cashbalancedetails[];
    cashBalanceTotal!: number;
    estimatedAnnualBalanceTotal!: number;
    cashbalanceCount:any;
    cashBalanceColumns: Column[] = [
        {
            header: 'Cash Balance',
            field: 'cashbalance'
        },
        {
            header: 'Current APR',
            field: 'currentapr'
        },
        {
            header: 'Estimated Annual Income',
            field: 'estimatedannualincome'
        }
    ]
    _selectedcashBalanceColumns: Column[] = [];

    get selectedCashBalanceColumns(): Column[] {
        return this._selectedcashBalanceColumns;
    }

    set selectedCashBalanceColumns(val: Column[]) {
        this._selectedcashBalanceColumns = this.cashBalanceColumns.filter((col) => val.includes(col));
    }


    // Transcation Details Data
    transactiondetails!: transactiondetails[];
    transactionCount: any;
    transactionDetailsColumns: Column[] = [
        {
            header: 'Date',
            field: 'date'
        },
        // {
        //     header: 'Security Id',
        //     field: 'securityid'
        // },
        {
            header: 'Activity Type',
            field: 'activitytype'
        },
        {
            header: 'Net Amount',
            field: 'netammount'
        },
        {
            header: 'Account Balance',
            field: 'accbalance'
        }
    ]
    _selectedTransactionDetailsColumns: Column[] = [];

    get selectedTransactionDetailsColumns(): Column[] {
        return this._selectedTransactionDetailsColumns;
    }

    set selectedTransactionDetailsColumns(val: Column[]) {
        this._selectedcashBalanceColumns = this.transactionDetailsColumns.filter((col) => val.includes(col));
    }


    // Cash Movement Data
    cashmovementlist!: cashmovementlist[];
    cashMovementCount: any;
    cashmovementlistColumns: Column[] = [
        // {
        //     header: 'Recipient’s Name',
        //     field: 'recipientname'
        // },
        {
            header: 'Date',
            field: 'date'
        },
        {
            header: 'Status',
            field: 'status'
        },
        {
            header: 'Bank Name',
            field: 'bankname'
        },
        {
            header: 'Transfer Type',
            field: 'transfertype'
        },
        {
            header: 'Account Number',
            field: 'accnumber'
        },
        {
            header: 'Routing Number',
            field: 'routingnumber'
        },
        {
            header: 'Transfer Amount',
            field: 'transferamount'
        }
    ]
    _selectedCashmovementlistColumns: Column[] = [];

    get selectedcashmovementlistColumns(): Column[] {
        return this._selectedCashmovementlistColumns;
    }

    set selectedCashmovementlistColumns(val: Column[]) {
        this._selectedCashmovementlistColumns = this.selectedcashmovementlistColumns.filter((col) => val.includes(col));
    }

    // Account Details Data
    accountDetailsList!: AccountDetailsList[];
    accountDetailCount: any;
    accountDetailsListColumns: Column[] = [
        {
            header: 'Account Name',
            field: 'accname'
        },
        {
            header: 'Client Name',
            field: 'clientname'
        },
        {
            header: 'Account Number',
            field: 'accnumber'
        },
        {
            header: 'Account Type',
            field: 'acctype'
        },
        {
            header: 'Account Status',
            field: 'accstatus'
        },
        {
            header: 'Account Balance',
            field: 'accbalance'
        }
    ]
    _selectedAccountDetailsListColumns: Column[] = [];

    get selectedAccountDetailsListColumns(): Column[] {
        return this._selectedAccountDetailsListColumns;
    }

    set selectedAccountDetailsListColumns(val: Column[]) {
        this._selectedCashmovementlistColumns = this.selectedAccountDetailsListColumns.filter((col) => val.includes(col));
    }


    // Linked Account Details Data
    linkedAccountsList!: LinkedAccountsList[];
    linkedAccountCount: any;
    linkedAccountDetailsListColumns: Column[] = [
        {
            header: 'Account Name',
            field: 'accountname'
        },
        {
            header: 'Account Holder Type',
            field: 'accnameholdertype'
        },
        {
            header: 'Bank Name',
            field: 'bankname'
        },
        {
            header: 'Account Type',
            field: 'acctype'
        },
        {
            header: 'Account Number',
            field: 'accnumber'
        },
        {
            header: 'Account Balance',
            field: 'accountbalance'
        },
    ]
    _selectedlinkedAccountDetailsListColumns: Column[] = [];

    get selectedlinkedAccountDetailsListColumns(): Column[] {
        return this._selectedlinkedAccountDetailsListColumns;
    }

    set selectedlinkedAccountDetailsListColumns(val: Column[]) {
        this._selectedCashmovementlistColumns = this.selectedlinkedAccountDetailsListColumns.filter((col) => val.includes(col));
    }



    // Bussiness Account List
    bussinessAccountsList!: BussinessAccountList[];
    bussinessAccountCount: any;
    bussinessAccountsListColumns: Column[] = [
        {
            header: 'Business Name',
            field: 'bussinessname'
        },
        {
            header: 'Account Holder Name',
            field: 'accholdername'
        },
        {
            header: 'Account Number',
            field: 'accnumber'
        },
        {
            header: 'Bank Name',
            field: 'bankname'
        },
        {
            header: 'Routing Number',
            field: 'routingnumber'
        },
    ]
    _selectedbussinessAccountsListColumns: Column[] = [];

    get selectedbussinessAccountsListColumns(): Column[] {
        return this._selectedlinkedAccountDetailsListColumns;
    }

    set selectedbussinessAccountsListColumns(val: Column[]) {
        this._selectedCashmovementlistColumns = this.selectedbussinessAccountsListColumns.filter((col) => val.includes(col));
    }


    // Deposite Account Table
    depositaccountlist!: depositaccountlist[];
    tableColumns: Column[] =[
        //  {
        //     header: 'institution',
        //     field: 'institution'
        //  },
         {
            header: 'Account Name',
            field: 'accountname'
         },
      //    {
      //       header: 'Client Name',
      //       field: 'clientname'
      //    },
         {
            header: 'Account Number',
            field: 'accountnumber'
         },
         {
            header: 'Account Type',
            field: 'accounttype'
         },
        //  {
        //     header: 'Account Status',
        //     field: 'accountstatus'
        //  },
         {
            header: 'Account Balance',
            field: 'accountbalance'
         },
        ]
    _selectedTableColoumns: Column[] = [];
  
    get selectedTableColumns(): Column[] {
        return this._selectedTableColoumns;
    }
  
    set selectedTableColumns(val: Column[]) {
        //restore original order
        this._selectedTableColoumns = this.tableColumns.filter((col) => val.includes(col));
    }




    // Advisor Table
    advisorlist!: AdvisorsList[];
    advisorListCount: any;
    advisorColumns: Column[] =[
         {
            header: 'Advisor Name',
            field: 'advisorname'
         },
         {
            header: 'Share (%)',
            field: 'share'
         }
        ]
    _selectedadvisorlistColoumns: Column[] = [];
  
    get selectedadvisorlistColoumns(): Column[] {
        return this._selectedTableColoumns;
    }
  
    set selectedadvisorlistColoumns(val: Column[]) {
        //restore original order
        this._selectedadvisorlistColoumns = this.tableColumns.filter((col) => val.includes(col));
    }
    


    // clientList

    clientList!: clientlist[];
    selectedClients: Clients | undefined;

    clientListColumns: Column[] =[
        //  {
        //     header: 'institution',
        //     field: 'institution'
        //  },
        {
            header: 'Name',
            field: 'name'
        },
        {
            header:'Type',
            field: 'clienttype',
        },
        {
            header: 'Primary Email',
            field: 'primaryemail'
        },
        {
            header: 'Primary Phone',
            field: 'primaryphone'
        },
    ]

    advisorListColumns: Column[] =[
    //  {
    //     header: 'institution',
    //     field: 'institution'
    //  },
    {
        header: 'Name',
        field: 'name'
    },
    //  {
    //     header:'Type',
    //     field: 'clienttype',
    //  },
    {
        header: 'Primary Email',
        field: 'primaryemail'
    },
    {
        header: 'Primary Phone',
        field: 'primaryphone'
    },
    ]
    _selectedclientListColumns: Column[] = [];

    get selectedclientListColumns(): Column[] {
        return this._selectedTableColoumns;
    }

    set selectedclientListColumns(val: Column[]) {
        //restore original order
        this._selectedclientListColumns = this.clientListColumns.filter((col) => val.includes(col));
    }





    constructor(private cashbalanceService: cashbalanceService, 
        private transactiondetailsservice: transactiondetailsservice, 
        private cashmovementlistservice : cashmovementlistservice,
        private accountDetailsListService: AccountDetailsListService,
        private LinkdAccountDetailsListService: LinkedAccountsListService,
        private BussinessAccountListService: BussinessAccountListService,
        private depositaccountService: depositaccountService,
        private advisorslistservice: AdvisorsListService,
        private clientService: clientlistService,
    ) { }


        // Money Movement Repeints Dropdown
        cities: City[] | undefined;
        selectedCity: City | undefined;

        banks:BankName[] | undefined;
        selectedBank: BankName | undefined;

        transaction:TransactionType[] | undefined;
        selectedTransaction: TransactionType | undefined;

        withdrawcashselection: WithdrawCashSelection[] | undefined;
        selectedWithdrawcashselection: WithdrawCashSelection | undefined;
        

        addcashselection: AddCashSelection[] | undefined;
        selectedAddcashselection: AddCashSelection | undefined;

        modalActiveIndex: number = 0;
    ngOnInit(): void {
        this.cashbalanceService.getCashBalance().then((data) => {
            this.cashbalancedetails = data;
            this._selectedcashBalanceColumns = this.cashBalanceColumns;
            this.cashbalanceCount = this.cashbalancedetails.length;
            this.cashBalanceTotal = data.reduce((acc, item) => { return acc + item.cashbalance }, 0)
            this.estimatedAnnualBalanceTotal = data.reduce((acc, item) => { return acc + item.estimatedannualincome }, 0)
        });
        this.transactiondetailsservice.getTransactionDetails().then((data) => {
            this.transactiondetails = data;
            this._selectedTransactionDetailsColumns = this.transactionDetailsColumns;
            this.transactionCount = this.transactiondetails.length;
        });
        this.cashmovementlistservice.getCashMovementList().then((data) => {
            this.cashmovementlist = data;
            this._selectedCashmovementlistColumns = this.cashmovementlistColumns;
            this.cashMovementCount = this.cashmovementlist.length;
        });
        this.accountDetailsListService.getAccountDetails().then((data) => {
            this.accountDetailsList = data;
            this._selectedAccountDetailsListColumns = this.selectedAccountDetailsListColumns;
            this.accountDetailCount = this.accountDetailsList.length;
        });
        this.LinkdAccountDetailsListService.getLinkedAccountList().then((data) => {
            this.linkedAccountsList = data;
            this._selectedlinkedAccountDetailsListColumns = this.selectedlinkedAccountDetailsListColumns;
            this.linkedAccountCount = this.linkedAccountsList.length;
        });
        this.BussinessAccountListService.getBussinessAccountList().then((data) => {
            this.bussinessAccountsList = data;
            this._selectedbussinessAccountsListColumns = this.selectedbussinessAccountsListColumns;
            this.bussinessAccountCount = this.bussinessAccountsList.length;
        });
        this.depositaccountService.getDepositAccountSmall().then((data) => {
            this.depositaccountlist = data;
            // this.PreferredLiquidityDashboard = data;
            this._selectedTableColoumns = this.tableColumns;
        });
        
        this.advisorslistservice.getAdvisorsListMini().then((data) => {
            this.advisorlist = data;
            this._selectedadvisorlistColoumns = this.selectedadvisorlistColoumns;
            this.advisorListCount = this.advisorlist.length;
        });
        
        this.clientService.getClientsMini().then((data) => {
            this.clientList = data;
            // this.PreferredLiquidityDashboard = data;
            this._selectedclientListColumns = this.clientListColumns;
        });

        this.cities = [
            { name: 'Exotic Cars', code: 'AU' },
            { name: 'Columbia University', code: 'BR' },
            { name: 'Faraway Yachts', code: 'CN' }
        ];
        this.banks = [
            { name: 'Bank of Cenral Asia'},
            { name: 'Bank of America'},
            { name: 'United States National Bank'},
        ];
        this.transaction = [
            { name: 'ASAP'},
            { name: 'Standard'},
            { name: 'Same Day'},
            { name: 'Wire'},
        ];
        this.withdrawcashselection = [
            { name: 'Business Account'},
            { name: 'Linked Account'},
            { name: 'Details'},
        ];

        this.addcashselection = [
            { name: 'Linked Account'},
            { name: 'Details'},
        ];
        this.tabBussinessAccountActive();
        this.tabLinkedAccountAddCashActive()
        this.selectedWithdrawcashselection = this.withdrawcashselection[0];
        this.selectedAddcashselection = this.addcashselection[1];
    }
    toggleSearch() {
        this.searchExpanded = !this.searchExpanded;
    }
    tabBussinessAccountActive(){
        this.tabBussinessAccount = true;
        this.tabLinkedAccount = false;
        this.tabTransaction = false;
    }
    tabLinkedAccountActive(){
        this.tabBussinessAccount = false;
        this.tabLinkedAccount = true;
        this.tabTransaction = false;
    }
    tabTransactionActive(){
        this.tabBussinessAccount = false;
        this.tabLinkedAccount = false;
        this.tabTransaction = true;
    }

    tabLinkedAccountAddCashActive(){
        this.tabLinkedAccountAddCash = true;
        this.tabTransactionAddCash = false;
    }
    tabTransactionAddCashActive(){
        this.tabLinkedAccountAddCash = false;
        this.tabTransactionAddCash = true;
    }
    withrawChangeTable(){
        if(this.selectedWithdrawcashselection?.name == 'Business Account'){
            this.tabBussinessAccount = true;
            this.tabLinkedAccount = false;
            this.tabTransaction = false;
        }
        if(this.selectedWithdrawcashselection?.name == 'Linked Account'){
            this.tabBussinessAccount = false;
            this.tabLinkedAccount = true;
            this.tabTransaction = false;
        }
        if(this.selectedWithdrawcashselection?.name == 'Details'){
            this.tabBussinessAccount = false;
            this.tabLinkedAccount = false;
            this.tabTransaction = true;
        }
    }
    addChangeTable(){
        if(this.selectedAddcashselection?.name == 'Linked Account'){
            this.tabTransactionAddCash = false;
            this.tabLinkedAccountAddCash = true;
        }
        if(this.selectedAddcashselection?.name == 'Details'){
            this.tabTransactionAddCash = true;
            this.tabLinkedAccountAddCash = false;
        }
    }
    approvalChange(){
        this.showSendMovementModal = false;

        this.tabBussinessAccount = false;
        this.tabLinkedAccount = false;
        this.tabTransaction = true;

    }
    
  addSecondaryHolder(){
    this.secondaryAdvisory = true
  }
  removeSecondaryHolder(){
    this.secondaryAdvisory = false
  }

  selectAdvisor(){
    this.showExistingAdvisorList = false;
    this.secondaryAdvisoryName = 'Mr. Andrew Lee';
  }
}
