import { Dish } from './../../models/dish.model';
import { DishCategory } from './../../models/dishCategory.model';
import { Injectable } from '@angular/core';
import { HttpService } from 'app/services/shared/httpService.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DishService {
  dummyDishes: Array<Dish> = [
    {
      id: 1,
      name: 'Magyaros Pizza (30cm)',
      price: 1200,
      currency: 'HUF',
      description: 'pizzaszósz, lila hagyma, szalámi, csípős pepperóni paprika, füstölt kolbász, mozzarella sajt  (allergének: ' +
      'glutén, tejtermék)',
      rating: {
        value: 3.5,
        count: 11
      },
      category: {
        id: 1
      },
      image: '//static.vialacdn.com/master-menu/item/mt_30e90828-2e41-11e2-9d48-7a92eabdcf20/it-2ac28dde-56b6-8373-95f6-0fb0a309c44e' +
      '/it-2ac28dde-56b6-8373-95f6-0fb0a309c44e_800_item.png'
    }, {
      id: 2,
      name: 'Atta Calzone pizza (30cm)',
      price: 1310,
      currency: 'HUF',
      description: 'hajtott pizza, pizzaszósz, mozzarella sajt, tarja, főtt tojás, articsóka  (allergének: glutén, tejtermék, tojás)',
      rating: {
        value: 4.2,
        count: 30
      },
      category: {
        id: 1
      },
      image: '//static.vialacdn.com/master-menu/item/mt_30e90828-2e41-11e2-9d48-7a92eabdcf20/it-777177da-965f-7f68-d5b8-ef5075aaebee' +
      '/it-777177da-965f-7f68-d5b8-ef5075aaebee_800_item.png'
    },
    {
      id: 3,
      name: 'Acapulco Heat Burger 100% marhahúspogácsával',
      price: 1590,
      currency: 'HUF',
      description: '13 dkg marhahús, ementáli sajt, bacon, jalapeno paprika, avokádókrém, csípős házi chiliszósz, római saláta, ' +
      'szezámos buci (allergén: glutén, tojás, tejtermék, szezámmag)',
      rating: {
        value: 4.7,
        count: 58
      },
      category: {
        id: 2
      },
      image: '//static.vialacdn.com/master-menu/item/mt_30e90828-2e41-11e2-9d48-7a92eabdcf20/it-38f4e35e-42c0-58ad-d8a1-d2a2db7670' +
      '54/it-38f4e35e-42c0-58ad-d8a1-d2a2db767054_800_item.png'
    }, {
      id: 4,
      name: 'Big Cheese burger marhahúspogácsával',
      price: 1590,
      currency: 'HUF',
      description: 'cheddar sajt, mozzarella sajt, ementaler sajt, füstölt edami sajt, paradicsom, jégsaláta, majonéz, hagyma, ' +
      'szezámos buciban (allergén: glutén, tojás, tejtermék, mustár)',
      rating: {
        value: 4.5,
        count: 25
      },
      category: {
        id: 2
      },
      image: '//static.vialacdn.com/master-menu/item/mt_30e90828-2e41-11e2-9d48-7a92eabdcf20/it-8b00ff66-b61c-735b-f67c-143e9f79a' +
      '365/it-8b00ff66-b61c-735b-f67c-143e9f79a365_800_item.png'
    }, {
      id: 5,
      name: 'Pigi Boy burger',
      price: 1590,
      currency: 'HUF',
      description: 'római saláta, füstös sertéscsülök, házi BBQ szósz, ropogós hagyma, ropogós jalapeno, cheddar sajt, paradicsom ' +
      '(allergén: glutén, tojás, tejtermék, mustár, szezámmag)',
      rating: {
        value: 4.4,
        count: 18
      },
      category: {
        id: 2
      },
      image: '//static.vialacdn.com/master-menu/item/mt_30e90828-2e41-11e2-9d48-7a92eabdcf20/it-4e084a74-0396-4dad-7301-' +
      'e5eb741dede6/it-4e084a74-0396-4dad-7301-e5eb741dede6_800_item.png'
    }
  ];

  dummyCategories: Array<DishCategory> = [
    {
      id: 1,
      name: 'Pizzák (30cm)'
    },
    {
      id: 2,
      name: 'Burgerek'
    }
  ];

  constructor(private http: HttpService) { }

  getDish(id: number): Observable<Dish> {

    let data: Dish = null;

    Observable.from<Dish>(this.dummyDishes)
      .filter(dish => dish.id === id)
      .subscribe(dish => data = dish);

    return Observable.of<Dish>(data);
  }

  getDishes(): Observable<Dish> {
    // this.http.get<Dish>('/api/dish').subscribe(dish => {
    //   const a = dish;
    // });
    return Observable.from<Dish>(this.dummyDishes);
  }

  updateDish(dish: Dish): Observable<boolean> {
    this.dummyDishes.forEach(d => {
      if (d.id === dish.id) {
        d = dish;
      };
    });

    return Observable.of<boolean>(true);
  }

  addDish(dish: Dish): Observable<number> {
    dish.id = this.dummyDishes.length + 1;
    this.dummyDishes.push(dish);

    return Observable.of<number>(dish.id);
  }

  addDishCategory(dishCategory: DishCategory) {
    const newCategory = {
      id: this.dummyDishes.length + 1,
      name: dishCategory.name,
      dishes: [],
    };

    this.dummyDishes.push();
  }

  getDishCategories(): Observable<DishCategory> {
    return Observable.from<DishCategory>([
    {
      id: 1,
      name: 'Pizzák (30cm)'
    },
    {
      id: 2,
      name: 'Burgerek'
    }
  ]);
  }
}
