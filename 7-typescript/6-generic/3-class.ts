// Generic yapısını sınıflar'da da kullanabiliyoruz

class Sorter<T> {
  constructor(private data: T[]) {}

  sortData(): T[] {
    return this.data.sort();
  }
}

const arr1 = new Sorter<string>(["f", "z", "a", "b", "c"]);
console.log(arr1.sortData());

const arr2 = new Sorter<number>([9, 3, 5, 2, 4, 1, 8]);
console.log(arr2.sortData());
