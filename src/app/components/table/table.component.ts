import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivitieM } from 'src/app/models/activities.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  titleTypeOfActivity!: string;

  constructor(private modalService: NgbModal) { }
  @Input() activities! : any[]
  ngOnInit(): void {
  }

  openFullscreen(content:any, activity:any) {
    this.modalService.open(content,{ fullscreen: true });
    this.titleTypeOfActivity = activity
  }

}
