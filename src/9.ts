interface Container<T> {
  items: Array<T>;
  addItem: (element: T) => void;
  getItem: (index: number) => T;
}

const numberContainer: Container<number> = {
  items: [10, 20, 30, 40],
  addItem(element) {
    this.items.push(element);
  },
  getItem(index) {
    return this.items[index];
  },
};
const stringContainer: Container<string> = {
  items: ["Mango", "Ajax", "Poly", "Kiwi", "Poly"],
  addItem(element) {
    this.items.push(element);
  },
  getItem(index) {
    return this.items[index];
  },
};

function getLastElement<T>(container: Container<T>): T {
  return container.items[container.items.length - 1];
}

console.log(getLastElement<number>(numberContainer));
console.log(getLastElement<string>(stringContainer));
console.log(numberContainer.getItem(4));
console.log(numberContainer.addItem(777));
console.log(numberContainer.getItem(4));

console.log(stringContainer.getItem(3));
