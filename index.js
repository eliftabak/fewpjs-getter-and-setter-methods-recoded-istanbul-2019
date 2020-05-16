// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
    get circumference() {
        return Math.PI * this.radius * 2
    }
    get area() {
        return Math.PI * Math.pow(this.radius, 2)
    }
    set diameter(setDiam) {
       return this.radius = setDiam / 2;
    }
    set circumference(setCircum) {
      return  this.radius = (setCircum / Math.PI) / 2
    }
}