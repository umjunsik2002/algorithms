import random

un = list()
for i in range(-128, 128):
    un.append(i)
random.shuffle(un)
print("1: " + str(un))
print("\n")


deux = un.copy()

for i in range(0, len(deux)):
    swapped = False
    for j in range(0, len(deux)-i-1):
        if deux[j] > deux[j+1]:
            temp = deux[j]
            deux[j] = deux[j+1]
            deux[j+1] = temp
            swapped = True
    if swapped == False:
        break
    # print(deux)
    
print("2: " + str(deux))
print("\n")


trois = un.copy()
trois.sort()
print("3: " + str(trois))
print("\n")
