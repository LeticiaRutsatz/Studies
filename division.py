def division(number1, number2):
    if number2 == 0:
        print("Error at division, try again!!")
    else:
        print("Result: ", number1 // number2)  # // for whole division

number1 = int(input("Type the first number: "))
number2 = int(input("Type the second number: "))

result = division(number1, number2)
