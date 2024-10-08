import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
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

import { MenuItem } from 'primeng/api';
import { depositaccountService } from '../../../../services/depositaccountservice';
import { depositaccountlist } from '../../../../domain/depositaccountservice';
import { DividerModule } from 'primeng/divider';
import { BadgeModule } from 'primeng/badge';
import { TimelineModule } from 'primeng/timeline';

type Column = { header: string; field: string; tooltip?: string; }

@Component({
  selector: 'app-account-deposit-landing',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,ButtonModule,TableModule,DropdownModule,TooltipModule,CommonModule,
    TagModule,DialogModule,IconFieldModule,InputIconModule,InputTextModule,MenuModule,AccordionModule,CheckboxModule, 
    OverlayPanelModule, DividerModule,BadgeModule,TimelineModule],
  providers: [depositaccountService],
  templateUrl: './account-deposit-landing.component.html',
  styleUrl: './account-deposit-landing.component.scss'
})
export class AccountDepositLandingComponent {
  depositaccountlist!: depositaccountlist[];
  // PreferredLiquidityDashboard!: clientlist[];
  // preferredFilterEnable:boolean = false;
  showHysaInfo: boolean = false;
  showSBLRateInfo:boolean = false;
  searchExpanded:boolean = false;
  togglePresetFilterStatus:boolean = false;
  items: MenuItem[] | undefined;
 
  advisorComments: any[];
  showCommentsModal:boolean = false;
  // tableColoumns = [{name:'Institution',value:'institution'},{name:'Hysarate',value:'hysarate'},
  //     {name:'Hysalimit',value:'hysalimit'},{name:'Sblrate',value:'sblrate'}
  // ]
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
       {
          header: 'Account Status',
          field: 'accountstatus'
       },
       {
          header: 'Revenue Shared',
          field: 'addvisordetails'
       },
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

  constructor(private depositaccountService: depositaccountService) {
    this.advisorComments = [
        { date: '15/10/2020 10:30', comment:'This account offers a competitive interest rate, helping you grow your savings faster than a regular savings account.' },
        { date: '15/10/2020 10:30', comment:'This HYSA offers competitive interest rates, higher than standard savings accounts, helping you grow your funds faster.' },
        { date: '15/10/2020 10:30', comment:'You can access your funds anytime with no penalties, giving you flexibility in managing your money.' },
        { date: '15/10/2020 10:30', comment:'You can access your funds anytime without penalties, offering the flexibility of withdrawals while still earning interest.' },
        { date: '15/10/2020 10:30', comment:'Your deposits are FDIC insured up to ₹5,00,000, providing security for your savings.' },
    ];
  }

  ngOnInit() {
      this.depositaccountService.getDepositAccountMini().then((data) => {
          this.depositaccountlist = data;
          // this.PreferredLiquidityDashboard = data;
          this._selectedTableColoumns = this.tableColumns;
      });
      
  }

  showHysaModal() {
      this.showHysaInfo = true;
  }
  showSblInfo(){}
  showTieredModal(){
      this.showSBLRateInfo = true
  }
  toggleSearch(){
      this.searchExpanded = !this.searchExpanded;
  }
  togglePresetFilter(){
      this.togglePresetFilterStatus = !this.togglePresetFilterStatus
  }
}
