// 클래스 정의하기
class Person {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }

  sayHello() {
    console.log(`안녕하세요, ${this.name}입니다.`);
  }

  indiv_information() {
    console.log(`나이: ${this.age} \n키: ${this.height}\n`);
  }
}

// 객체 생성하기
const person1 = new Person("Kim", 24, 175);
console.log(person1.name); // Kim
person1.sayHello(); // 안녕하세요, Kim입니다.
person1.indiv_information();

// 객체 생성하기
const person2 = new Person("Jim", 24, 183);
console.log(person2.name); // Jim
person2.sayHello(); // 안녕하세요, Jim입니다.
person2.indiv_information();
