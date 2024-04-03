number = 0
while number <= 100:
    print(number)
    number += 1

#####################

number = 0
while number <= 2000:
    print(number)
    number += 2


#####################

number = 1000
while number >= 0:
    print(number)
    number -= 1

####################

total_sum = 0
counter = 0

while counter < 10:
    value = int(input("Enter an integer value: "))
    total_sum += value
    counter += 1

print("The sum of all the values entered is:", total_sum)


#############
z = 50
while(z != 10):
    if(z > 10):
        z = z - 1
    else:
        z = z+ 1

print(z)