import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { PrisustvoService } from 'src/app/services/prisustvo/prisustvo.service';
Chart.register(...registerables);

interface CasData {
  cas_id: number;
  casCount: number;
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})

export class ChartComponent implements AfterViewInit, OnInit, OnChanges {

  @Input() idPredmeta!: number;
  @Input() brojStudenata!:number;
  podaci: CasData[] = [];
  newPredmetValue!: number;
  @ViewChild('canvas') canvas!: ElementRef;
  private chartInstance: Chart | null = null;

  constructor(private prisustvoService: PrisustvoService) {}

  ngOnInit() {
    if (!this.newPredmetValue) {
      this.newPredmetValue = this.idPredmeta;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('idPredmeta' in changes) {
      this.newPredmetValue = changes['idPredmeta'].currentValue;
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }
      this.create();
    }
  }

  ngAfterViewInit() {}

  create() {
    this.prisustvoService.posecenostNaCasovima(this.newPredmetValue).subscribe((data) => {
      this.podaci = data.map((item) => ({
        cas_id: item.cas_id,
        casCount: item.casCount
      }));

      let last10CasIds: string[] = [];
      let last10CasCounts: number[] = [];
      const numberOfItemsToTake = 10;

      if (this.podaci.length >= numberOfItemsToTake) {
        last10CasIds = this.podaci.slice(-numberOfItemsToTake).map((item) => item.cas_id.toString());
        last10CasCounts = this.podaci.slice(-numberOfItemsToTake).map((item) => item.casCount);
      } else {
        last10CasIds = [...this.podaci.map((item) => item.cas_id.toString()), ...Array(numberOfItemsToTake - this.podaci.length).fill('')];
        last10CasCounts = [
          ...this.podaci.map((item) => item.casCount),
          ...Array(numberOfItemsToTake - this.podaci.length).fill(0)
        ];
      }

      // Destroy previous chart instance if it exists
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }

      this.chartInstance = new Chart(this.canvas.nativeElement.getContext('2d'), {
        type: 'bar',
        data: {
          labels: last10CasIds,
          datasets: [{
            label: '',
            data: last10CasCounts,
            backgroundColor: '#c2185c63',
            borderColor: '#c2185b',
            borderWidth: 1,
          }]
        },
        options: {
          
          scales: {

            x:{
              grid: {
                color: 'rgba(255, 255, 255, 0.200)' // Boja mreže y-ose
              },
              ticks: {
                color: 'rgba(255, 255, 255, 0.400)'},
                title: {
                    display: true,
                    text: 'Poslednjih 10 časova',
                    color:'rgba(255, 255, 255, 0.600)' // Postavite željeni tekst za labelu x ose
                  }

            },
            y: {
              beginAtZero: true,
              max: this.brojStudenata, 
              grid: {
                color: 'rgba(255, 255, 255, 0.200)' // Boja mreže y-ose
              },
              ticks: {
                color: 'rgba(255, 255, 255, 0.400)',
                stepSize: 1, // This ensures only whole numbers are displayed
              }
            }
          }
        }
      });
    });
  }
  
  // @Input() idPredmeta!: number;
  // podaci:CasData[]=[];
  // constructor(private prisustvoService:PrisustvoService){}
  // myChart=[];
  // newPredmetValue!:number;

  // @ViewChild('canvas') canvas!: ElementRef;
  // private chartInstance: Chart | null = null;


  // ngOnInit() {
  //   if(!this.newPredmetValue){
  //     this.newPredmetValue=this.idPredmeta;
  //   }
  // }

  //   ngOnChanges(changes: SimpleChanges) {
  //   if ('idPredmeta' in changes) {
  //     // Ovde možete reagovati na promenu vrednosti tmp
  //     this.newPredmetValue = changes['idPredmeta'].currentValue;
  //     this.create();
  //   }
  // }

  // ngAfterViewInit(){}

  // create(){

  //  this.prisustvoService.posecenostNaCasovima(this.newPredmetValue).subscribe((data) => {
  //     this.podaci = data.map((item) => ({
  //       cas_id: item.cas_id,
  //       casCount: item.casCount
  //     }));
      
  //     let last10CasIds: string[] = [];
  //     let last10CasCounts: number[] = []
  //     const numberOfItemsToTake = 10;

  //     if (this.podaci.length >= numberOfItemsToTake) {
  //       last10CasIds = this.podaci.slice(-numberOfItemsToTake).map((item) => item.cas_id.toString());
  //       last10CasCounts = this.podaci.slice(-numberOfItemsToTake).map((item) => item.casCount);
  //     } else {
  //       last10CasIds = [...this.podaci.map((item) => item.cas_id.toString()), ...Array(numberOfItemsToTake - this.podaci.length).fill('')];
  //       last10CasCounts = [
  //         ...this.podaci.map((item) => item.casCount),
  //         ...Array(numberOfItemsToTake - this.podaci.length).fill(0)
  //       ];
  //     }

  //     if (this.chartInstance) {
  //     this.chartInstance.destroy();
  //   }
    

  //     this.chartInstance = new Chart(this.canvas.nativeElement.getContext('2d'), {
  //       type: 'bar',
  //       data: {
  //           labels: last10CasIds,
  //           datasets: [{
  //               label: '# of Votes',
  //               data: last10CasCounts,
  //               backgroundColor: //[
  //                   'rgba(255, 99, 132, 0.2)'
  //                   // ,
  //                   // 'rgba(54, 162, 235, 0.2)',
  //                   // 'rgba(255, 206, 86, 0.2)',
  //                   // 'rgba(75, 192, 192, 0.2)',
  //                   // 'rgba(153, 102, 255, 0.2)',
  //                   // 'rgba(255, 159, 64, 0.2)'
  //               //]
  //               ,
  //               borderColor: //[
  //                   'rgba(255, 99, 132, 1)'
  //                   // ,
  //                   // 'rgba(54, 162, 235, 1)',
  //                   // 'rgba(255, 206, 86, 1)',
  //                   // 'rgba(75, 192, 192, 1)',
  //                   // 'rgba(153, 102, 255, 1)',
  //                   // 'rgba(255, 159, 64, 1)'
  //             // ]
  //               ,
  //               borderWidth: 1
  //           }]
  //         },
  //         options: {
  //             scales: {
  //                 y: {
  //                     beginAtZero: true
  //                 }
  //             }
  //         }
  //     });
  //     });
   
  //}
}
