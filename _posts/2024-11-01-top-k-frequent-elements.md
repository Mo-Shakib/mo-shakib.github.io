---
layout: post
title: Top K Frequent Elements python solution
date: 2024-11-01 00:09:00
description: Python solution for Leetcode problem, easy to understand for beginners.
tags: leetcode code hash-table
categories: leetcode
featured: false
thumbnail: assets/img/thumbnails/leetcode-top-k.JPG
---

# Top K Frequent Elements
**URL**: [https://leetcode.com/problems/top-k-frequent-elements/description/](https://leetcode.com/problems/top-k-frequent-elements/description/)

#### Problem Overview

The problem requires us to find the `k` most frequent elements in an integer array `nums`. We can return the result in any order.

Approach to Solve the Problem

To solve this problem, we need to:

1.	Count the Frequency: Identify how often each element appears in nums.
2.	Sort by Frequency: Sort the elements by their frequency in descending order.
3.	Return Top k Elements: Select the first k elements from the sorted list of elements.

#### Step-by-Step Solution Explanation

Here’s a step-by-step breakdown of the solution:

1.	Create a Frequency Dictionary:
	- Use a dictionary my_dict to store each unique element in nums as a key, with its frequency (i.e., number of occurrences) as the value.
	- Loop through each element i in nums.
	- If i is already in my_dict, increment its count by 1.
	- If i is not in my_dict, add it with an initial count of 1.

```python
my_dict = {}
for i in nums:
    if i not in my_dict:
        my_dict[i] = 1
    else:
        my_dict[i] += 1
```

2.	Sort Elements by Frequency:
	- After building my_dict, we need to sort its keys based on their values (frequencies) in descending order.
	- Use sorted() with a lambda function key=lambda x: my_dict[x] to sort by frequency. Set reverse=True to get a descending order.
	- Store the sorted keys in sorted_keys.

`sorted_keys = sorted(my_dict, key=lambda x: my_dict[x], reverse=True)`


3.	Return the Top k Elements:
	- Use slicing to return the first k elements in sorted_keys.

`return sorted_keys[:k]`



#### Full Solution Code

Here’s the complete code in Python:


```python
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        my_dict = {}

        # Step 1: Count the frequency of each element
        for i in nums:
            if i not in my_dict:
                my_dict[i] = 1
            else:
                my_dict[i] += 1

        # Step 2: Sort elements by frequency in descending order
        sorted_keys = sorted(my_dict, key=lambda x: my_dict[x], reverse=True)

        # Step 3: Return the top k frequent elements
        return sorted_keys[:k]
```
__Example Walkthrough__

Let’s go through a example provided:

- Input: `nums = [1,1,1,2,2,3]`, `k = 2`
- Process:
- Frequency `dictionary: {1: 3, 2: 2, 3: 1}`
- Sorted by `frequency: [1, 2, 3]`
- Return the first 2 `elements: [1, 2]`
- Output: `[1, 2]`

##### Complexity Analysis

- Time Complexity: O(N log N), where N is the length of nums. This is because we iterate over nums to count the frequencies and then sort the dictionary keys.
- Space Complexity: O(N), for storing the dictionary and the sorted list.

This solution is efficient for large inputs, as N can be up to ￼ according to the constraints.

##### Extra-
Get all my [LeetCode](https://leetcode.com/) solutions from this repo: [LeetCode](https://github.com/Mo-Shakib/LeetCode) 🧑🏻‍💻

<img src="/assets/img/thumbnails/leetcode-top-k.JPG" alt="LeetCode" height="400px">