def is_number_palindrome(num):
    if num < 0:
        return False
    original = num
    reversed_num = 0
    while num > 0:
        digit = num % 10
        reversed_num = reversed_num * 10 + digit
        num = num // 10
    return original == reversed_num

# Test cases
test_numbers = [121, 12321, 123, 1, 0, -121]
for num in test_numbers:
    if is_number_palindrome(num):
        print(f"{num} is a palindrome number")
    else:
        print(f"{num} is not a palindrome number")