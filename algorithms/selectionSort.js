function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        // Set current index as minimum
        let min = i;
        let temp = array[i];
        for (let j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
        }
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}