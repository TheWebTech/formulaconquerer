                                                              
                                                                     
                                             
#Formula Conquerer and most modules were created by Jon McLaren
#http://tyr.ucoz.net
#http://priestoftyr.co.nr
#The source code and all files associated with Formula Conquerer can be found
#at: http://code.google.com/p/formulaconquerer/
#formula conquerer
from math import sqrt
from math import *
version=1.07
title = "Formula Conquerer"

#special variables
pi=3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609    
   
  




def menu1():
    print "Primary Menu:"
    print "Pick a Subject/Catagory."
    print "  Catagory                  #"
    print "------------              -----"
    print "Calculator                  1"
    print "3D Geometry                 2"
    print "2D Geometry                 3"
    print "Algebra                     4"
    print "Other                       5"

def menu_3DGeo():
    print "3D Geometry Menu:"
    print ""

def yesno(questiontext):
    question=0
    while question != "yes" or question != "no":
        question=raw_input(questiontext)
        question.lower()
    return question
        
    

def end():
    print ""
    pressenter = raw_input('press enter to continue...')
    print ""
    print ""
def newline(L):
    while L >0:
        print ""
        L = L - 1

print "Welcome to the "+title+"! version",version
print "Created by Jon McLaren and Zach Tilford"
print "--------------------------------------------"

newline(1)

bob = 1
while bob == 1:
    
    print "Menu:"
    print "Module Name           #"
    print "-----------         -----"
    print "Basic Calculator       1"
    print "Circumfrence           2"
    print "Area of rect.          3"
    print "Area of Triangle       4"
    print "Volume of Cube         5"
    print "Compare Numbers        6"
    print "Prime                  7"
    print "Temp. converter        8"
    print "Age Calculator         9"
    print "Metric Unit Converter 10"
    print "Metric English Conv.  11"
    print "Simple Equation Calc. 12"
    print "Law of Sines          13 - incomplete"
    print "Even or Odd           14"
    print "Proportion Calc.      15"
    print "Edge of a Cube        16"
    print "Radius of a Circle    17"
    print "Area of Any Polygon   18"
    print "Pythagorean Triplet?  19"
    print "Surface Area +lat.area20"
    print "Perimeter Calculator  21"
    print "Help Module          911"
    print "Update               912"
    print "------------------------"
    print "For Help using this program type 911 then hit enter"
    print "To exit the program enter 0"
    menu= input('which formula do you need to conquer?(enter it\'s number) ')
    newline(2)
	
    if menu == 0:
        print "Thank you for using", title, "!"
        break
    elif menu == 1:
        print "BASIC CALCULATOR"
        print "Type out the problem, use the following symbols to use the calculator"
        print "+ to add"
        print "- to subtract"
        print "/ to divide"
        print "* to multiply"
        print "** to setsomething to a power, example: 10**2 = 100"
        print "sqrt(x) to use a square root, Example: sqrt(4) = 2"
        print "sin(x) cos(x) tan(x) just replace x with your number"
        print "Ans to use the answer from the previous problem in the new problem"
        print "if you enter end() you will go back to the menu"
        print"------------------------------------ "
        Ans=1
        while 1:
            Ans=input("Enter problem: ")
            if Ans=="end":
                end()
                break
            else:
                
                print "The Answer is:",Ans
            
	
    elif menu == 2:
        #circumfrence
        print "Calculate Circumfrence"
        r = input('Radius: ')
        
        circumfrence = 2* pi * r
        d = r * 2

        print"                __.......__                         "
        print"           _.-''     |      '-..                    "
        print"        ,-'          |          '-.                 " 
        print"      ,'             |             '.               " 
        print"    ,'               |               '\             " 
        print"   /                 |                 `            " 
        print"  /                  |                  `.          " 
        print" /                   |                    \         " 
        print"|                    |                     |         " 
        print"|                    |                     |         "  
        print"|                    |       ",r," <----Radius"  
        print"|                    ._____________________|        " 
        print"|                    |                    .'        " 
        print"|                    |                    |         " 
        print"|                    |                   .'         " 
        print" \                   |                  /           " 
        print"  \                  |                ,'            "  
        print"   `                 |               /              "     
        print"    '.               |             ,'               "        
        print"      '-.            |          _,'                 "         
        print"         '-._        |      _,-'                    "       
        print"             '`--....|..---'                        "
        print"                     |                              "
        print"      Diameter--> ",d
        newline(1)
        print"Circumfrence Formula: 2 x pi x r"
        print" 2 x pi x",r
        print "Circumfrence: ",circumfrence
        end()
    elif menu == 3:
        #Area Of A Square/rectangle
        print "Area of a Square/rectangle calculator"
        print" _________  L"
        print"|         | E"
        print"|         | N"
        print"|         | G"
        print"|_________| T"
        print"   Width    H"
        print "A = Length x Width"
        print "for a square enter the same number for length and width."
        l = input('Length of shape: ')
        print" _________  "
        print"|         | "
        print"|         |",l
        print"|         | "
        print"|_________| "
        print"   Width    "
        w = input('Width of shape: ')
        
        a=l*w
        if l == w:
            print" _________  "
            print"|         | "
            print"|         |",l
            print"|         | "
            print"|_________| "
            print"  ",w
            print l,"x",w,"=",a
            print "the area of your Square is:",a
        else:
            if l > w:
                print" _________  "
                print"|         | "
                print"|         | "
                print"|         | "
                print"|         |",l
                print"|         | "
                print"|         | "
                print"|_________| "
                print"  ",w
                print l,"x",w,"=",a
                print "the area of your rectangle is:",a
            elif w > l:
                print" _____________  "
                print"|             | "
                print"|             |",l
                print"|             | "
                print"|_____________| "
                print"     ",w
                print l,"x",w,"=",a
                print "the area of your rectangle is:",a
                
        end()
    elif menu == 4:
        #area of triangle
        print "Area of a Triangle"
        print "the area of a triangle is calculated by the formula 1/2 * base * Height"
        print "   ."
        print "   |\ "
        print "   | \ "
        print " H |  \ "
        print " E |   \ "
        print " I |    \ "
        print " G |     \ "
        print " H |      \ "
        print " T |       \ "
        print "   |        \ "
        print "   |_        \ "
        print "   |_|________\ "
        print "       base "
        b = input('Base: ')
        print "   ."
        print "   |\ "
        print "   | \ "
        print " H |  \ "
        print " E |   \ "
        print " I |    \ "
        print " G |     \ "
        print " H |      \ "
        print " T |       \ "
        print "   |        \ "
        print "   |_        \ "
        print "   |_|________\ "
        print "       ",b
        
        h = input('Height: ')
        right = 1
        while right != "yes" or right != "no" or right != "n" or right != "y":
            right= raw_input('is this a right Triangle?: ')
            if right == "yes" or "y":
                hypotenusesquared = h**2 + b**2
                hypotenuse = sqrt(hypotenusesquared)
                print "   ."
                print "   |\ "
                print "   | \ "
                print "   |  \ "
                print "   |   \ "
                print "   |    \ ",hypotenuse,""
                
                print h," |     \ "
                print "   |      \ "
                print "   |       \ "
                print "   |        \ "
                print "   |_        \ "
                print "   |_|________\ "
                print "       ",b
                print "                       2   2   2"
                print "Pythagoreans Theorum: a + b = c"
                print "Area of a triangle: (1/2)B x H"
                print "1/2*",b,"*",h
                print "The Hypotenuse side is:",hypotenuse
                a = .5 * b * h
                print "The area of the triangle is:",a
                break
            elif right == "no" or "n":
                print "             .   "
                print "            /|\ "
                print "           / | \ "
                print "          /  |  \ "
                print "         /   |   \ "
                print "        /    |%s  \ " % h
                print "       /     |     \ " 
                print "      /      |_     \ "
                print "     /_______|_|_____\ "
                print "             ",b
                print "1/2*",b,"*",h
               
                
                a = .5 * b * h
                print "The area of the triangle is:",a
                break
            right=1
        end()
    elif menu == 5:
        #volume of a cube
        print"Cube/Rectangular Prism Volume calculator"
        newline(1)
        print "this is an edge"
        print " ____|______"
        print "|\        | \ "
        print "| \_______|__\ "
        print "| |       |  | "
        print "|_|_______|  | "
        print "\ |        \ | "
        print " \|_________\| "
        yesno("Is the Shape a cube? ")
        
            
        
        if question=="yes":
            side = input('Enter an edge of the cube: ')
            v=side*side*side

        else:
            side = input('Enter an edge of the cube: ')
            side2=input('Enter the second edge of the cube: ')
            side3=input('Enter the third edge of the cube: ')
            v=side*side2*side3
        
        
        
        
        print "     ",side
        print " _____|_____"
        print "|\        | \ "
        print "| \_______|__\ "
        print "| |       |  | "
        print "|_|_______|  | "
        print "\ |        \ |"
        print " \|_________\| "
        print ""
        print "Formula: side1*side2*side3 or side Cubed(for cubes)"
        print ""
        print "The Volume of the Cube is:",v
        end()

    elif menu == 6:
        #Number Comparison
        print"Compare Numbers"
        print "You may even use equations for example:"
        print "2*2 is equal to 4"
        print "Works well for fractions and roots too."
        newline(1)
        n1 = input('Enter the first number: ')
        n2 = input('Enter the second number: ')
        if n1 > n2:
            print n1,"is greater than",n2
            print n2,"is less than",n1
            print "        Number Line" 
            print "<--|---------------------|--> "
            print "  %s                    %s" %(n2,n1)
        elif n2 > n1:
            print n2,"is greater than",n1
            print n1,"is less than",n2
            print "        Number Line" 
            print "<--|---------------------|--> "
            print "  %s                    %s" %(n1,n2)
        elif n2 == n1:
            print n1,"is equal to",n2
            print n2,"is equal to",n1
        else:
            print "you confused the program. Try again."
        end()
    elif menu == 7:
        #Prime
        #Created by Zach Tilford
        print"Prime Number Calculator(is it prime or not?) "
        number = input("Enter number:")
        work = number / 2
        egg = number / 2
        np = number,("Not Prime")
        pp = number,(" Prime!")
        h = 0

        while work > 1:
            math = number % work
            if math == 0:
                h = 1
                answer = number / work
                print number,("/"),work,("="),answer
                break
            work = work - 1
            math = number % work
        if h != 1:
            print pp
        else:
            print np
            if number < 1000000000:
                solutions = raw_input ("Would you like a list of all the solutions? Yes(y) No(n):")
                print solutions
                if solutions == ("y") or ("Y") or ("Yes") or ("yes"):
                    while egg > 1:
                        mathtwo = number % egg
                        if mathtwo == 0:
                            solanswer = number / egg
                            print number,("/"),egg,("="),solanswer
                        egg = egg - 1
                        solanswer = number / egg
                
        again = raw_input ("Would you like to find another prime number? Yes(y) No(n):")
        print again
        while again == ("y"):
            number = input("Enter number:")
            work = number / 2
            egg = number / 2
            np = number,("Not Prime")
            pp = number,(" Prime!")
            h = 0
            while work > 1:
                math = number % work
                if math == 0:
                    h = 1
                    answer = number / work
                    print number,("/"),work,("="),answer
                    break
                work = work - 1
                math = number % work
            if h != 1:
                print pp
            else:
                print np
                if number < 1000000000:
                    solutions = raw_input ("Would you like a list of all the solutions? Yes(y) No(n):")
                    print solutions
                    if solutions == ("y"):
                        while egg > 1:
                            mathtwo = number % egg
                            if mathtwo == 0:
                                solanswer = number / egg
                                print number,("/"),egg,("="),solanswer
                            egg = egg - 1
                            solanswer = number / egg
                again = raw_input ("Would you like to find another prime number? Yes(y) No(n):")
                print again
        else:
            print""
        end()
    elif menu == 8:
        #Jon McLaren
        #Lufkin
        #temp converter-mabobber!
        a = "yes"
        print "Welcome to the magic celsius fahrenheit coverter mabobber!"
        print "created by Jon"
        while a =="yes" or "y" or "yea" or "yep" or "Yes":
            tempt = raw_input( 'Which do you wish to convert from Celsius or Fahrenheit: ' )
            if (tempt == "celsius" or tempt == "Celsius" or tempt == "c"):
                Tc = raw_input( 'Celsius: ' )
                Tc = int(Tc)
                Tf = (9/5)*Tc+32
                print "Fahrenheit:"
                print Tf
                
                a = raw_input( 'would you like to convert another temperature? ' )
                
            elif (tempt == "Fahrenheit" or tempt == "fahrenheit" or tempt == "f"):
                Tf = raw_input('Fahrenheit: ')
                Tf = int(Tf)
                Tc =(5/9)*(Tf-32)
                print "Celsius:"
                print Tc
                
                a = raw_input( 'would you like to convert another temperature? ' )

        print "Thank you for using the Converter mabobber!"
        end()
    elif menu == 9:
        #Age calculator
        print"Age Calculator"
        name = raw_input('Who\'s age am I calculating? ')
        birth = input('what year was the person born? ')
        currentyear= input('what is the current year or year they died? ')
        month = input('What was the number of the Month they were born in? ')
        currentmonth = input('what is the current month right now or month they died in? ')
        day = input('born on what day of month? ')
        currentday=input('what is the Current day of the month or day of death? ')
        
        age = currentyear - birth
        agem=(currentmonth-month)
        aged=(currentday - day)
        print name,"is",age,"years",agem,"months",aged,"days old."
        end()
    elif menu == 10:
        #Metric Unit Converter
        print "Metric unit converter"
        print " #    unit type"
        print "---  ------------"
        print " -6   Micrometer"
        print " -3   Millimeter"
        print " -2   Centimeter"
        print " -1   Decimeter"
        print " 0    Meter"
        print " 1    Dekameter"
        print " 2    hectometer"
        print " 3    Kilometer"
        convertfrom =input('which unit would you like to convert from: ')
        Afrom =input('amount of unit: ')
        convertto = input('What unit would you like to convert to: ')
        #convert unit
        exponent= convertto-convertfrom        
        convertedunit = Afrom*(10**exponent)
        print "The converted Unit:",convertedunit
        how =raw_input('want to convert units not listed, or simply understand how this converter works? ')
        if how == "yes" or how =="y" or how =="Y":
            print "How it works"
            print "------------------"
            print "Every metric unit is based on 10, so we simply took the unit that you want to convert to - what you convert from that ='s the exponent"
            print "after we have the exponent we plug the number to be converted, and the exponent number into this formula:"
            print "a(10**b)"
            print "a is the number to be converted"
            print "b is the exponent"
            print "** is just a symbol saying that b is an exponent of 10"
            print "How can I convert units not listed?"
            newline(1)
            print "----------------------------------------"
            print "find out in relation to 1 Meter, what exponent that metric unit would be that your converting to or from and simply use those numbers in our metric converter"
            
        end()
    
        
    elif menu == 11:
        #Metric English Converter
        print "Metric English Converter"
        print " #       English to metric "
        print "---   ------------------------"
        print " 1       Inches to Milimeters"
        print " 2         Feet to Meters"
        print " 3         Yards to Meters"
        print " 4         Miles to Kilometers"
        newline(1)
        print " #       Metric to English "
        print "---   ------------------------"
        print " 5       Milimeters to Inches"
        print " 6         Meters to Feet"
        print " 7         Meters to Yards"
        print " 8         Kilometers to Miles"
        convertmenu = input('Enter your conversion type: ')
        #English to Metric
        if convertmenu == 1:
            print "Inches to Milimeters"
            num = input('Inches: ')
            ans = num * 25.4
            print "Milimeters:",ans
        elif convertmenu == 2:
            print "Feet to Meters"
            num = input('Feet: ')
            ans = num * 0.305
            print "Meters:",ans
        elif convertmenu == 3:
            print "Yards to Meters"
            num = input('Yards: ')
            ans = num * 0.914
            print "Meters:",ans
        elif convertmenu == 4:
            print "Miles to Kilometers"
            num = input('Miles: ')
            ans = num * 1.61
            print "Kilometers:",ans
        #metric to english
        elif convertmenu == 5:
            print "Milimeters to Inches"
            num = input('Milimeters: ')
            ans = num * 0.039
            print "Inches:",ans
        elif convertmenu == 6:
            print "Meters to feet"
            num = input('Meters: ')
            ans = num * 3.28
            print "feet:",ans
        elif convertmenu == 7:
            print "Meters to yards "
            num = input('Meters: ')
            ans = num * 1.09
            print "Yards:",ans
        elif convertmenu == 8:
            print "Kilometers to Miles"
            num = input('Kilometers: ')
            ans = num * 0.621
            print "Miles:",ans
        end()
    elif menu == 12:
        print"simple equation calculator"
        print "enter what comes before the = sign"
        print "in other words enter A and B and we will calculate A = B"
        A=input('A')
        B=input('B')
        print A,"=",B
        end()
    elif menu == 13:
        print "WARNING:Module is incomplete! module will execute however something may be missing and answers will be wrong" 
        print "Law of Sines"
        print"     ."
        print"    /C\ "
        print"   /   \ "
        print"b /     \ a"
        print" /       \ "
        print"/A_______B\ "
        print"     c"
        print
        A=input("A: ")
        B=input("B: ")
        C=input("C: ")
        a=input("a: ")
        b=input("b: ")
        c=input("c: ")
        #a^2 = b^2 +c^2 -2 b^2 * c^2
        #
        #
        print
        print"     ."
        print"    /%s\ " % C
        print"   /   \ "
        print"%s/     \ %s" %(b,a) 
        print" /       \ "
        print"/%s_______%s\ " %(A,B)
        print"     %s " % c
        print
        end()
		
    elif menu == 14:
        #even odd calculator
        number = input('Enter a number to see if it is odd or even: ')
        if number % 2 == 0:
            print number,"is Even"
        else:
            print number,"is Odd"
        end()
		
    elif menu == 15:
        print "Proportion Calculator"
        print "Use lower-case x for the unknown"
        newline(1)
        print "   A       B   "
        print " ----- = ----- "
        print "   C       D   "
        A=raw_input("A: ")
        B=raw_input("B: ")
        C=raw_input("C: ")
        D=raw_input("D: ")
        if A =="x":
            #converting raw_input to float
            B=float(B)
            C=float(C)
            D=float(D)
            print "If needed simplify A,B,C,D"
            print "the proportion looks like: "
            print
            print "   %s      %s   " % (A,B)
            print " ----- = ----- "
            print "   %s      %s   " % (C,D)
            newline(1)
            A=C*B/D
            print "Multiply"
            print C,"x",B,"=",C*B
            newline(1)
            print "Divide"
            print C*B,"/",D,"=",A
            print
            print "   %s      %s   " % (A,B)
            print " ----- = ----- "
            print "   %s      %s   " % (C,D)
            print
            print "Your answer is:",A
            
        elif B=="x":
            A=float(A)
            C=float(C)
            D=float(D)
            print "If needed simplify A,B,C,D"
            print "the proportion looks like: "
            print
            print " %s      %s   " % (A,B)
            print " ----- = ----- "
            print " %s      %s   " % (C,D)
            newline(1)
            B=A*D/C
            print "Multiply"
            print C,"x",B,"=",A*D
            newline(1)
            print "Divide"
            print A*D,"/",C,"=",B
            print
            print "   %s      %s   " % (A,B)
            print " ----- = ----- "
            print "   %s      %s   " % (C,D)
            print
            print "Your answer is:",B
            
        elif C=="x":
            B=float(B)
            A=float(A)
            D=float(D)
            print "If needed simplify A,B,C,D"
            print "the proportion looks like: "
            print
            print "   %s      %s   " % (A,B)
            print " ----- = ----- "
            print "   %s      %s   " % (C,D)
            newline(1)
            C=A*D/B
            print "Multiply"
            print A,"x",D,"=",A*D
            newline(1)
            print "Divide"
            print A*D,"/",D,"=",C
            print
            print "   %s      %s   " % (A,B)
            print " ----- = ----- "
            print "   %s      %s   " % (C,D)
            print
            print "Your answer is:",C
        elif D=="x":
            B=float(B)
            A=float(A)
            C=float(C)
            print "If needed simplify A,B,C,D"
            print "the proportion looks like: "
            print
            print "   %s      %s   " % (A,B)
            print " ----- = ----- "
            print "   %s      %s   " % (C,D)
            newline(1)
            
            D=B*C/A
            print "Multiply"
            print B,"x",C,"=",C*B
            newline(1)
            print "Divide"
            print C*B,"/",A,"=",D
            print
            print "   %s      %s   " % (A,B)
            print " ----- = ----- "
            print "   %s      %s   " % (C,D)
            print
            print "Your answer is:",D
        end()
    elif menu == 16:
        #edge of a cube
        print"Cube edge Calculator"
        newline(1)
        print "this is an edge"
        print " ____|______"
        print "|\        | \ "
        print "| \_______|__\ "
        print "| |       |  | "
        print "|_|_______|  | "
        print "\ |        \ |"
        print " \|_________\| " 
        v = input('Enter the volume of the cube you wish to find the side of: ')
        side = sqrt(sqrt(v))
        print "     ",side
        print " _____|_____"
        print "|\        | \ "
        print "| \_______|__\ "
        print "| |       |  | "
        print "|_|_______|  | "
        print "\ |        \ |"
        print " \|_________\| " 
        print "The edge of the Cube is:",v
        end()
    elif menu == 17:
        #radius from Circumference
        print "Calculate Radius"
        c = input("Enter the circumference: ")
        pi = 3.1415926
        r =  c / 2 / pi
        d = r * 2
        print"                __.......__                          "
        print"           _.-''     |      '-..                    "
        print"        ,-'          |          '-.                 " 
        print"      ,'             |             '.   		" 
        print"    ,'               |               '\             " 
        print"   /                 |                 `            " 
        print"  /                  |                  `.          " 
        print" /                   |                    \         " 
        print"|                    |                     |         " 
        print"|                    |                     |         "  
        print"|                    |       ",r," <----Radius"  
        print"|                    ._____________________|        " 
        print"|                    |                    .'        " 
        print"|                    |                    |         " 
        print"|                    |                   .'         " 
        print" \                   |                  /           " 
        print"  \                  |                ,'            "  
        print"   `                 |               /              "     
        print"    '.               |             ,'               "        
        print"      '-.            |          _,'                 "         
        print"         '-._        |      _,-'                    "       
        print"             '`--....|..---'                        "
        print"                     |                              "
        print"      Diameter--> ",d
        newline(1)
        print"Radius Formula: Circumference / pi / 2"
        print c, "/pi/2"
        print "Radius: ",r
        end()

    elif menu == 18:
        #area of a n-agon
        print "Calculates the area of a figure with n number of sides"
        print "Just put in the length of the side and the apothem"
        print "                                       "
        print "               ,------------,          "
        print "             ,`              `,        "
        print "           ,`                  `,      "
        print "         .`                      `.    "
        print "         |                        |    "
        print "         |                        |    "
        print "         |           |            |    "
        print "         |           | -apothem   |    "
        print "          `.         |          .`     "
        print "            `.       |        .`       "
        print "              `.     |      .`         "
        print "                '----------`           "
        print "                   BASE                "
        a=input("Apothem: ")
        b=input("Length of side: ")
        n=input("number of sides: ")
        names= ["point","line","angle","triangle","square","pentagon","hexagon","heptagon","octagon",        "nonagon","decagon"]
        if n > 2:
            area= (.5 * a * b) * n
            print "The area of your figure is", area
            if n > 10:
                print "The name of your shape is a(n) ", n, "-agon"
            else:
                print "The name of your shape is a(n) ", names[n]
        else:
            print "Thats not a shape its a(n)", names[n]
        end()
    elif menu==19:
        #pythagorean triplet calc
        print "Pythagorean Triplet checker"
        print "this Module will take 3 numbers and see if they form a pythagorean triplet"
        print " |\ "
        print " | \ "
        print "B|  \ C"
        print " |   \ "
        print " |____\ "
        print "   A "
        print
        A=input("The shortest side: ")
        B=input("Second shortest side: ")
        C=input("Longest side: ")
        b=(A**2 - 1) / 2
        c=b+1
        if B==b and C==c:
            print "Yes this is a Pythagorean Triplet"
        else:
            print "No this is not a Pythagorean Triplet"
        
        end()

    elif menu==20:
        
        print "SA and LA of a prism"
        print "Works for all types of prisms"
        print "  ____________"
        print " <______------> <--- Radius"
        print " |            |"
        print " |            | H     ,___________________ "
        print " |            | e     |\                 |\ "
        print " |            | i     | \                | \ "
        print " |            | g     |  \_______________|__\ "
        print " |____________| h     |   |              |  | "
        print " <____________> t     |___|______________|  |  "
        print "                       \  |               \ | "
        print "                        \ |                \| "
        print "                         \|_________________| "
        print "Surface Area = Lateral area + 2Base "
        print "(Lateral area) = (perimeter of shape) * L "
        print "Surface Area = (perimeter of shape b) * L+ 2*(Area of shape b)"
        p=input("Perimeter of base: ")
        B=input("Area of Base: ")
        H=input("Height: ")
        LA=p*H
        SA=LA+(2*B)
        print "Step one: Find the Lateral Area"
        print p,"*",H,"=",LA
        print ""
        print "Step two:Find the Surface Area"
        print LA,"+(2 *",B,")=",SA
        print "Surface Area:",SA
        print "Lateral Area:",LA
        end()
    elif menu==21:
        print "Perimeter Calculator"
        print "To find the perimeter of a shape all you do is add up"
        print "all of the side lengths"
        n=input("number of sides: ")
        n2=n
        perimeter=0
        while n2>0:
            
            side=input("Enter side length: ")
            print n2,"sides left to enter."
            n2=n2-1
            print perimeter,"+",side,"=",perimeter+side
            perimeter =perimeter+side
        print "The of perimeter your shape is:",perimeter
        names= ["point","line","angle","triangle","square","pentagon","hexagon","heptagon","octagon",        "nonagon","decagon"]
        if n > 2:
            if n > 10:
                print "The name of your shape is a(n) ", n, "-agon"
            else:
                print "The name of your shape is a(n) ", names[n]
        else:
            print "Thats not a shape its a(n)", names[n]
        end()

    elif menu== 22:
        """ Javascript version of this script found at view-source:http://www.mathsisfun.com/simplifying-fractions.html
function go() {
 
	var input1 = eval(document.form1.text1.value);
	var input2 = eval(document.form1.text2.value);
 
	hcfval = hcf(input1,input2);
  
//	document.form1.answer.value = hcfval;
	document.form1.ans1.value = (input1/hcfval);
	document.form1.ans2.value = (input2/hcfval);
	
	ex = "The Greatest Common Factor is " + hcfval + "<br><br>";
	
	if (hcfval == 1) {
		ex += "(No reduction possible)";
	} else {
	
		ex += "The fraction simplifies like this: ";
		
		ex += "<span class=\"frac-large\"><sup>" + input1 + "</sup>/<sub>" + input2 + "</sub></span>";
		ex += " &raquo;&raquo; ";
		ex += "<span class=\"frac-large\"><sup>" + (input1/hcfval) + "</sup>/<sub>" + (input2/hcfval) + "</sub></span>";
	
	}
	var example = document.getElementById("example");
	example.innerHTML = ex;
  
}
 
function hcf(text1,text2){
  var gcd=1;
  if (text1>text2) {text1=text1+text2; text2=text1-text2; text1=text1-text2;}
  if ((text2==(Math.round(text2/text1))*text1)) {gcd=text1}else {
   for (var i = Math.round(text1/2) ; i > 1; i=i-1) {
    if ((text1==(Math.round(text1/i))*i))
     if ((text2==(Math.round(text2/i))*i)) {gcd=i; i=-1;}
   }
  }
  return gcd;
}
 
function lcm(t1,t2){
  var cm=1;
  var f=hcf(t1,t2);
  cm=t1*t2/f;
  return cm;
}
 
        """
        print "Fraction Simplifier"
        print ""
        print "  A"
        print "----- "
        print "  B"
        print
        A= input("A: ")
        B=input("B: ")

    elif menu==23:
        print "SA of a Cone"
        print "H = Height"
        print "l = Slant height"
        print "r= Radius"
        print "LA = pi * r *l"
        print
        
        question=0
        while question != "yes" or question != "no":
            question=raw_input("Do you have the slant height?")
            question.lower()
            if question== "yes":
                
                print""
                l=input("Slant Height: ")
                r=input("Radius: ")
                print "LA=pi *",r,"*",l
                LA=pi*r*l
                print "LA =",LA
                print
                print "Time to find the SA"
                print
                print"SA=",LA,"+ pi *",r,"^2"
                SA=LA+pi*(r**2)
                print"SA =",SA


                
                break
            elif question=="no":
                H=input("Height: ")
                r=input("Radius: ")
                print"Step one: Find the slant height"
                print"H|\ "
                print"E| \  SLANT HEIGHT"
                print"I|  \ "
                print"G|___\ "
                print"H   \ "
                print"T   Radius"

                print"Use Pythagorean Theorum"
                print"A**2+B**2=C**2"
                print H,"**2 +",r,"**2 = c**2"
                c=sqrt((H**2)+(r**2))
                print H**2,"+",r**2,"=",c**2
                print "sqrt(",c**2,") =",c
                print
                print "The slant height is:",c
                print ""
                l=c
                print"Step Two: Plug in variables"
                print""
                print "LA=pi *",r,"*",l
                LA=pi*r*l
                print "LA =",LA
                print
                print "Time to find the SA"
                print
                print"SA=",LA,"+ pi *",r,"^2"
                SA=LA+pi*(r**2)
                print"SA =",SA
                
                break
                
        end()
            
        
    elif menu==24:
        print"SA of a pyramid"
        print"SA =0.5*P*L + B"
        print"P= Perimeter of base"
        print"L= Slant Height"
        P=input("What is the perimeter of the base? ")
        L=input("What is the slant height? ")
        LA=0.5*P*L
        print "Step One: get the Lateral area"
        print "LA = 0.5 * P * L"
        print "LA = 0.5 *",P,"*",L
        print "LA =",LA
        yesno("Do you have the Area of the Base yet?")
        
        if question=="no":
            print "Calculates the area of a figure with n number of sides"
            print "Just put in the length of the side and the apothem"
            print "                                       "
            print "               ,------------,          "
            print "             ,`              `,        "
            print "           ,`                  `,      "
            print "         .`                      `.    "
            print "         |                        |    "
            print "         |                        |    "
            print "         |           |            |    "
            print "         |           | -apothem   |    "
            print "          `.         |          .`     "
            print "            `.       |        .`       "
            print "              `.     |      .`         "
            print "                '----------`           "
            print "                   BASE                "
            a=input("Apothem: ")
            b=input("Length of side: ")
            n=input("number of sides: ")
            names= ["point","line","angle","triangle","square","pentagon","hexagon","heptagon","octagon",        "nonagon","decagon"]
            if n > 2:
                B= (.5 * a * b) * n
                print "The area of your figure is", B
                if n > 10:
                    print "The name of your shape is a(n) ", n, "-agon"
                else:
                    print "The name of your shape is a(n) ", names[n]
            else:
                print "Thats not a shape its a(n)", names[n]
        else:    
            B=input("Area of Base:")
        print
        print "Step Two: Get the Surface Area"
        print "SA= LA + B"
        SA=LA+B
        print "SA=",LA,"+",B
        print "SA =",SA
        end()
        
    elif menu == 911:
        print "Help"
        print"--------"
        print "To use Formula Conquer basically look through the list of modules,"
        print"find what you need use the number next to the module name, type it in"
        print"then hit enter. The program is pretty self explanitory it will guide you"
        print "through the other steps."
        print "if you have any problems with the program email jonmclaren1@gmail.com"
        print "be sure to have the version number in your email."
        print "Your Version is",version
        end()
                
    elif menu == 912:
        print "Update"
        print "Since formula conquerer doesn't have an auto update feature, you"
        print "Must manually check the website for an update:"
        print "        http://code.google.com/p/formulaconquerer/ "
        print
        print "here's how you can see if you need to update Formula Conquerer:"
        print "Your version number is:",version
        checkv= input("Enter the current version from the website: ")
        if checkv>version:
            print "Your Version is out of date! It is highly suggested that you"
            print "Update now!"
        elif checkv<version:
            print "Hmm, weird you have a version that is earlier than released."
        elif checkv==version:
            print "You have the newest Version of Formula Conquerer congratulations"
            print "You do not need to update!"
        end()
        
    else:
        print "Invalid option, please enter the number of the module in the menu"
        newline(3)
       

