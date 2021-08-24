/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
// object - T-shirt
class TShirt{
    constructor(
        name,
        brand,
        color,
        size,
        price
    ) {
        this.name = name;
        this.brand = brand;
        this.color = color;
        this.size = size;
        this.price = price;
    }
    // add methods like normal func
    sizeVariant(newSize) {
        this.size = newSize;
    }
    priceVariant(newPrice){
        this.price = newPrice;
    }
}
export default TShirt;