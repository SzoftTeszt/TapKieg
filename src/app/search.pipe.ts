import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(tapkiegek:any[],kereses:string): any {
    if (!tapkiegek) return null;
    if (!kereses) return tapkiegek
    kereses=kereses.toLowerCase()
    console.log("Keresés", kereses)
    return tapkiegek.filter(
      (mereg:any)=>{ 
        console.log(mereg)
        return mereg.name.toLowerCase().includes(kereses) ||
          mereg.description.toLowerCase().includes(kereses)
        
      }
    )

  }

}
