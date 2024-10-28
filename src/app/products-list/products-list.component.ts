import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  tapKiegek:any=[]
  newProduct:any={}
  kereses=""
  columns=[
    {key:"name", text:"Név", type:'text'},
    {key:"price", text:"Ár", type:'number'},
    {key:"description", text:"Leírás", type:'textarea'},
  ]
  
  constructor(private base:BaseService){
    this.base.getProducts().snapshotChanges().pipe(
      map(
        (changes)=>changes.map(
          (c)=>({key:c.payload.key, ...c.payload.val()})
        )
       )
    ).subscribe(
      (res)=>this.tapKiegek=res
    )
  }

  addProduct(){
    this.base.addProduct(this.newProduct)
    this.newProduct={}
  }
  updatedProduct(tapKieg:any){
    this.base.updateProduct(tapKieg)
  }
  deleteProduct(tapKieg:any){
    this.base.deleteProduct(tapKieg)
  }



}

