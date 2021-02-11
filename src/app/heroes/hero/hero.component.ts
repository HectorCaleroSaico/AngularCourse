import { Component } from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent {
    name: string = 'Iron-Man';
    age: number = 45;

    get nameCapitalize(): string {
        return this.name.toUpperCase();
    }

    getName = (): string => {
        return `${ this.name } - ${ this.age }`
    }

    changeHero = (): void => {
        this.name = 'Spider-Man'
    }

    changeAge = (): void => {
        this.age = 30;
    }
}