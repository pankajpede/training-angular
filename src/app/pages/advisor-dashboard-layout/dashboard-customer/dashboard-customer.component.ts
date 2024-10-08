import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
// Account Details Service
import { AccountOpeningTrackerListService } from '../../../services/accountopeningtracker';
import { AccountOpeningTrackerList } from '../../../domain/accountopeningtracker';

// HYSA Account Overview
import { HysaAccountOverviewService } from '../../../services/hysaaccountoverview';
import { HysaAccountOverview } from '../../../domain/hysaaccountoverview';

// Liqidity rates
import { LiquidityRatesService } from '../../../services/liquidityrates';
import { LiquidityRates } from '../../../domain/liquidityrates';


// Cash FLow Summary
import { TransactionListService } from '../../../services/cashflowsumary';
import { TransactionList } from '../../../domain/cashflowsumary';

import * as echarts from 'echarts';
import { TimelineModule } from 'primeng/timeline';
import { DialogModule } from 'primeng/dialog';
type EChartsOption = echarts.EChartsOption;

type Column = { header: string; field: string; tooltip?: string; }

interface TrackerOption{
  name: string
}
interface TrackerType{
  name: string
}
interface TransactonType{
  name: string
}
@Component({
  selector: 'app-dashboard-customer',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,ButtonModule,CardModule,ButtonModule,TableModule,BadgeModule,
    OverlayPanelModule,BadgeModule,TagModule,TooltipModule,DropdownModule,IconFieldModule,InputIconModule,InputTextModule,
    MenuModule,CarouselModule,TimelineModule,DialogModule],
  providers: [AccountOpeningTrackerListService,HysaAccountOverviewService,LiquidityRatesService,TransactionListService],
  templateUrl: './dashboard-customer.component.html',
  styleUrl: './dashboard-customer.component.scss'
})
export class DashboardCustomerComponent {


    
  trackerSelection: TrackerOption[] | undefined;
  selectedTracker: TrackerOption | undefined;

  carouselOptions: any[] | undefined;

  trackerType: TrackerType[] | undefined;
  selectedTrackerType: TrackerType | undefined;

  transactonType:TransactonType[] | undefined;
  selectedTransactonType: TransactonType | undefined
  items: MenuItem[] | undefined;
  customMenuWrapper:boolean = false


  advisorComments: any[];
  showCommentsModal:boolean = false;
  
  trackerTypeCustomer:boolean = true
  private myChart:any = null;

    // Account Opening Tracker
    accountopeningtrackerlist!: AccountOpeningTrackerList[];
    accountopeningtrackerCount: any;
    accountopeningtrackerlistColumns: Column[] = [
        {
            header: 'Client Name',
            field: 'clientname'
        },
        {
            header: 'Progress',
            field: 'progress'
        },
    ]
    _selectedaccountopeningtrackerlistColumns: Column[] = [];

    get selectedaccountopeningtrackerlistColumns(): Column[] {
        return this._selectedaccountopeningtrackerlistColumns;
    }

    set selectedaccountopeningtrackerlistColumns(val: Column[]) {
        this._selectedaccountopeningtrackerlistColumns = this.selectedaccountopeningtrackerlistColumns.filter((col) => val.includes(col));
    }

    

  // HYSA Account Overview
  HysaAccountOverviewlist!: HysaAccountOverview[];
  HysaAccountCount: any;



    // Liqidity rates
    LiquidityRates!: LiquidityRates[];
    LiquidityRatesCount: any;
    LiquidityRatesColumns: Column[] = [
        {
            header: 'Rate',
            field: 'liqidityname'
        },
        {
            header: 'Latest',
            field: 'rate'
        },
    ]
    _selectedLiquidityRatesColumns: Column[] = [];

    get selectedLiquidityRatesColumns(): Column[] {
        return this._selectedLiquidityRatesColumns;
    }

    set selectedLiquidityRatesColumns(val: Column[]) {
      this._selectedLiquidityRatesColumns = this.selectedLiquidityRatesColumns.filter((col) => val.includes(col));
  }




    // Cash Flow Summary
    transactionlist!: TransactionList[];
    transactionlistCount: any;
    transactionlistColumns: Column[] = [
        {
          header: 'Client Name',
          field: 'clientname'
        },
        {
          header: 'Date',
          field: 'date'
        },
        {
          header: 'Transaction Type',
          field: 'transactiontype'
        },
        {
          header: 'Ammount',
          field: 'amount'
        },
        {
          header: 'Account',
          field: 'account'
        },
        {
          header: 'Notes',
          field: 'notes'
        },
        {
          header: 'Account Number',
          field: 'accnumber'
        },
    ]



    constructor(
      private AccountOpeningTrackerListService: AccountOpeningTrackerListService,
      private HysaAccountOverviewlistService: HysaAccountOverviewService,
      private LiquidityRatesService: LiquidityRatesService,
      private TransactionListService: TransactionListService,
    ) { 
      this.advisorComments = [
          { date: '15/10/2020 10:30', comment:'This account offers a competitive interest rate, helping you grow your savings faster than a regular savings account.' },
          { date: '15/10/2020 10:30', comment:'This HYSA offers competitive interest rates, higher than standard savings accounts, helping you grow your funds faster.' },
          { date: '15/10/2020 10:30', comment:'You can access your funds anytime with no penalties, giving you flexibility in managing your money.' },
          { date: '15/10/2020 10:30', comment:'You can access your funds anytime without penalties, offering the flexibility of withdrawals while still earning interest.' },
          { date: '15/10/2020 10:30', comment:'Your deposits are FDIC insured up to ₹5,00,000, providing security for your savings.' },
      ];
    }

  ngOnInit(): void {
    this.AccountOpeningTrackerListService.getAccountOpeningTracker().then((data) => {
        this.accountopeningtrackerlist = data;
        this._selectedaccountopeningtrackerlistColumns = this.selectedaccountopeningtrackerlistColumns;
        this.accountopeningtrackerCount = this.accountopeningtrackerlist.length;
    });
      
    this.HysaAccountOverviewlistService.getHysaAccountOverviewMini().then((data) => {
      this.HysaAccountOverviewlist = data;
      // this._selectedaccountopeningtrackerlistColumns = this.selectedaccountopeningtrackerlistColumns;
      this.HysaAccountCount = this.HysaAccountOverviewlist.length;
    });

    this.LiquidityRatesService.getLiquidityRates().then((data) => {
        this.LiquidityRates = data;
        this._selectedLiquidityRatesColumns = this.selectedLiquidityRatesColumns;
        this.LiquidityRatesCount = this.LiquidityRates.length;
    });


    this.TransactionListService.getTransactionList().then((data) => {
      this.transactionlist = data;
      this.transactionlistCount = this.transactionlist.length;
    });
      
    // this.trackerSelection = [
    //   { name: 'In Progress'},
    //   { name: 'Failed'},
    // ];
    // this.selectedTracker = this.trackerSelection[0];

    this.trackerType = [
      { name: 'My Queue'},
      { name: 'Customer Queue'},
    ];
    this.selectedTrackerType = this.trackerType[0];

    this.transactonType = [
      {name: 'Pending'},
      {name: 'Failed'},
      {name: 'Recent 10'},
    ];
    this.selectedTransactonType = this.transactonType[0]

    this.items = [
      {
          label: 'Refresh',
          icon: 'pi pi-refresh'
      },
      {
          label: 'Search',
          icon: 'pi pi-search'
      },
      {
          separator: true
      },
      {
          label: 'Delete',
          icon: 'pi pi-times'
      }
    ];

    this.carouselOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];

    // this.stackedBarChart();
    this.cashFlowSummary();
    // this.accountSummaryChart()
  }

  // private accountSummaryChart():void{
  //   this.myChart = echarts.init((document.getElementById('accountSummaryChart')) as any);
  //   var option;
  //   option = {
  //     title: [
  //       {
  //         // text: 'Accounts Opened Summary',
  //         subtext: 'Accounts Opened Summary',
  //         top: 'bottom',
  //         left: 'center',
  //         bottom:0,
  //         padding:20
  //       }
  //     ],
  //     polar: {
  //       radius: [20, '85%']
  //     },
  //     angleAxis: {
  //       max: 80,
  //       startAngle: 90,
  //       splitLine: {
  //         lineStyle: {
  //             color: '#f5f5f5'
  //         }
  //       }
  //     },
  //     radiusAxis: {
  //       type: 'category',
  //       data: ['Yesterday', 'Week to Day', 'Month to Day', '1 Quarter', '2 Quarter', '3 Quarter', '1 Year'],
  //     },
  //     tooltip: {},
  //     dataZoom: [
  //       {
  //         type: 'inside'
  //       }
  //     ],
  //     series: {
  //       type: 'bar',
  //       data: [1, 3, 10, 19, 31, 45, 69],
  //       coordinateSystem: 'polar',
  //       label: {
  //         show: true,
  //         position: 'middle',
  //       },
  //       color: ['#01205f'],
  //       itemStyle: {
  //         borderColor: '#01205f',
  //         borderWidth: 1
  //       },
  //       roundCap: true
  //     },
  //     // colors: {
  //     //   0: '#e0e3f4',
  //     //   1: '#cad6ef',
  //     //   2: '#abc1f1',
  //     //   3: '#7a9be1',
  //     //   4: '#4871c6',
  //     //   5: '#154098',
  //     //   6: '#01205f',
  //     //   7: '#abc1f1',
  //     // }
  //   };
    
  //   this.myChart.setOption(option);
  // }

  // private stackedBarChart(): void{
  //   this.myChart = echarts.init((document.getElementById('stackedBarChart')) as any);
  //   //var chartDom = document.getElementById('main');
  //   // var myChart = echarts.init(chartDom);
  //   var option;
  //   option = {
  //     title: [
  //       {
  //         subtext: 'Top 10 Client Balances',
  //         top: 'bottom',
  //         left: 'center',
  //         padding:10
  //       }
  //     ],
  //     dataset: [
  //       {
  //         dimensions: ['name', 'age', 'profession', 'score', 'date'],
  //         source: [
  //           ['Mr. John Barnes', 41, 'Engineer', 185000, '2011-02-12'],
  //           ['Mr. Charles Smith', 20, 'Teacher', 250000, '2011-03-01'],
  //           ['Mrs. Beth Smith ', 52, 'Musician', 150000, '2011-02-14'],
  //           ['Mr. Andrew Lee', 37, 'Teacher', 75000, '2011-02-18'],
  //           ['Mrs Ana Watson', 25, 'Engineer', 200000, '2011-04-02'],
  //           ['Mr. Kim Joe', 19, 'Teacher', 75000, '2011-01-16'],
  //           ['Mrs. Leena Lee', 71, 'Engineer', 150000, '2011-03-19'],
  //           ['Mr. Bohm Peter', 36, 'Musician', 65000, '2011-02-24'],
  //           ['Mr. Han Meimei', 67, 'Engineer', 100000, '2011-03-12']
  //         ]
  //       },
  //       {
  //         transform: {
  //           type: 'sort',
  //           config: { dimension: 'score', order: 'desc' }
  //         }
  //       }
  //     ],
  //     xAxis: {
  //       type: 'category',
  //       axisLabel: { interval: 0, rotate: 30 },
  //     },
  //     yAxis: {
  //       splitLine: {
  //         lineStyle: {
  //             color: '#f5f5f5'
  //         }
  //       }
  //     },
  //     dataZoom: [
  //       {
  //         type: 'inside'
  //       }
  //     ],
  //     series: {
  //       type: 'bar',
  //       encode: { x: 'name', y: 'score' },
  //       datasetIndex: 1,
  //       color: '#01205f',
  //     },

  //     };
    
    
  //   //   myChart.setOption<echarts.EChartsOption>(option);

  //   this.myChart.setOption(option);
  // }
  
  private cashFlowSummary(): void{

    this.myChart = echarts.init((document.getElementById('cashFlowSummary')) as any);
    var option;
    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
      ],
      yAxis: [
        {
          type: 'value',
          show: true,
          splitLine: {
            lineStyle: {
                color: '#f5f5f5'
            }
          }
        },
      ],
      
      dataZoom: [
        {
          type: 'inside'
        }
      ],
      series: [
        {
          name: 'Inflows',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          data: [75000, 125000, 90000, 50000, 75000, 127000, 75000, 125000, 90000, 50000, 150000, 75000,],
          color: '#01205f',
          // label: {
          //   show: true,
          //   position: 'top',
          // },
        },
        {
          name: 'Outflows',
          type: 'bar',
          stack: 'Ad',
          data: [25000, 19000, 20000, 1500, 12000, 24000, 20000, 1500, 12000, 10000, 10000, 24000, ],
          emphasis: {
            focus: 'series'
          },
          markLine: {
            lineStyle: {
              type: 'dashed'
            },
            data: [[{ type: 'min' }, { type: 'max' }]],
            color: '#2B3674',
          },
          color: '#98bdf9',
          // label: {
          //   show: true,
          //   position: 'middle',
          // },
        },
      ]
    };
    
    
    
    this.myChart.setOption(option);
  }
  trackerTypeChange(){
    // this.trackerTypeCustomer = !this.trackerTypeCustomer;

    if(this.selectedTrackerType?.name == 'My Queue' ){
      this.trackerTypeCustomer = true
    }
    else{
      this.trackerTypeCustomer = false
    }
  }
  customToggleMenu(){
    this.customMenuWrapper = !this.customMenuWrapper;
  }
}
