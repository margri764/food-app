import { Injectable } from "@angular/core";


@Injectable()
export class Cart {

  lines: CartLine[] = [];
  itemCount: number = 0;
  cartPrice: number = 0;


addLine(item:any, quantity:number=1) {

   

  let line = this.lines.find(line=> line.item.id  === item.id);
 

    if (line !== undefined) {
      line.quantity += Number(quantity);
    } else {
      this.lines.push(new CartLine(item, quantity));
      console.log("lines al salir push",this.lines)
    }

      this.recalculate();

    }


    private recalculate() {
      this.itemCount = 0;
      this.cartPrice = 0;
      this.lines.forEach(l => {
        this.itemCount += l.quantity;
        this.cartPrice += (l.quantity * l.item.precio);
      });
    }  





  updateQuantity(item:any, quantity: number) {
  const  line = this.lines.find(b => b.item.id === item.id);

    if (line !== undefined) {
      line.quantity = Number(quantity);
    }

    this.recalculate();
    console.log(item,quantity)
  }

  removeLine(id: any) {
    const index = this.lines.findIndex(line => line.item.id ===id);
    this.lines.splice(index, 1);
    this.recalculate();
  }

  clear() {
    this.lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }
}

  export class CartLine {

    constructor(public item: any, public quantity: number) { }
  
    get lineTotal() {
      return this.quantity * this.item.precio;
    }
  }
  