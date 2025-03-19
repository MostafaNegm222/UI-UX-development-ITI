// quickSort.test.js
const quickSort = require('./quickSort');

describe('QuickSort', () => {
    test('sorts an unsorted array', () => {
        expect(quickSort([64, 34, 25, 12, 22, 11, 90])).toEqual([11, 12, 22, 25, 34, 64, 90]);
    });

    test('handles empty array', () => {
        expect(quickSort([])).toEqual([]);
    });

    test('handles array with one element', () => {
        expect(quickSort([1])).toEqual([1]);
    });

    test('handles duplicates', () => {
        expect(quickSort([3, 1, 3, 2, 1])).toEqual([1, 1, 2, 3, 3]);
    });

    test('handles already sorted array', () => {
        expect(quickSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });
});