import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  public bloquesData: any = {}
  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.bloquesData = this.ds.loadData();
    console.log(this.bloquesData)
  }

}
