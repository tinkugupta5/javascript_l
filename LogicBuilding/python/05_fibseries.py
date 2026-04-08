n = 10

fibSeries = [0, 1]

i = 2
while i < n:
    fibSeries.append(fibSeries[i - 1] + fibSeries[i - 2])
    i += 1

print(f"First {n} Fibonacci numbers:")
print(fibSeries[:n])