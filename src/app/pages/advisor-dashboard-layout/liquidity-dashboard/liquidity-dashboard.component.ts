import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// // Prime ng Import
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TabViewModule } from 'primeng/tabview';
import { LiquidityDashboard } from '../../../domain/liquiditydasboard';
import { LiquidityDashboardService } from '../../../services/liquiditydashboardservice';

type Column = { header: string; field: string; tooltip?: string; }


@Component({
  selector: 'app-liquidity-dashboard',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,ButtonModule,TableModule,DropdownModule,TooltipModule,CommonModule,TagModule,DialogModule,
    IconFieldModule,InputIconModule,InputTextModule,MenuModule,AccordionModule,CheckboxModule, OverlayPanelModule, TabViewModule,DividerModule],
  providers: [LiquidityDashboardService],
  templateUrl: './liquidity-dashboard.component.html',
  styleUrl: './liquidity-dashboard.component.scss'
})
export class LiquidityDashboardComponent {
    LiquidityDashboard!: LiquidityDashboard[];
    PreferredLiquidityDashboard!: LiquidityDashboard[];
    preferredFilterEnable:boolean = false;
    showHysaInfo: boolean = false;
    showSBLRateInfo:boolean = false;
    searchExpanded:boolean = false;
    togglePresetFilterStatus:boolean = false;
    items: MenuItem[] | undefined;
    prefferedIcon:boolean = false;
    isDataFetch:boolean = false
    // tableColoumns = [{name:'Institution',value:'institution'},{name:'Hysarate',value:'hysarate'},
    //     {name:'Hysalimit',value:'hysalimit'},{name:'Sblrate',value:'sblrate'}
    // ]
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
            header: 'HYSA A',
            field: 'sbl'
         },
         {
            header: 'HYSA B',
            field: 'CDs'
         },
         {
            header: 'HYSA C',
            field: 'brandedcc',
            tooltip: 'Branded Credit Card'
         },
         {
            header: 'HYSA D',
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

    constructor(private productService: LiquidityDashboardService) {}

    ngOnInit() {
        this.isDataFetch = true;
        this.productService.getProductsMini().then((data) => {
            setTimeout(()=>{
                this.isDataFetch = false;
            }, 2000)
            
            this.LiquidityDashboard = data;
            this.PreferredLiquidityDashboard = data;
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
    preferredRow(liquidity: LiquidityDashboard){
        this.LiquidityDashboard.forEach((item)=>{
            if(item.id === liquidity.id) {
                item.preferred = !item.preferred
            }
        })
    }
    showPreferred(){
        if(this.preferredFilterEnable) {
            this.LiquidityDashboard = this.PreferredLiquidityDashboard
        } else {
            this.LiquidityDashboard = this.PreferredLiquidityDashboard.filter((item)=>{
                return item.preferred
            })
        }
        this.preferredFilterEnable = !this.preferredFilterEnable;
        this.prefferedIcon = !this.prefferedIcon;
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
