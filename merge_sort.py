import random

un = list()
for i in range(0, 10):
    un.append(i)
random.shuffle(un)
print("1: " + str(un))
print("\n")


deux = un.copy()

# The helper function of mergesort()
def merge(left, right):
    r = list()
    i, j = 0, 0
    while (i < len(left)) and (j < len(right)):
        if left[i] < right[j]:
            r.append(left[i])
            i = i + 1
        else:
            r.append(right[j])
            j = j + 1
    while i < len(left):
        r.append(left[i])
        i = i + 1
    while j < len(right):
        r.append(right[j])
        j = j + 1
    # print(r)
    return r

# The main mergesort function
def mergesort(array):
    if len(array) == 1:
        return array
    mid = len(array) // 2 # Python floor division
    left = array[:mid]
    right = array[mid:]
    left = mergesort(left)
    right = mergesort(right)
    return merge(left, right)
    
print("2: " + str(mergesort(deux)))
print("\n")


trois = un.copy()
trois.sort()
print("3: " + str(trois))
print("\n")

