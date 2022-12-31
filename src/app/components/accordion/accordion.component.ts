import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  public bloquesData: any = {}
  public statusCount: number[] = [];
  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.bloquesData = this.ds.loadData();
    console.log(this.bloquesData)
    this.pendingActivityCounter();
  }

  pendingActivityCounter(): void{
    let aux = 0
    for (let e of this.bloquesData){
      aux = 0
      for (let data of e.ordenServicio){
        if(data.ul_status_uc == ''){
          aux = aux + 1
        }
      }
      this.statusCount.push(aux)
    }
  }
}
