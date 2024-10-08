import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { IconFieldModule } from 'primeng/iconfield';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputIconModule } from 'primeng/inputicon';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { TimelineModule } from 'primeng/timeline';
import { NgCircleProgressModule } from 'ng-circle-progress';

// Services
import { LiquidityDashboard } from '../../../domain/liquiditydasboard';
import { LiquidityDashboardService } from '../../../services/liquiditydashboardservice';

// Client List
import { clientlist } from '../../../domain/clientlist';
import { clientlistService } from '../../../services/clientlistservice';

// Linked Account Details Service
import { LinkedAccountsListService } from '../../../services/linkedbankaccountsservice';
import { LinkedAccountsList } from '../../../domain/linkedbankaccountsservice';

// Cash Movement Service
import { cashmovementlistservice } from '../../../services/cashmovement';
import { cashmovementlist } from '../../../domain/cashmovementservice';

interface AccountType {
  name: string;
}
interface HysaInstitution {
  name: string;
}
interface AccountHolderType {
  name: string;
}
interface Clients {
  name: string;
}
interface AddressType {
  name: string;
}
interface mobileNoType {
  name: string;
}
type Column = { header: string; field: string; tooltip?: string; }
interface City {
  name: string;
}

interface TransactionType {
  name: string;
}
interface AddCashSelection{
  name: string
}
@Component({
  selector: 'app-create-new-account-customer',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonModule, TableModule, DropdownModule, TooltipModule,
    TagModule, DialogModule, IconFieldModule, InputIconModule, InputTextModule, MenuModule, AccordionModule,
    CheckboxModule,RadioButtonModule, OverlayPanelModule, TabViewModule, BadgeModule, DividerModule,InputGroupModule,
    InputGroupAddonModule,InputMaskModule, CalendarModule,NgCircleProgressModule],
  providers: [LiquidityDashboardService, clientlistService,cashmovementlistservice,LinkedAccountsListService],
  templateUrl: './create-new-account-customer.component.html',
  styleUrl: './create-new-account-customer.component.scss'
})
export class CreateNewAccountCustomerComponent {

  searchExpanded:boolean = false;
  applicationCompletionStatus:number = 0
  activeIndex: number = 0;
  existingModal:number = 0;
  secondaryHolder: boolean = false;
  secondaryAdvisory: boolean = false;
  primaryHolderName: string = '';
  secondaryHolderName: string = '';
  primaryAdvisoryName:string = '';
  secondaryAdvisoryName:string = '';
  primaryRevenueSharing:number = 100;
  secondaryRevenueSharing:number = 0;
  accountTypeRadio!: string;
  jointAccountOption: string[] = [];
  showJointAccountOption:boolean = false;

  accounttype:AccountType[] | undefined;
  selectedaccounttype: AccountType | undefined;
  hysainstitution:HysaInstitution[] | undefined;
  selectedhysainstitution:HysaInstitution | undefined;
  accountholdertype:AccountHolderType[] | undefined;
  selectedaccountholdertype:AccountHolderType | undefined;

  addresstype: AddressType[] | undefined;
  selectedaddresstype: AddressType | undefined;

  dob: Date | undefined;
  mobilenotype:mobileNoType[] | undefined;
  selectedmobilenotype:mobileNoType | undefined;

  addClientSection:boolean = false;
  existingClientSection:boolean = true;
  accountType = null;
  accountTypeOption: any[] = [
    { name: 'HYSA Account', key: 'H' },
  ];


  cities: City[] | undefined;
  selectedCity: City | undefined;

  showHysaInfo: boolean = false;
  showExistingClientList:boolean = false
  showExistingAdvisorList:boolean = false

  tabClientDetails:boolean = false;
  tabAdvisorAgreement:boolean = false;
  tabBankDocuments:boolean = false;

  dueDiligenceQsn1!: string;
  dueDiligenceQsn2!: string;
  dueDiligenceQsn3!: string;
  dueDiligenceQsn4!: string;
  dueDiligenceQsn5!: string;
  dueDiligenceQsn6!: string;
  sign:string | undefined;

  submitToBankDialog:boolean = false;
  statusDataVerifying:boolean = false;
  
  submitResponceToBankDialog:boolean = false;
  responceToBank:boolean = false;
  
  accountFundingDialog:boolean = false;


  startAccountFundingDialog:boolean = false;

  startBankAccountOpeningDialog:boolean = false;
  responceToOpenAccount:boolean = false;

  phonenumber2:boolean = false;
  address2:boolean = false;

  bankAgreementCompleted:boolean = false;
  subtabCompleteted1:boolean = false;
  subtabCompleteted2:boolean = false;


  addcashselection: AddCashSelection[] | undefined;
  selectedAddcashselection: AddCashSelection | undefined;
  tabLinkedAccountAddCash:boolean = false;
  tabTransactionAddCash:boolean = false;

  showAddCashModal:boolean = false;
  modalActiveIndex: number = 0;

  transaction:TransactionType[] | undefined;
  selectedTransaction: TransactionType | undefined;
  // LiquidityDashboard
  LiquidityDashboard!: LiquidityDashboard[];
  tableColumns: Column[] =[
    //  {
    //     header: 'institution',
    //     field: 'institution'
    //  },
     {
        header: 'HYSA Rate',
        field: 'hysarate'
     },
     {
        header: 'HYSA Limit',
        field: 'hysalimit'
     },
     {
        header: 'SBL Rate',
        field: 'sblrate'
     },
     {
        header: 'HYSA',
        field: 'hysa'
     },
     {
        header: 'SBL',
        field: 'sbl'
     },
     {
        header: 'CDs',
        field: 'CDs'
     },
     {
        header: 'CC',
        field: 'brandedcc',
        tooltip: 'Branded Credit Card'
     },
     {
        header: 'Mortgage',
        field: 'martgage'
     }
    ]
_selectedTableColoumns: Column[] = [];

get selectedTableColumns(): Column[] {
    return this._selectedTableColoumns;
}

set selectedTableColumns(val: Column[]) {
    //restore original order
    this._selectedTableColoumns = this.tableColumns.filter((col) => val.includes(col));
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
    this._selectedlinkedAccountDetailsListColumns = this.selectedlinkedAccountDetailsListColumns.filter((col) => val.includes(col));
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


constructor(private productService: LiquidityDashboardService,
  private clientService: clientlistService,
  private cashmovementlistservice : cashmovementlistservice,
  private LinkdAccountDetailsListService: LinkedAccountsListService,
) {
}

  ngOnInit(): void {
    this.tabClientDetails = true;
    this.accountType = this.accountTypeOption[0];
    this.accounttype = [
      { name: 'HYSA Account'},
      // { name: 'Security Based Loan'},
      // { name: 'Branded Credit Card'},
      // { name: 'Mortgage'},
    ];
    this.selectedaccounttype = this.accounttype[0];

    this.hysainstitution = [
      { name: 'Bank of Central Asia'},
      { name: 'Bank of America'},
      { name: 'Unted State Nationa Bank'},
      { name: 'Trend Financical Banking'},
    ];
    this.accountholdertype = [
      { name: 'Primary'},
      { name: 'Secondary'},
    ]
    this.selectedaccountholdertype = this.accountholdertype[0];


    this.productService.getProductsMini().then((data) => {
      this.LiquidityDashboard = data;
      this._selectedTableColoumns = this.tableColumns;
  
    });
    this.clientService.getClientsMini().then((data) => {
        this.clientList = data;
        // this.PreferredLiquidityDashboard = data;
        this._selectedclientListColumns = this.clientListColumns;
    });

    this.cashmovementlistservice.getCashMovementList().then((data) => {
      this.cashmovementlist = data;
      this._selectedCashmovementlistColumns = this.cashmovementlistColumns;
      this.cashMovementCount = this.cashmovementlist.length;
  });

  this.LinkdAccountDetailsListService.getLinkedAccountList().then((data) => {
    this.linkedAccountsList = data;
    this._selectedlinkedAccountDetailsListColumns = this.selectedlinkedAccountDetailsListColumns;
    this.linkedAccountCount = this.linkedAccountsList.length;
});

    this.cities = [
      { name: 'Mr.' },
      { name: 'Mrs.'},
      { name: 'Miss.'},
      { name: 'Sir'}
    ];
    this.primaryAdvisoryName = "Mr. Brett Watson"


    this.addresstype = [
      { name: 'Residence'},
      { name: 'Rented'},
      { name: 'Office'},
      { name: 'Living with parents'},
    ]
    // this.selectedaddresstype = this.addresstype[0];
    this.mobilenotype = [
      { name: 'Mobile'},
      { name: 'Residence'},
      { name: 'Office'}
    ]

    this.addcashselection = [
      { name: 'Linked Account'},
      { name: 'Details'},
    ];
    this.selectedAddcashselection = this.addcashselection[0];


    this.transaction = [
      { name: 'ASAP'},
      { name: 'Standard'},
      { name: 'Same Day'},
      { name: 'Wire'},
  ];
  }
  addsecondaryHolder(){
    this.secondaryHolder = true;
  }
  removesecondaryHolder(){
    this.secondaryHolder = false;
  }

  addSecondaryHolder(){
    this.secondaryAdvisory = true
  }
  removeSecondaryHolder(){
    this.secondaryAdvisory = false
  }
  toggleSearch(){
    this.searchExpanded = !this.searchExpanded;
  }
  selectClient(){
    this.showExistingClientList = false;
    this.primaryHolderName = 'Mrs. Beth Smith';
  }
  selectAdvisor(){
    this.showExistingAdvisorList = false;
    this.secondaryAdvisoryName = 'Mr. Andrew Lee';
  }
  accountTypeToggle(){
    if(this.accountTypeRadio == 'Individual' ){
      this.showJointAccountOption = false
    }
    if(this.accountTypeRadio == 'Joint' ){
      this.showJointAccountOption = true
    }
  }
  showAddClientSection(){
    this.existingModal = 1;
    this.addClientSection = true;
    this.existingClientSection = false;
  }
  showExistingClientSection(){
    this.existingModal = 0;
    this.addClientSection = false;
    this.existingClientSection = true;
  }
  tabClientDetailsActive(){
    this.tabClientDetails = true;
    this.tabAdvisorAgreement = false;
    this.tabBankDocuments = false;

    this.subtabCompleteted1 = false;
    this.subtabCompleteted2 = false;

    this.bankAgreementCompleted = true;
  }
  tabtabAdvisorAgreementActive(){
    this.applicationCompletionStatus = 7;

    this.tabClientDetails = false;
    this.tabAdvisorAgreement = true;
    this.tabBankDocuments = false;

    this.subtabCompleteted1 = true;
    this.subtabCompleteted2 = false;

    this.bankAgreementCompleted = false;
  }
  tabBankDocumentsActive(){
    this.applicationCompletionStatus = 14;
    this.tabClientDetails = false;
    this.tabAdvisorAgreement = false;
    this.tabBankDocuments = true;

    this.subtabCompleteted1 = true;
    this.subtabCompleteted2 = true;

    this.bankAgreementCompleted = false;
  }
  // agreementYes(){
  //   this.agreementStatusYes = true;
  //   this.agreementStatusNo = false;
  // }
  // agreementNo(){
  //   this.agreementStatusYes = false;
  //   this.agreementStatusNo = true;
  // }

  addPhoneNumber(){
    this.phonenumber2 = true
  }
  removePhoneNumber(){
    this.phonenumber2 = false
  }
  addAddress(){
    this.address2 = true
  }
  removeAddress(){
    this.address2 = false
  }
  showSubmitToBankDialog(){
    this.submitToBankDialog = true;
    setTimeout(() => 
      {
        this.statusDataVerifying = true;
        this.applicationCompletionStatus = 60
      },
    3000);
  }
  showSubmitResponceToBankDialog(){
    this.submitResponceToBankDialog = true;
    setTimeout(() => 
      {
        this.responceToBank = true;
        this.applicationCompletionStatus = 80
      },
      3000);
  }
  startOpenBankAccountDialog(){
    this.submitResponceToBankDialog = false;
    this.activeIndex = 4
    // this.startBankAccountOpeningDialog = false;
    // this.activeIndex = 5
    setTimeout(() => 
      {
        this.responceToOpenAccount = true;
        this.applicationCompletionStatus = 100
      },
      3000);
  }
  submitResponceToBank(){
    this.responceToBank = true;
  }


  tabLinkedAccountAddCashActive(){
    this.tabLinkedAccountAddCash = true;
    this.tabTransactionAddCash = false;
  }
  tabTransactionAddCashActive(){
      this.tabLinkedAccountAddCash = false;
      this.tabTransactionAddCash = true;
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
  startAccountFunding(){
    this.startAccountFundingDialog = false; 
    this.activeIndex = 5;
    this.tabLinkedAccountAddCash = true;
  }
  showAccountFundingkDialog(){
    
  }
}
