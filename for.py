
number = int(input("Enter an integer: "))

print("Multiplication table of", number, ":")
for i in range(1, 11):
    result = number * i
    print(number, "x", i, "=", result)


########################

num_products = int(input("How many products do you want to add to your shopping list? "))

shopping_list = []

for i in range(num_products):
    product = input("Enter the name of the product: ")
    shopping_list.append(product)

print("\nYour shopping list:")
for item in shopping_list:
    print("- " + item)
