import random

un = list()
for i in range(-128, 128):
    un.append(i)
random.shuffle(un)
print("1: " + str(un))
print("\n")


deux = un.copy()

#The helper function of quicksort()
def partition(array, min_i, max_i):
    pivot = array[max_i]
    i = min_i - 1
    for j in range(min_i, max_i):
        if array[j] < pivot:
            i += 1
            array[i], array[j] = array[j], array[i]
    array[i+1], array[max_i] = array[max_i], array[i+1]
    return i + 1

# The main quicksort function
def quicksort(array, min_i, max_i):
    if min_i < max_i:
        pivot = partition(array, min_i, max_i)
        quicksort(array, min_i, pivot-1)
        quicksort(array, pivot+1, max_i)

quicksort(deux, 0, len(deux)-1)
print("2: " + str(deux))
print("\n")


trois = un.copy()
trois.sort()
print("3: " + str(trois))
print("\n")
