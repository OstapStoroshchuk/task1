import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
  show = false;
  notShow = false;
  elsee = true;


  keyPress(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  addSpaces(value: any) {
    console.log(document.getElementById('creditCardNumber'));
    if (value.length === 4 || value.length === 9 || value.length === 14) {
      value += ' ';
    }
    return value;
  }

  checkCards(value: any) {
    let a = value;
    a = a.split(' ').join('');
    //  console.log(a.length);
    console.log(a);
    const masterCard = /^(?:5[1-5][0-9]{14})$/;
    const visa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    if (a.match(visa)) {
      // alert('Visa');
      this.show = true;
      this.notShow = false;
      this.elsee = false;
      return true;
    } else if (a.match(masterCard)) {
      // alert('MasterCard');
      this.show = false;
      this.notShow = true;
      this.elsee = false;
      return true;
    } else {
      alert('Not a valid Visa or Master Card credit card number!');
      this.show = false;
      this.notShow = false;
      this.elsee = true;
      return false;
    }
  }
}
