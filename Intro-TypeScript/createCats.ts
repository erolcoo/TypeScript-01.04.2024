class Cat {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    meow(): void {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  
  function createCats(catInfo: string[]): Cat[] {
    const cats: Cat[] = [];
    for (const info of catInfo) {
      const [name, ageStr] = info.split(' '); 
      const age = parseInt(ageStr);
      const cat = new Cat(name, age);
      cats.push(cat);
    }
    return cats;
  }
  
  const catsInfo1: string[] = ['Mellow 2', 'Tom 5'];
  const cats1 = createCats(catsInfo1); 
  

  for (const cat of cats1) {
    cat.meow();
  }
  
  const catsInfo2: string[] = ['Candy 1', 'Poppy 3', 'Nyx 2'];
  const cats2 = createCats(catsInfo2); 
  

