function cats(arr = []) {
    
    cats = [];

    class Cat {
        constructor(name,age){
            this.name = name;
            this.age = age;
            this.sayMeow = function() {
                console.log(`meow`);
                
            }
        }
    }
    
    for (const el of arr) {
        let [catName,age] = el.split(' ');
        //console.log(`${catName} + ${age}`);
        cats.push(new Cat(catName,age));
    }
    
    for (const el of cats) {
        console.log(`${el.catName}, age ${el.age} says ${el.sayMeow()}`);
        
    }
    
}

cats(['Mellow 2', 'Tom 5']);