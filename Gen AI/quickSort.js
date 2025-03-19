function quickSortIterative(arr) {
    const stack = [[0, arr.length - 1]];

    while (stack.length > 0) {
        const [low, high] = stack.pop();
        if (low < high) {
            const pivotIndex = partition(arr, low, high);
            stack.push([low, pivotIndex - 1]);
            stack.push([pivotIndex + 1, high]);
        }
    }
    return arr;
}