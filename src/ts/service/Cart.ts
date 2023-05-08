import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    
    getTotal(): number {

        // this._items.reduce((summ,item)=> sum + item.price,0)
        let total: number = this._items.reduce((sum : number,item: Buyable)=> sum + item.price,0);
        // this._items.forEach((item) => {
        //     total += item.price;
        // });
        return total;
    }

    getDiscout(discout: number): number {
        let total: number = this.getTotal();
        // total = total - total * (discout / 100);
        return total - total * (discout / 100);
    }

    deleteId(id: number): void {
        this._items = this._items.filter((item: Buyable) => item.id !== id);
    }
}