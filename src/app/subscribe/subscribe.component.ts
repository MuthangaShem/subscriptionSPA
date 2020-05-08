import { PricingService } from './../../services/Pricing.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  pricingPlans = [];
  constructor(private pricingService: PricingService, private router: Router) { }

  ngOnInit() {
    this.fetchPricingPlans();
  }

  fetchPricingPlans() {
    this.pricingService.getAllPricingPlans().subscribe(data => {
      this.pricingPlans = data;
    })
  }

  subscribe(id: number, planName: string) {
    if (confirm('Subscribe to ' + planName + '?')) {
      this.pricingService.subscribeToPlan(id, planName)
        .subscribe((data) => {
          console.log('successfully subscribed', data);
          this.Redirect();
        });
    }
  }

  Redirect() {
    this.router.navigate(['/success']);
  }
}
