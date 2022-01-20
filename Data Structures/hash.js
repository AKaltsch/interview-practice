

function hashStringToInt(s, tableSize) {
    let hash = 17;

    for (let i = 0; i < s.length; i++) {
        hash = (hash * s.charCodeAt(i)) % tableSize;
    }

    return hash;
}

class HashTable {

    table = new Array(23)
    numItems = 0

    resize = () => {
        const newTable = new Array(this.table.length * 2);
        this.table.forEach(item => {
            if (item) {
                item.forEach(([key, value]) => {
                    const idx = hashStringToInt(key, newTable.length);
                    if (newTable[idx]) {
                        newTable[idx].push([key, value])
                    } else {
                        newTable[idx] = [[key, value]];
                    }
                })
            }
        })
        this.table = newTable
    }

    setItem = (key, value) => {
        this.numItems++;
        const loadFactor = this.numItems / this.table.length
        if (loadFactor > 0.8) {
            //resize
            this.resize()
        }

        const idx = hashStringToInt(key, this.table.length);
        if (this.table[idx]) {
            this.table[idx].push([key, value])
        } else {
            this.table[idx] = [[key, value]];
        }
    };

    getItem = (key) => {
        const idx = hashStringToInt(key, this.table.length)
        if (!this.table[idx]) {
            return null;
        }
        return this.table[idx].find(x => x[0] === key)[1];
    };
}

const myTable = new HashTable()
myTable.setItem("firstName", "Alec");
myTable.setItem("lastName", "Kaltschmid")
console.log(myTable.getItem("firstName"))
console.log(myTable.getItem("lastName"))


//items in common hash table example

// function itemInCommon(arr1, arr2) {
//     let obj = {}

//     for (let i = 0; i < arr1.length; i++) {
//         obj[arr1[i]] = true;
//     }
//     for (let j = 0; j < arr2.length; j++) {
//         if (obj[arr2[j]]) return true;
//     }
//     return false
// }

// itemInCommon([1,3,5], [2,4,5])  // returns true bc theres a 5 in each array