nums = [3, 6, 4, 8, 1, 9, 3, 23, 24, 59];
even_cnt = 0;
odd_cnt = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 == 0) even_cnt++;
  else odd_cnt++;
}

console.log(`Even: ${even_cnt}`);
console.log(`Odd: ${odd_cnt}`);
