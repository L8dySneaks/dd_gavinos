import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent implements OnInit {

  public allowNewCoupon = false;
  public couponCreationStatus = 'No coupon was created.'
  public couponName = 'Test Coupon';

  public couponCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewCoupon = true;
    }, 2000);
  }

  ngOnInit() {
  }

  public onCreateCoupon() {
    this.couponCreated = true;
    this.couponCreationStatus = 'New coupon created : ' + this.couponName;

  }

  public onUpdateCoupon(event: Event) {
    this.couponName = (<HTMLInputElement>event.target).value;
  }

}
