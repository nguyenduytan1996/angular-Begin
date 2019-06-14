import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
  providers: [ ProductAlertsComponent ]
})
export class ProductAlertsComponent implements OnInit {

  @Input() productAlert;
  @Output() notifyAlert = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onHandleClick() {
    this.notifyAlert.emit();
    window.alert('--- TEST ---> ALERT <---');
  }

}
