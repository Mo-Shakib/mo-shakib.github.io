---
layout: post
title: Is Subsequence python solution
date: 2024-10-26 01:04:00
description: Python solution for Leetcode problem, easy to understand for beginners.
tags: leetcode code python
categories: leetcode
featured: false
thumbnail: assets/img/thumbnails/leetcode-top-k.JPG
---

### 392. Is Subsequence

URL: [https://leetcode.com/problems/is-subsequence/](https://leetcode.com/problems/is-subsequence/)

#### Problem Overview

The problem asks us to check if string `s` is a subsequence of string `t`. A subsequence means we should be able to find all characters of s within t while maintaining their original order.

##### Approach to Solve the Problem

The solution involves the following steps:

1.	Initialize Pointers: Create pointers for both strings `s` and `t`.
2.	Traverse t: Use the pointer for t to iterate through each character.
3.	Match Characters: For each character in `t`, check if it matches the current character in s.
4.	Advance Pointer for `s`: If there’s a match, move the pointer for s to the next character.
5.	Return Result: If the pointer for s reaches the end of `s`, it means all characters were found in order, so `return True`. If we finish t without matching all characters of `s`, `return False`.

This approach is efficient as it traverses each string only once.

Step-by-Step Solution Explanation

1. Initialize Pointers

	•	Set a found counter to track matched characters in `s`.
	•	Initialize a pointer `x` for `t`.

2. Traverse `t` to Match Characters

	•	For each character `i` in `s`, use a loop to find `i` in `t`.
	•	Move `x` through t until `t[x]` matches `i` or the end of `t` is reached.

```python
for i in s:
    while x < len(t) and t[x] != i:
        x += 1
```

3. Track Matches

    - If i is found in t (i.e., `x` is within bounds), increment both found and `x`.
    - If not found, break the loop asc`s` is not a subsequence of `t`.

```python
    if x < len(t): 
        x += 1 
        found += 1
    else:
        break
```

4. Check If All Characters Were Found

    - After looping, check if found equals the length of s to determine if s is a subsequence of t.

`return found == len(s)`

Full Solution Code:
```python
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        found = 0
        x = 0
        for i in s:
            while x < len(t) and t[x] != i:
                x += 1  
            if x < len(t): 
                x += 1 
                found += 1
            else:
                break  
        return found == len(s)
```

Example Walkthrough:
- Input: s = "abc", t = "ahbgdc"
- Process:
- t is traversed, and s characters are found in the correct order.
- s characters ('a', 'b', 'c') match in sequence within t.
- Output: True

Complexity Analysis:
    - Time Complexity: O(n), where n is the length of t, as t is traversed at most once.
    - Space Complexity: O(1), because we use a constant amount of space for pointers.

This approach is optimal for checking subsequences in large strings due to its linear time complexity.

💡__Extra__: Get all my [LeetCode](https://leetcode.com/) solutions from this repo: [LeetCode](https://github.com/Mo-Shakib/LeetCode) 🧑🏻‍💻