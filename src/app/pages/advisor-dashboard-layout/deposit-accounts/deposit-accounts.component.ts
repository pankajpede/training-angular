import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { depositaccountlist } from '../../../domain/depositaccountservice';
import { depositaccountService } from '../../../services/depositaccountservice';

type Column = { header: string; field: string; tooltip?: string; }

@Component({
  selector: 'app-deposit-accounts',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,ButtonModule,TableModule,DropdownModule,TooltipModule,CommonModule,TagModule,DialogModule,IconFieldModule,InputIconModule,InputTextModule,MenuModule,AccordionModule,CheckboxModule, OverlayPanelModule],
  providers: [depositaccountService],
  templateUrl: './deposit-accounts.component.html',
  styleUrl: './deposit-accounts.component.scss'
})
export class DepositAccountsComponent {
  depositaccountlist!: depositaccountlist[];
  // PreferredLiquidityDashboard!: clientlist[];
  // preferredFilterEnable:boolean = false;
  showHysaInfo: boolean = false;
  showSBLRateInfo:boolean = false;
  searchExpanded:boolean = false;
  togglePresetFilterStatus:boolean = false;
  items: MenuItem[] | undefined;
 
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
       {
          header: 'Client Name',
          field: 'clientname'
       },
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

  constructor(private depositaccountService: depositaccountService) {}

  ngOnInit() {
      this.depositaccountService.getDepositAccountMini().then((data) => {
          this.depositaccountlist = data;
          // this.PreferredLiquidityDashboard = data;
          this._selectedTableColoumns = this.tableColumns;
      });
      // this.items = [
      //     {
      //         label: '',
      //         items: [
      //             {
      //                 label: 'Export To Excel',
      //                 icon: 'pi pi-file-excel'
      //             },
      //             {
      //                 label: 'Column Selection',
      //                 icon: 'pi pi-table'
      //             }
      //         ]
              
      //     }
      // ];
      
  }
  // preferredRow(liquidity: LiquidityDashboard){
  //     this.LiquidityDashboard.forEach((item)=>{
  //         if(item.id === liquidity.id) {
  //             item.preferred = !item.preferred
  //         }
  //     })
  // }
  // showPreferred(){
  //     if(this.preferredFilterEnable) {
  //         this.LiquidityDashboard = this.PreferredLiquidityDashboard
  //     } else {
  //         this.LiquidityDashboard = this.PreferredLiquidityDashboard.filter((item)=>{
  //             return item.preferred
  //         })
  //     }
  //     this.preferredFilterEnable = !this.preferredFilterEnable
  // }

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
