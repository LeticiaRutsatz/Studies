# Ask for the person's age
age = input("Enter your age: ")

# Print the person's age
print("Your age is:", age)

#################### 1 ########################

state = input("Enter your state: ")
city = input("Enter your city: ")
street = input("Enter your street: ")
neighborhood = input("Enter your neighborhood: ")
number = input("Enter your residence number: ")
zip_code = input("Enter your ZIP code: ")

print("------Address Information:")
print("State: ", state)
print("City: ", city)
print("Street: ", street)
print("Neighborhood: ", neighborhood)
print("Number: ", number)
print("ZIP Code: ", zip_code)

#################### 2 ########################

firstNum = float(input("Enter the 1st number: "))
secondNum = float(input("Enter the 2nd number: "))
thirdNum = float(input("Enter the 3rd number: "))
fourthNum = float(input("Enter the 4th number: "))
fifthNum = float(input("Enter the 5th number: "))

sum_numbers = firstNum + secondNum + thirdNum + fourthNum + fifthNum
print("The sum of the numbers is: ", sum_numbers)

product = sum_numbers / 5
print("The product of the numbers is: ", product)

#################### 3 ########################

practicalActivity = float(input("Enter the grade of your practical activity: "))
theoreticalActivity = float(input("Enter the grade of your theoretical activity: "))
labExam = float(input("Enter the grade of your laboratory exam: "))
theoreticalTest = float(input("Enter the grade of your theoretical test: "))
extraWork = float(input("Enter the grade of your extra-class work: "))

grade_A = (practicalActivity * 0.45) + (theoreticalActivity * 0.55)
grade_B = (labExam * 0.6) + (theoreticalTest * 0.2) + (extraWork * 0.2)
finalGrade = (grade_A * 0.33) + (grade_B * 0.67)

print("Your final grade is: ", finalGrade)
