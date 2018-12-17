import { Component, OnInit } from '@angular/core';
import { StockInterface, StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public stocks: Array<StockInterface>;
  public symbols: Array<string>;

  constructor(private _service: StocksService) {}

  ngOnInit() {
    this.symbols = this._service.get();
    this._service.load(this.symbols)
      .subscribe(stocks => this.stocks = stocks);
  }
}