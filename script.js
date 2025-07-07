function mincost(arr)
{ 
//write your code here
// return the min cost
	// Edge case: if only one rope or none, no cost
  if (arr.length <= 1) return 0;

  let totalCost = 0;

  // Convert array into a min-heap by sorting
  arr.sort((a, b) => a - b);

  while (arr.length > 1) {
    // Take two smallest ropes
    let first = arr.shift(); // Remove smallest
    let second = arr.shift(); // Remove second smallest

    let cost = first + second;
    totalCost += cost;

    // Insert the combined rope back and re-sort
    arr.push(cost);
    arr.sort((a, b) => a - b);
  }

  return totalCost;
}

module.exports=mincost;
