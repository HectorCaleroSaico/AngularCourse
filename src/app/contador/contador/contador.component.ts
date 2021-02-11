import { Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ title }}</h1>
        <button (click)="handleCount(-base)">- {{ base }}</button>
        <span> {{ numberInit }} </span>
        <button (click)="handleCount(+base)">+ {{ base }}</button>
        <h3>La base es: <strong> {{ base }} </strong></h3>
    `
})
export class ContadorComponent {
    title: string = 'Contador App';
    numberInit: number = 0;
    numberWrong: string = ''
    base: number = 5;
    
    //handleMinum = () => this.numberInit -= 1
    //handlePlus = () => this.numberInit += 1
    
    handleCount = (value: number) => {
        const aux: number = this.numberInit + value
        if(aux<0){
            this.numberWrong = "{'color': red}"
        }else{
            this.numberWrong = ""
            this.numberInit = aux
        }
    }
}