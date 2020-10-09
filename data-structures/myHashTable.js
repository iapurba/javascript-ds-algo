class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
            // console.log(hash)
        }
        return hash;
    }
    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data
    }
    get(key) {
        let address = this._hash(key);
        const currentBasket = this.data[address];
        if (currentBasket) {
            for (let i = 0; i < currentBasket.length; i++) {
                if (currentBasket[i][0] === key) {
                    return currentBasket[i][1];
                }
            }
        }
        return undefined;
    }
    keys() {
        let keysArray = [];
        // loop through each element
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] && this.data[i].length) {
                //if hash collision
                if (this.data[i].length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        keysArray.push(this.data[i][j][0])
                    }
                } else {
                    keysArray.push(this.data[i][0][0])
                }
            }
        }
        return keysArray;
    }
}

const myHashTable = new HashTable(5);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 10);
myHashTable.set('litchi', 50);
myHashTable.set('mangoes', 5);
myHashTable.set('pineapples', 2);

myHashTable.get('litchi');
myHashTable.keys();

