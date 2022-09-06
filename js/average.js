nums = [3, 6, 4, 8, 1, 9, 3, 23, 24, 59];

sum = 0;

for (let i = 0; i < nums.length; i++) {
  sum = sum + nums[i];
}

console.log(`Sum: ${sum}`);
console.log(`Average: ${sum / nums.length}`);
