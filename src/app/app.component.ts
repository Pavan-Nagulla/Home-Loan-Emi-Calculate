import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emi';

  public P: number = 10000;
  public r:number = 10.25;
  public n:number = 1;
  public EMI: number =0;

  public Amountchange(e:any){
    this.P = e.target.value;
  }

  public Yearchange(e:any){
    this.n = e.target.value;
  }

  public Ratechange(e:any){
    this.r = e.target.value;
  }

  public CalculateClick(){
    var n = this.n * 12;
    var r = this.r / 12 / 100;
    this.EMI = this.P * r * Math.pow(1 + r, n) / Math.pow(1+ r, n) - 1;
  }




}
