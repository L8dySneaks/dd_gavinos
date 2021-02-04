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

  public couponStatus: string = 'New';

  public coupons = ['Pizza Special', 'Hoagie Special', 'Pop Special'];

  constructor() {
    setTimeout(() => {
      this.allowNewCoupon = true;
    }, 2000);

    this.couponStatus = Math.random() > 0.5 ? 'New' :  'Last Chance';
  }

  ngOnInit() {
  }

  public onCreateCoupon() {
    this.couponCreated = true;
    this.coupons.push(this.couponName);
    this.couponCreationStatus = 'New coupon created : ' + this.couponName;

  }

  public onUpdateCoupon(event: Event) {
    this.couponName = (<HTMLInputElement>event.target).value;
  }

  public getColor() {
    return this.couponStatus === 'New' ? 'green' : 'red';
  }

}
