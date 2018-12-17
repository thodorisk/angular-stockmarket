import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnChanges {

  @Input() stock: any;
  public isNegative: boolean = false;
  public isPositive: boolean = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.stock)
      this.checkStock();
  }

  checkStock() {
    if (this.stock && this.stock.change < 0)
      this.isNegative = true;
    else if (this.stock && this.stock.change > 0)
      this.isPositive = true;
  }
}
