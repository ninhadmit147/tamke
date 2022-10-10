import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web17103';

  products = [
    { id: 1, name: "Prod 1" },
    { id: 2, name: "Prod 2" },
  ]
  // onProductName(newItem: any) {
  //   this.names.push
  // }
}
