import random

A = list()
for i in range(1, 32):
    A.append(i)
print("A: " + str(A))
print("\n")

# x = random.randint(0, 31)
x = 31
print(x)
n = len(A)

def binary_search(x, A, n):
    left = 0
    right = n-1
    while (left <= right):
        mid = (left + right) // 2
        if A[mid] == x:
            return mid
        elif A[mid] < x:
            left = mid + 1
        else:
            right = mid - 1
    return None

print(binary_search(x, A, n))

