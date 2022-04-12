import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motto',
  templateUrl: './motto.component.html',
  styleUrls: ['./motto.component.css']
})
export class MottoComponent implements OnInit {

  inputText = '';
  constructor() { }

  calculate(): any {
  const x = 2022;
  const y = 1973;
  const result: number = (x + y);
  return `${x} - ${y} = ${x - y}`;
  }

  ngOnInit(): void {
  }

  buttonClick() {
    console.log(this.inputText);
    document.getElementById('textBox').innerText = this.inputText;
  }

}
