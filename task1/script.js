class Polygon {
    constructor(height=0, width=0) {
        if(this.constructor === Polygon)
             throw 'abstract class'
      this.height = height;
      this.width = width;
    }
    set Widthh(_width) {
        this.width = _width;
    }

    set Heightt(_height) {
        this.height = _height;
    }
    get Widthh(){
        return this.width;
    }
    get Heightt(){
        return this.height;
    }

}
class Square extends Polygon {
    constructor(length) {
      
      super(length, length);
    }
    displayArea() {
        return `length=${this.width}  area =${this.width* this.width}`;
     }
}
class Rectangle extends Polygon {
    constructor(height, width) {
      super(height, width);
    }
    displayArea() {
        return `width=${this.width} height=${this.height} area =${this.width * this.height}`;
     }
}

class Triangle extends Polygon {
    constructor(base, height) {
      super(base, height);
    }
    displayArea() {
        return `base=${this.width} height=${this.height} area =${.5 * this.width * this.height}`;
     }
 
}
class Circle extends Polygon {
    constructor(rad) {
      
      super(rad,rad);
    }
    displayArea() {
        return `rad=${this.width}  area =${3.14 * this.width * this.width}`;
     }
}

let sqrt = new Square(2);
console.log(sqrt.displayArea());

let rect = new Rectangle(2, 3);
console.log(rect.displayArea());



let c = new Circle(2);
console.log(c.displayArea());

let t = new Triangle(2, 4);
console.log(t.displayArea());
