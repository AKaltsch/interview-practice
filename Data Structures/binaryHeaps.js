//Max Binary Heap -> parent nodes are larger than children
//Min Binary Heap -> parent nodes are smaller than children
//Compact as possible // both left, right are filled out before you move down
//No order to left and right ////// sorted in BSTree

//**for any index of array N...  *left child is stored at 2N + 1  *right child is stored at 2N + 2
//**find a parent of a given node from an array -> (N-1)/2 floored

class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12]
    }
    insert(value) {
        this.values.push(value);
        this.bubbleUp()
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        // console.log(idx)
        const element = this.values[idx];
        // console.log(element)
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2)
            // console.log(parentIdx)
            let parent = this.values[parentIdx];
            // console.log(parent)
            if (element <= parent) break;     
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;      
        }
    }
    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();

        if (this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }

        return max;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild;
            let rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)
                ) {
                        swap = rightChildIdx;
                }
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}



let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(40);
heap.extractMax()
heap.extractMax()
console.log(heap);