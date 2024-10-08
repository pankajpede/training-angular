import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
import { IconFieldModule } from 'primeng/iconfield';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputIconModule } from 'primeng/inputicon';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { TimelineModule } from 'primeng/timeline';
import { TooltipModule } from 'primeng/tooltip';

// Services
import { LiquidityDashboard } from '../../../domain/liquiditydasboard';
import { LiquidityDashboardService } from '../../../services/liquiditydashboardservice';

// Client List
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ChipsModule } from 'primeng/chips';
import { ToastModule } from 'primeng/toast';
import { clientlist } from '../../../domain/clientlist';
import { clientlistService } from '../../../services/clientlistservice';

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

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-create-new-account',
  standalone: true,

  imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonModule, TableModule, DropdownModule, TooltipModule,
    TagModule, DialogModule, IconFieldModule, InputIconModule, InputTextModule, MenuModule, AccordionModule,
    CheckboxModule,RadioButtonModule, OverlayPanelModule, TabViewModule, BadgeModule, DividerModule,InputGroupModule,
    InputGroupAddonModule,InputMaskModule, CalendarModule, AutoCompleteModule, ChipModule,FileUploadModule,
    ProgressBarModule,EditorModule,ChipsModule,HttpClientModule,ToastModule,TimelineModule],
  providers: [LiquidityDashboardService, clientlistService,MessageService],
  templateUrl: './create-new-account.component.html',
  styleUrl: './create-new-account.component.scss'
})
export class CreateNewAccountComponent {
  
  searchExpanded:boolean = false;

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

  agremeentRadio!: string;
  agreementStatusYes:boolean = false;
  agreementStatusNo:boolean = false;
  Agreementchecked1: boolean = false;
  Agreementchecked2: boolean = false;
  Agreementchecked3: boolean = false;
  Agreementchecked4: boolean = false;
  Agreementchecked5: boolean = false;

  phonenumber2:boolean = false;
  address2:boolean = false;

  showClientVerification:boolean = false;
  step1Verication:boolean = false;
  step2Verication:boolean = false;
  step3Verication:boolean = false;
  step4Verication:boolean = false;
  step5Verication:boolean = false;
  step6Verication:boolean = false;

  MessageCustomText: string = 'Hello';
  sendToValues: string[] | undefined = ['cssmith@gmail.com','beth_smith@gmail.com'];
  uploadedFiles: any[] = [];
  showAccoutSuccess:boolean = false;
  showSendDocumentConirmation:boolean = false;
  showComments:boolean = false;
  advisorComments: any[];
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



constructor(private productService: LiquidityDashboardService,
  private clientService: clientlistService,
  private messageService: MessageService) {
    this.advisorComments = [
      { date: '15/10/2020 10:30', comment:'This account offers a competitive interest rate, helping you grow your savings faster than a regular savings account.' },
      { date: '15/10/2020 10:30', comment:'This HYSA offers competitive interest rates, higher than standard savings accounts, helping you grow your funds faster.' },
      { date: '15/10/2020 10:30', comment:'You can access your funds anytime with no penalties, giving you flexibility in managing your money.' },
      { date: '15/10/2020 10:30', comment:'You can access your funds anytime without penalties, offering the flexibility of withdrawals while still earning interest.' },
      { date: '15/10/2020 10:30', comment:'Your deposits are FDIC insured up to ₹5,00,000, providing security for your savings.' },
  ];
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
      this.removesecondaryHolder();
    }
    if(this.accountTypeRadio == 'Joint' ){
      this.showJointAccountOption = true;
      this.addsecondaryHolder();
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
  }
  tabtabAdvisorAgreementActive(){
    this.tabClientDetails = false;
    this.tabAdvisorAgreement = true;
    this.tabBankDocuments = false;
  }
  tabBankDocumentsActive(){
    this.tabClientDetails = false;
    this.tabAdvisorAgreement = false;
    this.tabBankDocuments = true;
  }
  agreementYes(){
    this.agreementStatusYes = true;
    this.agreementStatusNo = false;
  }
  agreementNo(){
    this.agreementStatusYes = false;
    this.agreementStatusNo = true;
  }

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
  verifyLightlingData(){
    this.step1Verication = false;
    this.step2Verication = false;
    this.step3Verication = false;
    this.step4Verication = false;
    this.step5Verication = false;
    this.step6Verication = false;

    this.showClientVerification = true
    setTimeout(() => {
        this.step1Verication = true;
    },1500);
    setTimeout(() => {
        this.step2Verication = true;
    },2500);
    setTimeout(() => {
        this.step3Verication = true;
    },3500);
    setTimeout(() => {
        this.step4Verication = true;
    },4500);
    setTimeout(() => {
        this.step5Verication = true;
    },5500);
    setTimeout(() => {
        this.step6Verication = true;
    },6500);
  }
  onUpload(event:UploadEvent) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  showCommentModal(){
    this.showComments = true;
  }
} 