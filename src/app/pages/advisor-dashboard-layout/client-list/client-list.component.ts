import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
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
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

// Client List
import { clientlist } from '../../../domain/clientlist';
import { clientlistService } from '../../../services/clientlistservice';

// Upload Document
import { UploadDocumentList } from '../../../domain/uploaddocumentlist';
import { UploadDocumentListService } from '../../../services/uploaddocumentlistservice';

// Client Address
import { TimelineModule } from 'primeng/timeline';
import { addresslist } from '../../../domain/addressList';
import { addresslistService } from '../../../services/addresslistservice';


type Column = { header: string; field: string; tooltip?: string; }
interface City {
  name: string;
}
interface Clients {
  name: string;
}

interface mobileNoType {
  name: string;
}

interface AddressType {
  name: string;
}

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,ButtonModule,TableModule,DropdownModule,TooltipModule,CommonModule,
    TagModule,DialogModule,IconFieldModule,InputIconModule,InputTextModule,MenuModule,AccordionModule,CheckboxModule, 
    OverlayPanelModule, DividerModule,InputGroupModule,InputGroupAddonModule,InputMaskModule,TabViewModule,BadgeModule,
    FileUploadModule, CalendarModule, RadioButtonModule, TimelineModule],
  providers: [clientlistService,UploadDocumentListService,addresslistService],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export class ClientListComponent {
  clientList!: clientlist[];
  // PreferredLiquidityDashboard!: clientlist[];
  // preferredFilterEnable:boolean = false;
//   showHysaInfo: boolean = false;
  showClientEdit:boolean = false;
  showAddClient:boolean = false;
  searchExpanded:boolean = false;
  togglePresetFilterStatus:boolean = false;
  items: MenuItem[] | undefined;
  isDataFetch: boolean = false;
 
  isUploadDocuments:boolean = false;
  activeIndex: number = 0;
  // userTitles: Titles[] | undefined;
  // selectedUserTitles: Titles | undefined;
  

  cities: City[] | undefined;
  selectedCity: City | undefined;

  clients: Clients[] | undefined;
  selectedClients: Clients | undefined;
  
  mobilenotype:mobileNoType[] | undefined;
  selectedmobilenotype:mobileNoType | undefined;

  dob: Date | undefined;

  addresstype: AddressType[] | undefined;
  selectedaddresstype: AddressType | undefined;


  agremeentRadio!: string;
  agreementStatusYes:boolean = false;
  agreementStatusNo:boolean = false;
  Agreementchecked1: boolean = false;
  Agreementchecked2: boolean = false;
  Agreementchecked3: boolean = false;
  Agreementchecked4: boolean = false;
  Agreementchecked5: boolean = false;


  advisorComments: any[];
  showCommentsModal:boolean = false;
  
  phonenumber2:boolean = false;
  address2:boolean = false;
  tableColumns: Column[] =[
      //  {
      //     header: 'institution',
      //     field: 'institution'
      //  },
       {
          header: 'Name',
          field: 'name'
       },
       {
          header: 'Address',
          field: 'address'
       },
       {
          header: 'Email',
          field: 'primaryemail'
       },
       {
          header: 'Phone',
          field: 'primaryphone'
       },
       {
          header: 'Date of Birth',
          field: 'dob'
       },
       {
        header: 'SSN',
        field: 'ssn'
      },
       {
          header: 'Assets Balance',
          field: 'assetsbalance'
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


    // Upload Document
    UploadDocumentList!: UploadDocumentList[];
    UploadDocumentCount: any;
    UploadDocumentColumns: Column[] = [
        // {
        //     header: 'Recipient’s Name',
        //     field: 'recipientname'
        // },
        {
            header: 'Category',
            field: 'category'
        },
        {
            header: 'Document Name',
            field: 'documentname'
        },
        {
            header: 'Upload Status',
            field: 'uploadstatus'
        },
    ]
    _selectedUploadDocumentColumns: Column[] = [];

    get selectedUploadDocumentColumns(): Column[] {
        return this._selectedUploadDocumentColumns;
    }

    set selectedUploadDocumentColumns(val: Column[]) {
        this._selectedUploadDocumentColumns = this.selectedUploadDocumentColumns.filter((col) => val.includes(col));
    }

    // Upload Document
    AddressList!: addresslist[];
    AddressListCount: any;
    AddressListColumns: Column[] = [
        {
            header: 'Address Type',
            field: 'addresstype'
        },
        {
            header: 'Address',
            field: 'address1'
        },
    ]
    _selectedAddressListColumns: Column[] = [];

    get selectedAddressListColumns(): Column[] {
        return this._selectedUploadDocumentColumns;
    }

    set selectedUAddressListColumns(val: Column[]) {
        this._selectedAddressListColumns = this.selectedAddressListColumns.filter((col) => val.includes(col));
    }


  constructor(private clientService: clientlistService,
    private UploadDocumentListService: UploadDocumentListService,
    private AddressListService: addresslistService
  ) {
    this.advisorComments = [
    { date: '15/10/2020 10:30', comment:'This account offers a competitive interest rate, helping you grow your savings faster than a regular savings account.' },
    { date: '15/10/2020 10:30', comment:'This HYSA offers competitive interest rates, higher than standard savings accounts, helping you grow your funds faster.' },
    { date: '15/10/2020 10:30', comment:'You can access your funds anytime with no penalties, giving you flexibility in managing your money.' },
    { date: '15/10/2020 10:30', comment:'You can access your funds anytime without penalties, offering the flexibility of withdrawals while still earning interest.' },
    { date: '15/10/2020 10:30', comment:'Your deposits are FDIC insured up to ₹5,00,000, providing security for your savings.' },
];
}

  ngOnInit() {
      this.clientService.getClientsMini().then((data) => {
        setTimeout(()=>{
            this.isDataFetch = false;
        }, 2000)
        
          this.clientList = data;
          // this.PreferredLiquidityDashboard = data;
          this._selectedTableColoumns = this.tableColumns;
      });


      this.UploadDocumentListService.getUploadDocumentList().then((data) => {
        this.UploadDocumentList = data;
        this._selectedUploadDocumentColumns = this.selectedUploadDocumentColumns;
        // this.UploadDocumentCount = this.UploadDocumentList.length;
        this.UploadDocumentCount = 6
      });
      


      this.AddressListService.getAddress().then((data) => {
        this.AddressList = data;
        this._selectedAddressListColumns = this.selectedAddressListColumns;
        this.AddressListCount = this.AddressList.length;
      });


      this.cities = [
        { name: 'Mr.' },
        { name: 'Mrs.'},
        { name: 'Miss.'},
        { name: 'Sir'}
    ];

    this.clients = [
      { name: 'Mr. Charles Smith' },
      { name: 'Mrs. Beth Smith'},
      { name: 'Mrs. John Barnes'},
      { name: 'Mrs. Mary P. Barens'}
    ];

    this.mobilenotype = [
      { name: 'Mobile'},
      { name: 'Residence'},
      { name: 'Office'}
    ]

    this.addresstype = [
      { name: 'Residence'},
      { name: 'Rented'},
      { name: 'Office'},
      { name: 'Living with parents'},
    ]
      
  }
  showClientEditModal(){
      this.showClientEdit = true
  }
  showAddClientModal(){
      this.showAddClient = true
  }
  toggleSearch(){
      this.searchExpanded = !this.searchExpanded;
  }
  togglePresetFilter(){
      this.togglePresetFilterStatus = !this.togglePresetFilterStatus
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

  agreementYes(){
    this.agreementStatusYes = true;
    this.agreementStatusNo = false;
  }
  agreementNo(){
    this.agreementStatusYes = false;
    this.agreementStatusNo = true;
  }
}
