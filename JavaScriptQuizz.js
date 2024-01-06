function findMissingNumber(nums) {
    const n = nums.length;
    let expectedSum = (n * (n + 1)) / 2;// sum of expected array numbers
    let actualSum = 0;

    for (let i = 0; i < n; i++) {
        actualSum += nums[i];
    }

    return expectedSum - actualSum;
}
// Examples
console.log(findMissingNumber([3, 0, 1])); // Output: 2
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Output: 8
console.log(findMissingNumber([0, 1])); // Output: 2
