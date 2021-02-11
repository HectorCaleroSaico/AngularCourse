import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
    heroes: string[] = ['Iron-Man', 'Spider-Man', 'Batman', 'Thor', 'Green Lantern'];
    heroesDeleted: string[] = []

    deleteHero = (): void => {
      const width: number = this.heroes.length
      if(width!=0){
        const randomId: number = Math.floor(Math.random()*width)
        this.heroesDeleted.push(this.heroes[randomId])
        this.heroes.splice(randomId, 1)
      }else{
        alert('No more Heroes!!!')
      }
    }
}

