def two_sum(nums, target):
    i = 0
    
    for num1 in nums:
        j = i + 1
        
        for num2 in nums[i+1:]:
            if num1 + num2 == target:
                return [i, j]
            j += 1
        i += 1
            
nums = [2, 7, 11, 15]
target = 9

print(two_sum(nums, target))