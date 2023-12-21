import random

un = list()
for i in range(-128, 128):
    un.append(i)
random.shuffle(un)
print("1: " + str(un))
print("\n")


deux = un.copy()

for i in range(0, len(deux)):
    i_min = i
    for j in range(i+1, len(deux)):
        if deux[j] < deux[i_min]:
            i_min = j
    deux[i], deux[i_min] = deux[i_min], deux[i]

print("2: " + str(deux))
print("\n")


trois = un.copy()
trois.sort()
print("3: " + str(trois))
print("\n")
