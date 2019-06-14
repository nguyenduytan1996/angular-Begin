import { Component} from '@angular/core';

import { productsDanhSach } from '../productsDanhSach';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productsList_Attri = productsDanhSach;

  shareList() {
    window.alert('Gọi hàm Share - LIST \n The product has been shared!');
  }

  onNotifyList() {
    window.alert('Gọi hàm onNotify - LIST \n You will be notified when the product goes on sale');
  }

  nullFunction_List() {
    window.alert('--- NULL LIST ---');
  }

}
