import { Property } from "../game/Property";
import { Player } from "../game/Player";
export class SellProperty{

    public sortPropertyPrice(properties:Property[]):Property[]{
        return [...properties].sort((propertyA , propertyB) => propertyA.price - propertyB.price);
    }

    public calculateSellValue(price:number):number{
        return price * 0.20;
    }
    public confrimSell(player:Player , property:Property):void{
        player.addMoney(this.calculateSellValue(property.price))
        
        player.removeProperty(property);
        property.owner = null;

        property.rentpool.clear();
    }
}
