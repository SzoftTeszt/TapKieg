import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  refTapKieg:AngularFireList<any>

  constructor(private db: AngularFireDatabase) {
    this.refTapKieg=db.list('/products')
   }

   addProduct(tapKieg:any){
    this.refTapKieg.push(tapKieg)
   }

   getProducts(){
    return this.refTapKieg
   }

   deleteProduct(tapKieg:any){
    this.refTapKieg.remove(tapKieg.key)
   }

   updateProduct(tapKieg:any){
    let key= tapKieg.key
    delete tapKieg.key
    this.refTapKieg.update(key,tapKieg)
   }

}

