def is_armstrong(num):
    if num < 0:
        return False
    num_str = str(num)
    num_digits = len(num_str)
    sum_digits = sum(int(digit) ** num_digits for digit in num_str)
    return sum_digits == num

# Test cases
test_numbers = [153, 9474, 123, 1, 0]
for num in test_numbers:
    if is_armstrong(num):
        print(f"{num} is an Armstrong number")
    else:
        print(f"{num} is not an Armstrong number")