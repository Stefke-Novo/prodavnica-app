import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Prodavnica } from 'src/app/klase/Prodavnica/prodavnica';
import { MarketService } from 'src/app/servisi/market/market.service';

@Component({
  selector: 'app-select-markets',
  templateUrl: './select-markets.page.html',
  styleUrls: ['./select-markets.page.scss'],
})
export class SelectMarketsPage implements OnInit {

  constructor(public marketService:MarketService) { 
  }
  private subscription=new Subscription();
   @ViewChild('marketSearch') ionSearchbar:any;
  private observable=new Observable((observer)=>{
    document.getElementById("marketSearch")?.addEventListener('input',()=>{observer.next(this.ionSearchbar.value.toString());});
  });
  ngOnInit(): void {
  }
  funkcija1(parametar:Prodavnica):void{
    this.subscription.unsubscribe();
    this.marketService.ubaciUSelection1(parametar);
  }
  pretrazi(){
    this.subscription=this.observable.subscribe((value)=>{this.marketService.potrazi(value)});
  }

}