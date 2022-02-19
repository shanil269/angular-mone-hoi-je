import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  cardNumber: number = 0;
  formattedDate: string = '';
  cvvNumber: number = 0;
  amount: number = 0;
  convertedCurrency: number = 0;

  onNameChange(value: string) {
    this.name = value;
  }
  onCardNumberChange(value: string) {
    this.cardNumber = parseFloat(value);
  }
  onDateChange(value: string) {
    this.formattedDate = value;
  }
  onCvvNumberChange(value: string) {
    this.cvvNumber = parseFloat(value);
  }
  onAmountChange(value: string) {
    this.amount = parseFloat(value);
  }
  onConvertedCurrencyChange(value: string) {
    this.convertedCurrency = parseFloat(value);
  }
}
