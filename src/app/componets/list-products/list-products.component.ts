import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Item } from '../../models/item';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  public orders:Item[];
  public constructor(private orderService:OrderService){
    this.orders=orderService.orders;
  }
  public deleteItem(i:number){
    this.orderService.deleteItem(i);

  }

}
