import { Component, OnDestroy, OnInit } from '@angular/core';
import { SingleSpaProps, singleSpaPropsSubject } from 'src/single-spa/single-spa-props';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'music-app';
  singleSpaProps: SingleSpaProps;
  subscription: Subscription;
  ngOnInit(): void {
    this.subscription = singleSpaPropsSubject.subscribe(
      props => (this.singleSpaProps = props),
    );
    console.log("==>", this.singleSpaProps)
    console.log(this.singleSpaProps.getToken('bcd'))
    
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  // OR if you don't need to access `singleSpaProps` inside the component
  // then create `Observable` property and use it in template with `async` pipe.
  singleSpaProps$ = singleSpaPropsSubject.asObservable();
}
