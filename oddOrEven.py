def odd_or_even(number):
    if number % 2 == 0:
        return "even"
    else:
        return "odd"

number = int(input("Type a number: "))
print("The number is", odd_or_even(number))
