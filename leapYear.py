def leapYear(number):
    if year % 4 == 0:
        return "leap year"
    else:
        return "not a leap year"

year = int(input("Type a year: "))
print("The year is", leapYear(year))
