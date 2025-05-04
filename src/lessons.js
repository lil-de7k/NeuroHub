const lessons = [
  {
    id: 1,
    name: "Python Basics 1",
    category: "Programming",
    date: "4/5/2025",
    links: [""],
    src: "https://www.youtube.com/embed/9OgOay9bRU8?si=yiBdyYBehGFuKMtp",
    title: "Python Fundamentals Part-1",
    description: 
`Quick look on:
- Hello Python!
- Variables
- User Input
- Variable Naming
- Comments
- Conditions
- Logical Operators
- Loops
- Functions
`
    ,
    code:
`print("Hello Python!") #Hello Python!

#Variables
name = "Muhammad" #String
age = 18 #Int
money = 45.99 #Float
happy = False #boolean (True/False)
print(name) #Muhammad
print(age) #18
print(money) #45.99
print(happy) #False

#String Concatination
print("Name: " + name) #Name: Muhammad
print("Age: " + age) #(Error) 'str + int'!!!
print("Age: " + str(age)) #Age: 18

#User Input
name = input("Enter your name: ") #Muhammad
age = input("Enter your age: ") #18
money = input("How much money do you have? ") #1000
happy = input("Are you happy? ") #False
print("Name: " + name) #Name: Muhammad
print("Age: " + str(age)) #Age: 18
print("Age: " + age) #Age: 18
print("Money: " + str(money)) #Money: 1000
print("Money: " + money) #Money: 1000
print("Happy: " + str(happy)) #Happy: False
print("Happy: " + happy) #Happy: False

#Variable Naming
### can't start with number or special characters
### can start with underscore
### best practise: name variable with meaningful name
### best practise: first_name , firstName , ...

#If Condition
money = 2000
if money > 1000:
    print("foregat ya 2bn 2lfa2rea")
elif money <= 0:
    print("ya 3eni 3lek yabny")
else:
    print("hat3e4 w tmot mnofy")

#Ternary Operator
age = 18
message = "ew3a" if age >= 18 else "endag"
print(message)

#Logical Operators
isHungry = True
hasMoney = False
resturantOpen = True
if isHungry and hasMoney:
    print("tab ma takol")
else:
    print("2om eshta8l")
print("######")
if isHungry or hasMoney:
    print("tab hn3ml eh tayb, donia 8reba walahi")
else:
    print("aywa 3ayz eh bardo!")
print("######")
if isHungry and hasMoney and resturantOpen:
    print("de shaklaha foregat ya m3lm")
else:
    print("fa2ari ebn kalb")

#While Loop
i = 1
while i <= 5:
    print(i)
    i = i + 1
print("done")

#For Loop-1
for i in range(5):
    print(i)

#For Loop-2
for i in range(1, 5):
    print(i)

#For Loop-3
for char in "Muhammad":
    print(char)

#Nested Loops
for x in range(5):
    for y in range(5):
        print(x, y)

#Functions-1
def calculateSalary(bonus):
    return 4000 + bonus
employee1 = calculateSalary(100)
employee2 = calculateSalary(200)
employee3 = calculateSalary(0)
print(employee1, employee2, employee3)

#Functions-2
def showMessage(message):
    print(message)
showMessage("End of Part One")
`,
    qa: [
      {
        question: "",
        answer: 
        ``
      },
    ]
  },
  {
    id: 2,
    name: "Vector Space",
    category: "Linear Algebra",
    date: "4/5/2025",
    links: ["https://www.math.colostate.edu/~clayton/teaching/m369s17/exams/exam2practicesolutions.pdf"],
    src: "https://www.youtube.com/embed/A-4ZksoIepY?si=5HidSostqJk5rRBX",
    title: "Vector Space",
    description: 
`1) X + Y belongs to V 
2) (X + Y) + Z = X + (Y + Z)
3) X + 0v = 0v + X = X
4) X + -X = -X + X = 0v
5) X + Y = Y + X
6) AX belongs to V
7) A (X + Y) = AX + AY
8) (AB) X = A (BX)
9) (A + B) X = AX + BX
10) 1 * X = X `
    ,
    qa: [
      {
        question: "",
        answer: 
        ``
      },
    ]
  },
];

export default lessons;
