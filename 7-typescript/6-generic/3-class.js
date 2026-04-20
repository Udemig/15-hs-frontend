"use strict";
// Generic yapısını sınıflar'da da kullanabiliyoruz
class Sorter {
    data;
    constructor(data) {
        this.data = data;
    }
    sortData() {
        return this.data.sort();
    }
}
const arr1 = new Sorter(["f", "z", "a", "b", "c"]);
console.log(arr1.sortData());
const arr2 = new Sorter([9, 3, 5, 2, 4, 1, 8]);
console.log(arr2.sortData());
