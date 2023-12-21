import random

un = list()
for i in range(-128, 128):
    un.append(i)
random.shuffle(un)
print("1: " + str(un))
print("\n")


deux = un.copy()

# i and j are used as index, while key is the value of the index.
for i in range(1, len(deux)):
    key = deux[i]
    j = i - 1
    while j >= 0 and key < deux[j]:
        # swap
        deux[j + 1] = deux[j]
        j -= 1
    deux[j + 1] = key
    # print(deux)
    
print("2: " + str(deux))
print("\n")


trois = un.copy()
trois.sort()
print("3: " + str(trois))
print("\n")
