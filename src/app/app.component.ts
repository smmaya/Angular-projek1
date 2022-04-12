import { Component, OnInit } from '@angular/core';
import { Osoba } from './app.osoba';
import { DaneOsobowe } from './dane-osobowe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'projekt1';
  // liczba1: number; // trzeba przypisać wartości
  // liczba2 = 4;
  // tekst1: string; // trzeba przypisać wartości
  // tekst2 = 'Ala ma kota';
  // isPrawda1: boolean; // trzeba przypisać wartości
  // isPrawda2 = false;
  // coKolwiek: any;
  aktualnaGodzina: Date = new Date(); // aktualny czas tablica1: Array<number> = new Array<number>();
  // aktualnaData: Date = new Date();
  // tablica2: Array<string>; // trzeba przypisać wartości
  // tablica3: number[] = [1, 2, 4, 4, 7]; // number[] równoważny z Array<number>
  // tablica4: string[] = []; // trzeba przypisać wartości tablicaAny1: Array<any> = new Array<any>();
  // tablicaAny1 = this.tablica3;
  // tablicaAny2 = [1, 'aaa', true, false, 555, null];
  // zmienna2: any;

  // // ngOnInit(): void {
  // //   this.liczba1 = 99.4;
  // //   console.log('liczba1', this.liczba1);
  // //   console.log('liczba2', this.liczba2);
  // //   this.tekst1 = 'Kot ma Alę';
  // //   console.log('tekst1', this.tekst1);
  // //   console.log('tekst2', this.tekst2);
  // //   this.isPrawda1 = true;
  // //   console.log('isPrawda1', this.isPrawda1);
  // //   console.log('isPrawda2', this.isPrawda2);
  // //   this.coKolwiek = false;
  // //   console.log('coKolwiek', this.coKolwiek);
  // //   this.coKolwiek = 11;
  // //   console.log('coKolwiek', this.coKolwiek);
  // //   this.coKolwiek = 'Adam Mickiewicz';
  // //   console.log('coKolwiek', this.coKolwiek);
  // //   console.log('Aktualna godzina', this.aktualnaGodzina.toTimeString());
  // //   console.log('Aktualna data', this.aktualnaData.toLocaleString());
  // //   this.tablica2 = ['Ala', 'Ola', 'Ben'];
  // //   console.log('Tablica stringów', this.tablica2);
  // //   console.log('Tablica stringów', this.tablica3);
  // //   this.tablica4 = ['To', 'jest', 'tablica', 'stringów'];
  // //   console.log('Tablica stringów po inicjacji', this.tablica4);
  // //   console.log('Przypisana tablica3', this.tablicaAny1);
  // // }

  // ngOnInit(): void {
  //   console.log('Witaj świecie!!!');
  //   console.log(this.title);

  //   const x = 5;
  //   const y = 5;
  //   console.log(`${x} plus ${y} = ${x + y}`);
  //   console.log(`${x} minus ${y} = ${x - y}`);
  //   console.log(`${x} razy ${y} = ${x * y}`);
  //   console.log(`${x} dzielone przez ${y} = ${x / y}`);

  //   const stala = 'to jest stała której już nie idzie zmienić';
  //   console.log('stala:', stala);
  //   let zmienna1 = '';

  //   zmienna1 = 'Pusty tekst';
  //   this.zmienna2 = 'to jest zmienna którą można zmieniać w obrębie metody';
  //   console.log('zmienna1:', zmienna1);

  //   const tekstLaczony = `przykładowy tekst ${zmienna1}, przykładowy teskt ${this.zmienna2} koniec`;
  //   console.log(tekstLaczony);
  //   console.log(`przykładowy tekst ${zmienna1} przykładowy teskt ${this.zmienna2} koniec`);
  //   console.log(`Połączony tekst z dodawaniem: ${x} dodać ${y} daje nam ${x + y}`);
  // }

  // ngOnInit(): void {
  //   this.wpiszTekst1();
  //   this.wpiszTekst2();

  //   const imie = 'Sławek';
  //   const nazwisko = 'Majchrzak';
  //   const wiek = 49;
  //   console.log(this.wpiszDane(`${imie}, ${nazwisko}, ${wiek}`));
  //   console.log(this.wpiszDane(`${imie} ${nazwisko}`));

  //   const inputTekst = 'Wypisuje tekst z metody wpiszTekst ';
  //   this.wpiszTekst2(inputTekst);
  //   console.log(this.wpiszTekst3(inputTekst));

  //   const a = 10;
  //   const b = 9;
  //   const tekst = `${a} + ${b} = `;
  //   console.log(tekst + this.obliczAplusB(a + b));
  // }

  //   obliczAplusB(value?: number): number {
  //     return value;
  //   }

  //   wpiszDane(value?: string): string {
  //   return value;
  //   }

  //   wpiszTekst1(): void {
  //   console.log('Wypisuje tekst z metody wpiszTekst 1');
  //   }

  //   wpiszTekst2(value?: string): void {
  //     if (value) {
  //         console.log(value + '2');
  //       } else {
  //         console.log('wpiszTekst ' + '2');
  //       }
  //   }
  //   wpiszTekst3(value: string): string {
  //   return value + '3'; }

  // // deklaracja zmiennych
  // liczba1: number;
  // text1: string;
  // isDisable1: boolean;
  // // deklaracja z inicjalizacją
  // liczba2 = 6;
  // text2 = 'moj tekst';
  // isDisable2 = false;
  // // tablice  pare sposobów na deklaracje
  // tablica1: Array<string>;
  // tablica3 = [];
  // tablica2: Array<any> = new Array<any>();
  // tablica4 = [1, 2, 3, true, 'moj tekst'];

  // // zadanie 1
  // imie = 'Sławomir';
  // nazwisko = 'Majchrzak';
  // wiek = 49;

  // pesel = '75121968629';

  // constructor() {
  //   this.tablica1 = new Array<string>('Alfa', 'Omega');
  // }
  // ngOnInit() {
  //   // console log wyświetla wartość w konsoli przeglądarki
  //   console.log('liczba2:', this.liczba2);
  //   this.liczba1 = 1;
  //   this.liczba1 += 1;
  //   this.liczba1 += 1 + 2;
  //   console.log('liczba1:', this.liczba1);
  //   // Wywołanie funkcji
  //   this.wyswietlText1('a');
  //   this.isDisable2 = this.aktywne();
  //   this.wyswietlText1('b');
  //   console.log(this.tablica1);
  //   console.log(this.zbierzDoKupy());

  //   console.log('Przykładowy PESEL jako string: ' + this.pesel);
  //   const tab = this.pesel.split('');
  //   console.log('String to tablicy: ' + tab);
  //   // tslint:disable-next-line: only-arrow-functions
  //   const przedOstatnia = tab.slice(-2).map(function(item) {
  //     return parseInt(item, 10);
  //   }).reduce((a, b) => a + b, 0);

  //   console.log('Dwie ostatnie liczby: ' + tab.slice(-2));
  //   function test() {
  //     // tslint:disable-next-line: triple-equals
  //     if (przedOstatnia % 2 == 0) {
  //       return true + ' - liczba jest parzysta';
  //     } else {
  //       return false + ' - liczba jest nieparzysta';
  //     }
  //   }
  //   console.log('Suma dwóch ostatnich liczb: ' + przedOstatnia);
  //   console.log(test());
  // }
  // // Metoda
  // wyswietlText1(value: string): void {
  //   if (this.isDisable2 === true) {
  //     console.log('tablica ' + value, this.tablica4);
  //   } else {
  //     console.log('brak danych');
  //   }
  // }

  // aktywne(): boolean {
  //   return true;
  // }

  // zbierzDoKupy() {
  //   return 'Pracownik: ' + this.imie + ' ' + this.nazwisko + ', wiek: ' + this.wiek;
  // }

  osoba: Osoba;
  mojTyp: DaneOsobowe = {
    id: 10,
    imie: 'Roman',
    nazwisko: 'Nowak'
  };

  // deklaracja
  // inicjalizacja zmiennej bez określenia jej typu
  listaOsoba1: Osoba[] = []; // deklaracja i inicjalizacja pustą tablicą
  listaOsoba2: Osoba[] = [ // deklaracja z inicjalizacją
    {
      id: 23,
        imie: 'Bożena'
    },
    {
      id: 34,
        imie: 'Dorota'
    },
    {
      id: 55,
        imie: 'Wojciech'
    },
      this.mojTyp
    ];

    listaOsoba3: DaneOsobowe[] = [];

    constructor() { }

    ngOnInit() {
      this.initOsoby();
      console.log('osoba', this.osoba);
      console.log('listaOsoba1', this.listaOsoba1);
      console.log('listaOsoba2', this.listaOsoba2);
      if (this.listaOsoba1.length < 4) {
          console.log(false);
        } else if (this.listaOsoba1.length > 4) {
          console.log(true);
        } else {
          console.log('lista osób = 4');
        }

      const osoba4: DaneOsobowe = {
        id: 22,
        imie: 'Steven',
        nazwisko: 'Harper',
        wiek: 33,
        czyZyje: true,
        seks: 'male'
      };
      const osoba5: DaneOsobowe = {
        id: 25,
        imie: 'Laura',
        nazwisko: 'Bielski',
        wiek: 23,
        czyZyje: true,
        seks: 'female'
      };
      const osoba6: DaneOsobowe = {
        id: 45,
        imie: 'Paweł',
        nazwisko: 'Torbacz',
        wiek: 55,
        czyZyje: true,
        seks: 'male'
      };

      this.listaOsoba3.push(osoba4);
      this.listaOsoba3.push(osoba5);
      this.listaOsoba3.push(osoba6);

      for (const osoba of this.listaOsoba3) {
        console.log('id: ', osoba.id, 'Imię: ', osoba.imie, 'Nazwisko: ',
        osoba.nazwisko, 'Wiek: ', osoba.wiek, 'Żyjąca?', osoba.czyZyje, 'Seks: ', osoba.seks);
        }

      }

  initOsoby() { // metoda inicjalizująca dane
    this.osoba = new Osoba();
    this.osoba.id = 1;
    this.osoba.imie = 'Karol';
    this.listaOsoba1.push(this.osoba);

    const osoba2 = new Osoba(); // const: stała osoba2.id = 2;
    osoba2.imie = 'Monika';
    this.listaOsoba1.push(osoba2);

    let osoba3 = new Osoba(); // let zmienna lokalna osoba3.id = 3;
    osoba3.imie = 'Piotr';
    this.listaOsoba1.push(osoba3);

    osoba3 = new Osoba();
    osoba3.id = 4;
    osoba3.imie = 'Teresa';
    this.listaOsoba1.push(osoba3);
  }

}
