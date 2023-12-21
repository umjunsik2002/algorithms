import random

un = list()
# for i in range(0, 10):
#    un.append(i)
# random.shuffle(un)
un = un + [5, 13, 2, 25, 7, 17, 20, 8, 4]
print("1: " + str(un))
print("\n")


deux = un.copy()

# The helper heapify() function
def heapify(array, n, i):
    max_i = i
    left = 2*i+1
    right = 2*i+2
    if left<n and array[max_i]<array[left]:
        max_i = left
    if right<n and array[max_i]<array[right]:
        max_i = right
    if max_i != i:
        array[i], array[max_i] = array[max_i], array[i]
        heapify(array, n, max_i)

# The main heapsort function
def heapsort(array):
    n = len(array)
    for i in range(n//2-1, -1, -1):
        heapify(array, n, i)
        print(array)
    for i in range(n-1, 0, -1):
        array[i], array[0] = array[0], array[i]
        heapify(array, i, 0)
        print(array)
        
heapsort(deux)
print("2: " + str(deux))
print("\n")


trois = un.copy()
trois.sort()
print("3: " + str(trois))
print("\n")
