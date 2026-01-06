export class Supply {
    constructor(id = 0, product= '', quantity= 0, address= '', expire = '') {
        this.id=id;
        this.product=product;
        this.quantity=quantity;
        this.address=address;
        this.expire=expire;
    }
    static fromDisplayableSupply(displayableSupply){
        return new Supply(
            displayableSupply.id,
            displayableSupply.product,
            displayableSupply.quantity,
            displayableSupply.address,
            displayableSupply.expire,
        )
    }
    static toDisplayableSupply(supply){
        return{
            id: supply.id,
            product: supply.product,
            quantity: supply.quantity,
            address: supply.address,
            expire: supply.expire,
        }
    }
}