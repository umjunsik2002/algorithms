import random

A = list()
for i in range(0, 16):
    A.append(i)
random.shuffle(A)
print("A: " + str(A))
print("\n")

# x = random.randint(0, 15)
x = 16
print(x)
n = len(A)

def linear_search(x, A, n):
    for i in range(0, n):
        if A[i] == x:
            return i
    return None

print(linear_search(x, A, n))
