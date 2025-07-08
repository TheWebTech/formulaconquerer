document.addEventListener('DOMContentLoaded', () => {
    const chatHistory = document.getElementById('chat-history');
    const userInput = document.getElementById('user-input');
    // const sendButton = document.getElementById('send-button'); // Not used due to TI-83 style

    const PI = 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679;
    const TITLE = "Formula Conqueror";

    let currentModule = null; // To track which module is active
    let moduleStep = 0;     // To track progress within a module
    let tempStorage = {};   // Temporary storage for multi-step inputs
    let previousAns = 0;    // For the calculator's Ans feature

    // --- Core Chat Functions ---

    function addMessageToHistory(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        if (isUser) {
            messageDiv.classList.add('user-message');
            messageDiv.textContent = `> ${message}`; // Add a prompt indicator for user messages
        } else {
            messageDiv.classList.add('program-message');
            messageDiv.textContent = message;
        }
        chatHistory.appendChild(messageDiv); // Add to bottom
        chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to the latest message
    }

    function clearChatHistory() {
        chatHistory.innerHTML = '';
    }

    function displayMainMenu() {
        addMessageToHistory(`Welcome to ${TITLE}!`);
        addMessageToHistory("Created by Jon McLaren");
        addMessageToHistory("--------------------------------------------");
        addMessageToHistory(""); // Simulating newline(1)

        const menuText = `Menu:
Module Name           #
-----------         -----
Basic Calculator       1
Circumfrence           2
Area of rect.          3
Area of Triangle       4
Volume of Cube         5
Compare Numbers        6
Prime                  7
Temp. converter        8
Age Calculator         9
Metric Unit Converter 10
Metric English Conv.  11
Simple Equation Calc. 12
Even or Odd           14
Proportion Calc.      15
Edge of a Cube        16
Radius of a Circle    17
Area of Any Polygon   18
Pythagorean Triplet?  19
Surface Area +lat.area20
Perimeter Calculator  21
Help Module          911
Update               912
------------------------
For Help type 911
To exit type 0`;
        addMessageToHistory(menuText);
        addMessageToHistory("Which formula to conquer? (number)");
        currentModule = null; // Reset current module
        moduleStep = 0;
        tempStorage = {};
    }

    // --- Input Handling ---

    userInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const inputText = userInput.value.trim();
            if (inputText) {
                addMessageToHistory(inputText, true); // Display user's input

                // Command processing
                if (currentModule === null) {
                    handleMainMenuInput(inputText);
                } else if (currentModule === 'basicCalculator') {
                    handleBasicCalculatorInput(inputText);
                } else if (currentModule === 'circumferenceCalculator') {
                    handleCircumferenceInput(inputText);
                } else if (currentModule === 'areaRectangleCalculator') {
                    handleAreaRectangleInput(inputText);
                } else if (currentModule === 'areaTriangleCalculator') {
                    handleAreaTriangleInput(inputText);
                } else if (currentModule === 'volumeCubePrismCalculator') {
                    handleVolumeCubePrismInput(inputText);
                } else if (currentModule === 'compareNumbers') {
                    handleCompareNumbersInput(inputText);
                } else if (currentModule === 'primeCalculator') {
                    handlePrimeCalculatorInput(inputText);
                } else if (currentModule === 'tempConverter') {
                    handleTempConverterInput(inputText);
                } else if (currentModule === 'ageCalculator') {
                    handleAgeCalculatorInput(inputText);
                } else if (currentModule === 'metricConverter') {
                    handleMetricConverterInput(inputText);
                } else if (currentModule === 'metricEnglishConverter') {
                    handleMetricEnglishConverterInput(inputText);
                } else if (currentModule === 'simpleEquationCalculator') {
                    handleSimpleEquationInput(inputText);
                } else if (currentModule === 'evenOddChecker') {
                    handleEvenOddCheckerInput(inputText);
                } else if (currentModule === 'proportionCalculator') {
                    handleProportionCalculatorInput(inputText);
                } else if (currentModule === 'edgeOfCubeCalculator') {
                    handleEdgeOfCubeInput(inputText);
                } else if (currentModule === 'radiusOfCircleCalculator') {
                    handleRadiusOfCircleInput(inputText);
                } else if (currentModule === 'areaRegularPolygonCalculator') {
                    handleAreaRegularPolygonInput(inputText);
                } else if (currentModule === 'pythagoreanTripletChecker') {
                    handlePythagoreanTripletInput(inputText);
                } else if (currentModule === 'surfaceAreaCalculator') {
                    handleSurfaceAreaCalculatorInput(inputText);
                } else if (currentModule === 'perimeterCalculator') {
                    handlePerimeterCalculatorInput(inputText);
                } else if (currentModule === 'helpModule') {
                    handleHelpModuleInput(inputText);
                } else {
                    // Placeholder for other modules
                    addMessageToHistory("Module-specific input handling not yet implemented for this module.");
                    displayMainMenu(); // Go back to main menu
                }
                userInput.value = ''; // Clear input field
            }
        }
    });

    function handleMainMenuInput(input) {
        const choice = parseInt(input);
        if (isNaN(choice)) {
            addMessageToHistory("Invalid input. Please enter a number.");
            displayMainMenu(); // Or just ask for input again
            return;
        }

        addMessageToHistory(""); // newline(2) in python
        addMessageToHistory("");

        switch (choice) {
            case 0:
                addMessageToHistory(`Thank you for using ${TITLE}!`);
                // In a real app, might disable input here or add a restart button
                currentModule = 'exit'; // Special state
                break;
            case 1:
                startBasicCalculator();
                break;
            case 2:
                startCircumferenceCalculator();
                break;
            case 3:
                startAreaRectangleCalculator();
                break;
            case 4:
                startAreaTriangleCalculator();
                break;
            case 5:
                startVolumeCubePrismCalculator();
                break;
            case 6:
                startCompareNumbers();
                break;
            case 7:
                startPrimeCalculator();
                break;
            case 8:
                startTempConverter();
                break;
            case 9:
                startAgeCalculator();
                break;
            case 10:
                startMetricConverter();
                break;
            case 11:
                startMetricEnglishConverter();
                break;
            case 12:
                startSimpleEquationCalculator();
                break;
            // Skipped 13 (Law of Sines - incomplete in Python)
            case 14:
                startEvenOddChecker();
                break;
            case 15:
                startProportionCalculator();
                break;
            case 16:
                startEdgeOfCubeCalculator();
                break;
            case 17:
                startRadiusOfCircleCalculator();
                break;
            case 18:
                startAreaRegularPolygonCalculator();
                break;
            case 19:
                startPythagoreanTripletChecker();
                break;
            case 20:
                startSurfaceAreaCalculator();
                break;
            case 21:
                startPerimeterCalculator();
                break;
            // ... other cases will be added here ...
            case 911:
                startHelpModule();
                break;
            case 912:
                // As per user request, skip full implementation. Show placeholder message.
                // Python: print "Update" (or similar, original content not fully known)
                addMessageToHistory("Update feature: Check https://github.com/TheWebTech/formulaconquerer for new versions.");
                displayMainMenu(); // Placeholder
                break;
            default:
                addMessageToHistory("Invalid menu choice. Please try again.");
                // No need to call displayMainMenu() here as it's called if currentModule remains null after this
                displayMainMenu(); // Show menu again
        }
    }

    // Metric Unit Converter (Module 10)
    const metricUnits = {
        '-6': "Micrometer",
        '-3': "Millimeter",
        '-2': "Centimeter",
        '-1': "Decimeter",
        '0':  "Meter",
        '1':  "Dekameter",
        '2':  "Hectometer",
        '3':  "Kilometer"
    };

    function displayMetricUnitMenu() {
        addMessageToHistory("Metric unit converter");
        addMessageToHistory(" #    unit type");
        addMessageToHistory("---  ------------");
        for (const power in metricUnits) {
            addMessageToHistory(` ${power.padEnd(3)} ${metricUnits[power]}`);
        }
    }

    function startMetricConverter() {
        currentModule = 'metricConverter';
        moduleStep = 1; // Expecting 'convert from' power
        tempStorage = {};
        displayMetricUnitMenu();
        addMessageToHistory("Which unit would you like to convert from (enter #):");
    }

    function handleMetricConverterInput(input) {
        const s_input = input.toLowerCase().trim();

        if (moduleStep === 1) { // Expecting 'convert from' power
            if (!metricUnits.hasOwnProperty(s_input)) {
                addMessageToHistory("Invalid unit power. Please select from the list.");
                addMessageToHistory("Which unit would you like to convert from (enter #):");
                return;
            }
            tempStorage.convertFromPower = parseInt(s_input);
            addMessageToHistory("Amount of unit: ");
            moduleStep = 2;
        } else if (moduleStep === 2) { // Expecting amount
            const amount = parseFloat(s_input);
            if (isNaN(amount)) {
                addMessageToHistory("Invalid amount. Please enter a number.");
                addMessageToHistory("Amount of unit: ");
                return;
            }
            tempStorage.amountFrom = amount;
            addMessageToHistory("What unit would you like to convert to (enter #):");
            moduleStep = 3;
        } else if (moduleStep === 3) { // Expecting 'convert to' power
             if (!metricUnits.hasOwnProperty(s_input)) {
                addMessageToHistory("Invalid unit power. Please select from the list.");
                addMessageToHistory("What unit would you like to convert to (enter #):");
                return;
            }
            tempStorage.convertToPower = parseInt(s_input);

            const exponent = tempStorage.convertToPower - tempStorage.convertFromPower;
            const convertedUnit = tempStorage.amountFrom * Math.pow(10, exponent);

            addMessageToHistory(`The converted Unit: ${convertedUnit}`);
            addMessageToHistory("Want to understand how this works or convert other units? (yes/no)");
            moduleStep = 4;
        } else if (moduleStep === 4) { // Expecting yes/no for explanation
            if (s_input === 'yes' || s_input === 'y') {
                const explanation = `How it works
------------------
Every metric unit is based on 10, so we simply took the unit that you want to convert to - what you convert from that ='s the exponent
After we have the exponent we plug the number to be converted, and the exponent number into this formula:
a * (10 ** b)
a is the number to be converted
b is the exponent
** is just a symbol saying that b is an exponent of 10

How can I convert units not listed?
----------------------------------------
Find out in relation to 1 Meter, what exponent that metric unit would be that your converting to or from and simply use those numbers in our metric converter`;
                addMessageToHistory(explanation);
            } else if (!(s_input === 'no' || s_input === 'n')) {
                 addMessageToHistory("Invalid input. Please type 'yes' or 'no'.");
                 addMessageToHistory("Want to understand how this works or convert other units? (yes/no)");
                 return;
            }
            // Whether yes or no, proceed to menu return prompt
            addMessageToHistory("\nConversion complete. Type 'menu' or press Enter to return to menu.");
            moduleStep = 101;
        } else if (moduleStep === 101) {
            displayMainMenu();
        }
    }

    // Age Calculator (Module 9)
    function startAgeCalculator() {
        currentModule = 'ageCalculator';
        moduleStep = 1; // Expecting name
        tempStorage = {};
        addMessageToHistory("Age Calculator");
        addMessageToHistory("Who's age am I calculating? ");
    }

    function handleAgeCalculatorInput(input) {
        const s_input = input.trim(); // Name can have spaces

        if (moduleStep === 1) { // Name
            if (!s_input) {
                addMessageToHistory("Name cannot be empty.");
                addMessageToHistory("Who's age am I calculating? ");
                return;
            }
            tempStorage.name = s_input;
            addMessageToHistory("What year was the person born? ");
            moduleStep = 2;
        } else if (moduleStep === 2) { // Birth Year
            const year = parseInt(s_input);
            if (isNaN(year) || year < 0 || year > new Date().getFullYear() + 100) { // Basic validation
                addMessageToHistory("Invalid year. Please enter a reasonable birth year.");
                addMessageToHistory("What year was the person born? ");
                return;
            }
            tempStorage.birthYear = year;
            addMessageToHistory("What is the current year or year they died? ");
            moduleStep = 3;
        } else if (moduleStep === 3) { // Current/Death Year
            const year = parseInt(s_input);
            if (isNaN(year) || year < (tempStorage.birthYear || 0)) { // Must be >= birth year
                addMessageToHistory("Invalid year. Must be same or after birth year.");
                addMessageToHistory("What is the current year or year they died? ");
                return;
            }
            tempStorage.currentYear = year;
            addMessageToHistory("What was the number of the Month they were born in? (1-12)");
            moduleStep = 4;
        } else if (moduleStep === 4) { // Birth Month
            const month = parseInt(s_input);
            if (isNaN(month) || month < 1 || month > 12) {
                addMessageToHistory("Invalid month. Please enter a number between 1 and 12.");
                addMessageToHistory("What was the number of the Month they were born in? (1-12)");
                return;
            }
            tempStorage.birthMonth = month;
            addMessageToHistory("What is the current month right now or month they died in? (1-12)");
            moduleStep = 5;
        } else if (moduleStep === 5) { // Current/Death Month
            const month = parseInt(s_input);
            if (isNaN(month) || month < 1 || month > 12) {
                addMessageToHistory("Invalid month. Please enter a number between 1 and 12.");
                addMessageToHistory("What is the current month right now or month they died in? (1-12)");
                return;
            }
            tempStorage.currentMonth = month;
            addMessageToHistory("Born on what day of month? (1-31)");
            moduleStep = 6;
        } else if (moduleStep === 6) { // Birth Day
            const day = parseInt(s_input);
            // Basic day validation, not checking against specific month lengths for simplicity here
            if (isNaN(day) || day < 1 || day > 31) {
                addMessageToHistory("Invalid day. Please enter a number between 1 and 31.");
                addMessageToHistory("Born on what day of month? (1-31)");
                return;
            }
            tempStorage.birthDay = day;
            addMessageToHistory("What is the Current day of the month or day of death? (1-31)");
            moduleStep = 7;
        } else if (moduleStep === 7) { // Current/Death Day
            const day = parseInt(s_input);
            if (isNaN(day) || day < 1 || day > 31) {
                addMessageToHistory("Invalid day. Please enter a number between 1 and 31.");
                addMessageToHistory("What is the Current day of the month or day of death? (1-31)");
                return;
            }
            tempStorage.currentDay = day;

            // Perform simple calculation as in Python script
            const ageYears = tempStorage.currentYear - tempStorage.birthYear;
            const ageMonths = tempStorage.currentMonth - tempStorage.birthMonth;
            const ageDays = tempStorage.currentDay - tempStorage.birthDay;

            addMessageToHistory(`${tempStorage.name} is ${ageYears} years, ${ageMonths} months, ${ageDays} days old.`);

            addMessageToHistory("\nCalculation complete. Type 'menu' or press Enter to return to menu.");
            moduleStep = 101;
        } else if (moduleStep === 101) { // Waiting for menu return
            displayMainMenu();
        }
    }


    // --- Initial Load ---
    displayMainMenu();

    // --- Module Implementations ---

    // Basic Calculator (Module 1)
    function startBasicCalculator() {
        currentModule = 'basicCalculator';
        moduleStep = 1; // Ready for first problem
        addMessageToHistory("BASIC CALCULATOR");
        const instructions = `Type out the problem, use the following symbols:
+ to add
- to subtract
/ to divide
* to multiply
** for power (e.g., 10**2 = 100)
sqrt(x) for square root (e.g., sqrt(4))
sin(x), cos(x), tan(x) (e.g., sin(90))
Ans to use the previous answer
Enter "end" to return to the main menu.
------------------------------------`;
        addMessageToHistory(instructions);
        addMessageToHistory("Enter problem:");
    }

    function handleBasicCalculatorInput(problemStr) {
        if (problemStr.toLowerCase() === "end") {
            addMessageToHistory("Exiting calculator...");
            displayMainMenu();
            return;
        }

        // Prepare the expression for evaluation
        let processedProblem = problemStr.replace(/Ans/gi, previousAns.toString());

        // Replace functions like sqrt(x) with Math.sqrt(x)
        // Need to be careful with order and global replacements
        processedProblem = processedProblem.replace(/sqrt\(/gi, "Math.sqrt(");
        processedProblem = processedProblem.replace(/sin\(/gi, "Math.sin("); // Note: Math.sin expects radians
        processedProblem = processedProblem.replace(/cos\(/gi, "Math.cos("); // Note: Math.cos expects radians
        processedProblem = processedProblem.replace(/tan\(/gi, "Math.tan("); // Note: Math.tan expects radians
        // Python's math.sin, etc. also expect radians by default if not using degrees version.

        // Power operator ** is standard in modern JS, so no replacement needed if browser supports ES7+
        // For wider compatibility, could replace with Math.pow(base, exp)

        try {
            // SECURITY WARNING: eval() is dangerous if the input string can be arbitrary code.
            // Here, it's used to mimic the Python script's behavior which also evaluates input.
            // In a production web app, a dedicated math expression parser would be safer.
            const result = eval(processedProblem);
            if (typeof result === 'number' && !isNaN(result)) {
                addMessageToHistory(`The Answer is: ${result}`);
                previousAns = result;
            } else {
                addMessageToHistory("Invalid calculation or result.");
            }
        } catch (error) {
            addMessageToHistory(`Error: ${error.message}`);
        }
        addMessageToHistory("Enter problem:"); // Prompt for next problem
    }

    // Circumference (Module 2)
    function startCircumferenceCalculator() {
        currentModule = 'circumferenceCalculator';
        moduleStep = 1; // Expecting radius input
        tempStorage = {}; // Clear any previous temp data
        addMessageToHistory("Calculate Circumference");
        addMessageToHistory("Radius: ");
    }

    function handleCircumferenceInput(input) {
        if (moduleStep === 1) { // Expecting radius
            const r = parseFloat(input);
            if (isNaN(r) || r < 0) {
                addMessageToHistory("Invalid radius. Please enter a positive number.");
                addMessageToHistory("Radius: "); // Re-prompt
                return;
            }
            tempStorage.radius = r;

            const circumference = 2 * PI * r;
            const diameter = r * 2;

            // ASCII Art for Circle - needs careful formatting
            // Using template literals and ensuring spaces are preserved.
            // The r value needs to be formatted nicely if it's long.
            let radiusStr = r.toString();
            if (radiusStr.length > 7) radiusStr = r.toFixed(2); // Limit length for art

            const circleArt = `
                __.......__
           _.-''     |      '-..
        ,-'          |          '-.
      ,'             |             '.
    ,'               |               '\\
   /                 |                 \`
  /                  |                  \`.
 /                   |                    \\
|                    |                     |
|                    |                     |
|                    |       ${radiusStr.padEnd(7)} <----Radius
|                    ._____________________|
|                    |                    .'
|                    |                    |
|                    |                   .'
 \\                   |                  /
  \\                  |                ,'
   \`                 |               /
    '.               |             ,'
      '-.            |          _,'
         '-._        |      _,-'
             \`--....|..---'
                     |
      Diameter--> ${diameter.toFixed(2)}
`;
            addMessageToHistory(circleArt);
            addMessageToHistory(""); // newline(1)
            addMessageToHistory(`Circumference Formula: 2 x PI x r`);
            addMessageToHistory(` 2 x ${PI.toFixed(4)} x ${r}`); // Show PI to a few places
            addMessageToHistory(`Circumference: ${circumference.toFixed(4)}`);

            addMessageToHistory("\nCalculation complete. Type 'menu' or press Enter to return to menu.");
            moduleStep = 2; // Waiting for 'menu' or Enter to go back
        } else if (moduleStep === 2) { // Waiting for confirmation to go to menu
            displayMainMenu();
        }
    }

    // Area of Rectangle/Square (Module 3)
    function startAreaRectangleCalculator() {
        currentModule = 'areaRectangleCalculator';
        moduleStep = 1; // Expecting length
        tempStorage = {};
        addMessageToHistory("Area of a Square/rectangle calculator");
        const initialArt = ` _________  L
|         | E
|         | N
|         | G
|_________| T
   Width    H`;
        addMessageToHistory(initialArt);
        addMessageToHistory("A = Length x Width");
        addMessageToHistory("For a square enter the same number for length and width.");
        addMessageToHistory("Length of shape: ");
    }

    function handleAreaRectangleInput(input) {
        if (moduleStep === 1) { // Expecting length
            const l = parseFloat(input);
            if (isNaN(l) || l <= 0) {
                addMessageToHistory("Invalid length. Please enter a positive number.");
                addMessageToHistory("Length of shape: ");
                return;
            }
            tempStorage.length = l;
            const lengthArt = ` _________
|         |
|         | ${l}
|         |
|_________|
   Width    `;
            addMessageToHistory(lengthArt);
            addMessageToHistory("Width of shape: ");
            moduleStep = 2;
        } else if (moduleStep === 2) { // Expecting width
            const w = parseFloat(input);
            if (isNaN(w) || w <= 0) {
                addMessageToHistory("Invalid width. Please enter a positive number.");
                addMessageToHistory("Width of shape: ");
                return;
            }
            const l = tempStorage.length;
            const area = l * w;
            let resultArt = "";
            let resultMessage = "";

            if (l === w) {
                resultArt = ` _________
|         |
|         | ${l}
|         |
|_________|
    ${w}`;
                resultMessage = `The area of your Square is: ${area}`;
            } else {
                if (l > w) {
                    resultArt = ` _________
|         |
|         |
|         |
|         | ${l}
|         |
|         |
|_________|
    ${w}`;
                } else { // w > l
                    resultArt = ` _____________
|             |
|             | ${l}
|             |
|_____________|
       ${w}`;
                }
                resultMessage = `The area of your rectangle is: ${area}`;
            }
            addMessageToHistory(resultArt);
            addMessageToHistory(`${l} x ${w} = ${area}`);
            addMessageToHistory(resultMessage);

            addMessageToHistory("\nCalculation complete. Type 'menu' or press Enter to return to menu.");
            moduleStep = 3; // Waiting for confirmation
        } else if (moduleStep === 3) {
            displayMainMenu();
        }
    }

    // Area of Triangle (Module 4)
    function startAreaTriangleCalculator() {
        currentModule = 'areaTriangleCalculator';
        moduleStep = 1; // Expecting base
        tempStorage = {};
        addMessageToHistory("Area of a Triangle");
        addMessageToHistory("Area = 1/2 * base * Height");
        const initialArt = `   .
   |\\
   | \\
 H |  \\
 E |   \\
 I |    \\
 G |     \\
 H |      \\
 T |       \\
   |        \\
   |_        \\
   |_|________\\
       base `;
        addMessageToHistory(initialArt);
        addMessageToHistory("Base: ");
    }

    function handleAreaTriangleInput(input) {
        if (moduleStep === 1) { // Expecting base
            const b = parseFloat(input);
            if (isNaN(b) || b <= 0) {
                addMessageToHistory("Invalid base. Please enter a positive number.");
                addMessageToHistory("Base: ");
                return;
            }
            tempStorage.base = b;
            const baseArt = `   .
   |\\
   | \\
 H |  \\
 E |   \\
 I |    \\
 G |     \\
 H |      \\
 T |       \\
   |        \\
   |_        \\
   |_|________\\
       ${b}`;
            addMessageToHistory(baseArt);
            addMessageToHistory("Height: ");
            moduleStep = 2;
        } else if (moduleStep === 2) { // Expecting height
            const h = parseFloat(input);
            if (isNaN(h) || h <= 0) {
                addMessageToHistory("Invalid height. Please enter a positive number.");
                addMessageToHistory("Height: ");
                return;
            }
            tempStorage.height = h;
            addMessageToHistory("Is this a right Triangle? (yes/no): ");
            moduleStep = 3;
        } else if (moduleStep === 3) { // Expecting yes/no for right triangle
            const isRightInput = input.toLowerCase();
            const b = tempStorage.base;
            const h = tempStorage.height;
            const area = 0.5 * b * h;
            let resultArt = "";

            if (isRightInput === 'yes' || isRightInput === 'y') {
                const hypotenuseSquared = (h * h) + (b * b);
                const hypotenuse = Math.sqrt(hypotenuseSquared);
                resultArt = `   .
   |\\
   | \\
   |  \\
   |   \\
   |    \\ ${hypotenuse.toFixed(2)}
 ${h} |     \\
   |      \\
   |       \\
   |        \\
   |_        \\
   |_|________\\
       ${b}`;
                addMessageToHistory(resultArt);
                addMessageToHistory("Pythagorean Theorem: a^2 + b^2 = c^2");
                addMessageToHistory(`Area of a triangle: (1/2) * Base * Height`);
                addMessageToHistory(`(1/2) * ${b} * ${h}`);
                addMessageToHistory(`The Hypotenuse side is: ${hypotenuse.toFixed(4)}`);
                addMessageToHistory(`The area of the triangle is: ${area.toFixed(4)}`);
            } else if (isRightInput === 'no' || isRightInput === 'n') {
                resultArt = `             .
            /|\\
           / | \\
          /  |  \\
         /   |   \\
        /    |${h}  \\
       /     |     \\
      /      |_     \\
     /_______|_|_____\\
             ${b}`;
                addMessageToHistory(resultArt);
                addMessageToHistory(`(1/2) * ${b} * ${h}`);
                addMessageToHistory(`The area of the triangle is: ${area.toFixed(4)}`);
            } else {
                addMessageToHistory("Invalid input. Please type 'yes' or 'no'.");
                addMessageToHistory("Is this a right Triangle? (yes/no): ");
                return; // Stay in step 3
            }
            addMessageToHistory("\nCalculation complete. Type 'menu' or press Enter to return to menu.");
            moduleStep = 4; // Waiting for confirmation
        } else if (moduleStep === 4) {
            displayMainMenu();
        }
    }

    // Volume of Cube/Rectangular Prism (Module 5)
    function startVolumeCubePrismCalculator() {
        currentModule = 'volumeCubePrismCalculator';
        moduleStep = 1; // Asking if it's a cube
        tempStorage = {};
        addMessageToHistory("Cube/Rectangular Prism Volume calculator");
        const initialArt = `this is an edge
 ____|______
|\\        | \\
| \\_______|__\\
| |       |  |
|_|_______|  |
 \\ |        \\ |
  \\|_________\\| `;
        addMessageToHistory(initialArt);
        addMessageToHistory("Is the Shape a cube? (yes/no): ");
    }

    function handleVolumeCubePrismInput(input) {
        const s_input = input.toLowerCase().trim();

        if (moduleStep === 1) { // Is it a cube?
            if (s_input === 'yes' || s_input === 'y') {
                tempStorage.isCube = true;
                addMessageToHistory("Enter an edge of the cube: ");
                moduleStep = 2; // Proceed to get single edge for cube
            } else if (s_input === 'no' || s_input === 'n') {
                tempStorage.isCube = false;
                addMessageToHistory("Enter the first edge (length): ");
                moduleStep = 2; // Proceed to get first edge for prism
            } else {
                addMessageToHistory("Invalid input. Please type 'yes' or 'no'.");
                addMessageToHistory("Is the Shape a cube? (yes/no): ");
            }
        } else if (moduleStep === 2) { // Expecting first/only edge
            const edge1 = parseFloat(s_input);
            if (isNaN(edge1) || edge1 <= 0) {
                addMessageToHistory("Invalid edge. Please enter a positive number.");
                if (tempStorage.isCube) addMessageToHistory("Enter an edge of the cube: ");
                else addMessageToHistory("Enter the first edge (length): ");
                return;
            }
            tempStorage.edge1 = edge1; // Store as edge1 for consistency in display later
            if (tempStorage.isCube) {
                tempStorage.volume = Math.pow(edge1, 3);
                displayVolumeResults();
                moduleStep = 101; // Go to end step
            } else {
                addMessageToHistory("Enter the second edge (width): ");
                moduleStep = 3;
            }
        } else if (moduleStep === 3) { // Prism - expecting second edge (width)
            const edge2 = parseFloat(s_input);
            if (isNaN(edge2) || edge2 <= 0) {
                addMessageToHistory("Invalid edge. Please enter a positive number.");
                addMessageToHistory("Enter the second edge (width): ");
                return;
            }
            tempStorage.edge2 = edge2;
            addMessageToHistory("Enter the third edge (height): ");
            moduleStep = 4;
        } else if (moduleStep === 4) { // Prism - expecting third edge (height)
            const edge3 = parseFloat(s_input);
            if (isNaN(edge3) || edge3 <= 0) {
                addMessageToHistory("Invalid edge. Please enter a positive number.");
                addMessageToHistory("Enter the third edge (height): ");
                return;
            }
            tempStorage.edge3 = edge3;
            tempStorage.volume = tempStorage.edge1 * tempStorage.edge2 * tempStorage.edge3;
            displayVolumeResults();
            moduleStep = 101; // Go to end step
        } else if (moduleStep === 101) { // Waiting for confirmation to go to menu
            displayMainMenu();
        }
    }

    function displayVolumeResults() {
        const sideForArt = tempStorage.edge1; // Python script always shows the first entered side in art
        const volume = tempStorage.volume;
        let formulaMessage = "";

        if (tempStorage.isCube) {
            formulaMessage = "Formula: side Cubed";
        } else {
            formulaMessage = "Formula: side1 * side2 * side3";
        }

        const resultArt = `     ${sideForArt}
 _____|_____
|\\        | \\
| \\_______|__\\
| |       |  |
|_|_______|  |
 \\ |        \\ |
  \\|_________\\| `;
        addMessageToHistory(resultArt);
        addMessageToHistory(""); // Newline
        addMessageToHistory(formulaMessage);
        addMessageToHistory(""); // Newline
        addMessageToHistory(`The Volume of the ${tempStorage.isCube ? 'Cube' : 'Prism'} is: ${volume.toFixed(4)}`);
        addMessageToHistory("\nCalculation complete. Type 'menu' or press Enter to return to menu.");
    }

    // Compare Numbers (Module 6)
    function startCompareNumbers() {
        currentModule = 'compareNumbers';
        moduleStep = 1; // Expecting first number
        tempStorage = {};
        addMessageToHistory("Compare Numbers");
        addMessageToHistory("You may even use equations for example:");
        addMessageToHistory("2*2 is equal to 4");
        addMessageToHistory("Works well for fractions and roots too.");
        addMessageToHistory(""); // Simulating newline(1)
        addMessageToHistory("Enter the first number: ");
    }

    function evaluateNumericInput(inputStr) {
        // Reuse parts of calculator's evaluation logic if complex functions are needed.
        // For now, direct eval as Python's input() would do for simple expressions.
        // Ensure Math functions are available if used like sqrt(), sin() etc.
        let processedInput = inputStr.replace(/Ans/gi, previousAns.toString()); // If Ans is allowed here
        processedInput = processedInput.replace(/sqrt\(/gi, "Math.sqrt(");
        processedInput = processedInput.replace(/sin\(/gi, "Math.sin(");
        processedInput = processedInput.replace(/cos\(/gi, "Math.cos(");
        processedInput = processedInput.replace(/tan\(/gi, "Math.tan(");
        // Add PI if needed: processedInput = processedInput.replace(/pi/gi, Math.PI.toString());

        try {
            const result = eval(processedInput);
            if (typeof result === 'number' && !isNaN(result)) {
                return result;
            }
            return null; // Not a valid number
        } catch (error) {
            return null; // Evaluation error
        }
    }

    function handleCompareNumbersInput(input) {
        if (moduleStep === 1) { // Expecting first number
            const n1 = evaluateNumericInput(input);
            if (n1 === null) {
                addMessageToHistory("Invalid input for first number. Please enter a valid number or expression.");
                addMessageToHistory("Enter the first number: ");
                return;
            }
            tempStorage.n1 = n1;
            addMessageToHistory("Enter the second number: ");
            moduleStep = 2;
        } else if (moduleStep === 2) { // Expecting second number
            const n2 = evaluateNumericInput(input);
            if (n2 === null) {
                addMessageToHistory("Invalid input for second number. Please enter a valid number or expression.");
                addMessageToHistory("Enter the second number: ");
                return;
            }
            const n1 = tempStorage.n1;
            let comparisonMessage = "";
            let numLine = "";

            if (n1 > n2) {
                comparisonMessage = `${n1} is greater than ${n2}\n${n2} is less than ${n1}`;
                numLine = `<--|---------------------|--> \n  ${n2}                    ${n1}`;
            } else if (n2 > n1) {
                comparisonMessage = `${n2} is greater than ${n1}\n${n1} is less than ${n2}`;
                numLine = `<--|---------------------|--> \n  ${n1}                    ${n2}`;
            } else { // n1 === n2
                comparisonMessage = `${n1} is equal to ${n2}\n${n2} is equal to ${n1}`;
            }

            addMessageToHistory(comparisonMessage);
            if (numLine) {
                addMessageToHistory("        Number Line");
                addMessageToHistory(numLine);
            }

            addMessageToHistory("\nComparison complete. Type 'menu' or press Enter to return to menu.");
            moduleStep = 3;
        } else if (moduleStep === 3) {
            displayMainMenu();
        }
    }

    // Prime Number Calculator (Module 7)
    // Original Python code by Zach Tilford
    function startPrimeCalculator() {
        currentModule = 'primeCalculator';
        moduleStep = 1; // Expecting number
        tempStorage = {};
        addMessageToHistory("Prime Number Calculator (is it prime or not?)");
        addMessageToHistory("Enter number:");
    }

    function handlePrimeCalculatorInput(input) {
        const s_input = input.toLowerCase().trim();

        if (moduleStep === 1) { // Expecting number
            const number = parseInt(s_input);
            if (isNaN(number) || number <= 0) { // Primes are typically positive integers > 1
                addMessageToHistory("Invalid input. Please enter a positive integer.");
                addMessageToHistory("Enter number:");
                return;
            }
            tempStorage.number = number;
            tempStorage.isCalculated = false; // Flag to ensure prime check runs once per number

            performPrimeCheck(); // This will set moduleStep based on outcome

        } else if (moduleStep === 2) { // Expecting yes/no for all solutions
            if (s_input === 'yes' || s_input === 'y') {
                displayAllFactors();
            }
            // Whether yes or no, proceed to ask 'go again?'
            addMessageToHistory("Would you like to find another prime number? Yes(y) No(n):");
            moduleStep = 3;

        } else if (moduleStep === 3) { // Expecting yes/no to go again
            if (s_input === 'yes' || s_input === 'y') {
                addMessageToHistory("Enter number:");
                moduleStep = 1; // Restart the prime calculator
                tempStorage = {}; // Clear storage for new number
            } else if (s_input === 'no' || s_input === 'n') {
                addMessageToHistory(""); // Blank line like in Python
                addMessageToHistory("\nCalculation complete. Type 'menu' or press Enter to return to menu.");
                moduleStep = 101; // Go to menu return step
            } else {
                addMessageToHistory("Invalid input. Please type 'yes' or 'no'.");
                addMessageToHistory("Would you like to find another prime number? Yes(y) No(n):");
            }
        } else if (moduleStep === 101) { // Waiting for menu return
            displayMainMenu();
        }
    }

    function performPrimeCheck() {
        const number = tempStorage.number;
        let isPrime = true;
        let firstFactor = 0;

        if (number <= 1) {
            isPrime = false; // 1 and non-positives are not prime
        } else {
            // Check from number / 2 down to 2 (as in original Python)
            // More efficient would be to check up to Math.sqrt(number)
            for (let work = Math.floor(number / 2); work > 1; work--) {
                if (number % work === 0) {
                    isPrime = false;
                    firstFactor = work;
                    addMessageToHistory(`${number} / ${work} = ${number / work}`);
                    break;
                }
            }
        }

        tempStorage.isCalculated = true;

        if (isPrime) {
            addMessageToHistory(`${number} is Prime!`);
            addMessageToHistory("Would you like to find another prime number? Yes(y) No(n):");
            moduleStep = 3; // Ask to go again
        } else {
            addMessageToHistory(`${number} is Not Prime.`);
            if (number < 1000000000 && number > 1) { // Condition from python code, and ensure we have factors to show
                addMessageToHistory("Would you like a list of all the solutions? Yes(y) No(n):");
                moduleStep = 2; // Ask for all solutions
            } else {
                addMessageToHistory("Would you like to find another prime number? Yes(y) No(n):");
                moduleStep = 3; // Ask to go again
            }
        }
    }

    function displayAllFactors() {
        const number = tempStorage.number;
        addMessageToHistory(`Listing all factors for ${number}:`);
        // Iterate from number / 2 down to 2
        for (let egg = Math.floor(number / 2); egg > 1; egg--) {
            if (number % egg === 0) {
                addMessageToHistory(`${number} / ${egg} = ${number / egg}`);
            }
        }
    }

    // Temperature Converter (Module 8)
    function startTempConverter() {
        currentModule = 'tempConverter';
        moduleStep = 1; // Expecting C or F
        tempStorage = {};
        addMessageToHistory("Welcome to the magic celsius fahrenheit coverter mabobber!");
        addMessageToHistory("created by Jon");
        promptTempConversionType();
    }

    function promptTempConversionType() {
        addMessageToHistory("Which do you wish to convert from Celsius or Fahrenheit: (c/f)");
    }

    function handleTempConverterInput(input) {
        const s_input = input.toLowerCase().trim();

        if (moduleStep === 1) { // Expecting C or F
            if (s_input === 'c' || s_input === 'celsius') {
                tempStorage.fromUnit = 'celsius';
                addMessageToHistory("Celsius: ");
                moduleStep = 2;
            } else if (s_input === 'f' || s_input === 'fahrenheit') {
                tempStorage.fromUnit = 'fahrenheit';
                addMessageToHistory("Fahrenheit: ");
                moduleStep = 2;
            } else {
                addMessageToHistory("Invalid input. Please enter 'c' or 'f'.");
                promptTempConversionType();
            }
        } else if (moduleStep === 2) { // Expecting temperature value
            const tempValue = parseFloat(s_input);
            if (isNaN(tempValue)) {
                addMessageToHistory("Invalid temperature. Please enter a number.");
                if (tempStorage.fromUnit === 'celsius') addMessageToHistory("Celsius: ");
                else addMessageToHistory("Fahrenheit: ");
                return;
            }

            let convertedTemp;
            if (tempStorage.fromUnit === 'celsius') {
                convertedTemp = (9 / 5) * tempValue + 32;
                addMessageToHistory(`Fahrenheit: ${convertedTemp.toFixed(2)}`);
            } else { // fahrenheit
                convertedTemp = (5 / 9) * (tempValue - 32);
                addMessageToHistory(`Celsius: ${convertedTemp.toFixed(2)}`);
            }
            addMessageToHistory("Would you like to convert another temperature? (yes/no): ");
            moduleStep = 3;
        } else if (moduleStep === 3) { // Expecting yes/no to go again
            if (s_input === 'yes' || s_input === 'y') {
                promptTempConversionType();
                moduleStep = 1;
            } else if (s_input === 'no' || s_input === 'n') {
                addMessageToHistory("Thank you for using the Converter mabobber!");
                addMessageToHistory("\nCalculation complete. Type 'menu' or press Enter to return to menu.");
                moduleStep = 101;
            } else {
                addMessageToHistory("Invalid input. Please type 'yes' or 'no'.");
                addMessageToHistory("Would you like to convert another temperature? (yes/no): ");
            }
        } else if (moduleStep === 101) { // Waiting for menu return
            displayMainMenu();
        }
    }

    // Metric <-> English Converter (Module 11)
    const meConversionTable = {
        '1': { type: 'eng_to_met', factor: 25.4,    fromUnit: "Inches", toUnit: "Millimeters", fromAbbr: "in", toAbbr: "mm" },
        '2': { type: 'eng_to_met', factor: 0.3048,   fromUnit: "Feet", toUnit: "Meters", fromAbbr: "ft", toAbbr: "m" },
        '3': { type: 'eng_to_met', factor: 0.9144,   fromUnit: "Yards", toUnit: "Meters", fromAbbr: "yd", toAbbr: "m" },
        '4': { type: 'eng_to_met', factor: 1.60934,  fromUnit: "Miles", toUnit: "Kilometers", fromAbbr: "mi", toAbbr: "km" },
        '5': { type: 'met_to_eng', factor: 25.4,    fromUnit: "Millimeters", toUnit: "Inches", fromAbbr: "mm", toAbbr: "in" }, // Factor is mm per inch
        '6': { type: 'met_to_eng', factor: 0.3048,   fromUnit: "Meters", toUnit: "Feet", fromAbbr: "m", toAbbr: "ft" },       // Factor is m per foot
        '7': { type: 'met_to_eng', factor: 0.9144,   fromUnit: "Meters", toUnit: "Yards", fromAbbr: "m", toAbbr: "yd" },      // Factor is m per yard
        '8': { type: 'met_to_eng', factor: 1.60934,  fromUnit: "Kilometers", toUnit: "Miles", fromAbbr: "km", toAbbr: "mi" }   // Factor is km per mile
    };

    function displayMetricEnglishMenu() {
        addMessageToHistory("Metric English Converter");
        addMessageToHistory(" #       English to metric ");
        addMessageToHistory("---   ------------------------");
        addMessageToHistory(" 1       Inches to Milimeters");
        addMessageToHistory(" 2         Feet to Meters");
        addMessageToHistory(" 3         Yards to Meters");
        addMessageToHistory(" 4         Miles to Kilometers");
        addMessageToHistory(""); // newline(1)
        addMessageToHistory(" #       Metric to English ");
        addMessageToHistory("---   ------------------------");
        addMessageToHistory(" 5       Milimeters to Inches");
        addMessageToHistory(" 6         Meters to Feet");
        addMessageToHistory(" 7         Meters to Yards");
        addMessageToHistory(" 8         Kilometers to Miles");
    }

    function startMetricEnglishConverter() {
        currentModule = 'metricEnglishConverter';
        moduleStep = 1; // Expecting conversion type
        tempStorage = {};
        displayMetricEnglishMenu();
        addMessageToHistory("Enter your conversion type #: ");
    }

    function handleMetricEnglishConverterInput(input) {
        const s_input = input.toLowerCase().trim();

        if (moduleStep === 1) { // Expecting conversion type
            if (!meConversionTable.hasOwnProperty(s_input)) {
                addMessageToHistory("Invalid conversion type. Please select from 1 to 8.");
                addMessageToHistory("Enter your conversion type #: ");
                return;
            }
            tempStorage.conversionChoice = s_input;
            const choiceDetails = meConversionTable[s_input];
            addMessageToHistory(`Amount of ${choiceDetails.fromUnit} to convert: `);
            moduleStep = 2;
        } else if (moduleStep === 2) { // Expecting amount
            const amount = parseFloat(s_input);
            if (isNaN(amount)) {
                addMessageToHistory("Invalid amount. Please enter a number.");
                const choiceDetails = meConversionTable[tempStorage.conversionChoice];
                addMessageToHistory(`Amount of ${choiceDetails.fromUnit} to convert: `);
                return;
            }

            const choice = tempStorage.conversionChoice;
            const details = meConversionTable[choice];
            let convertedAmount;

            if (details.type === 'eng_to_met') {
                convertedAmount = amount * details.factor;
            } else { // met_to_eng
                convertedAmount = amount / details.factor;
            }

            addMessageToHistory(`${amount.toFixed(2)} ${details.fromUnit} (${details.fromAbbr}) is ${convertedAmount.toFixed(4)} ${details.toUnit} (${details.toAbbr})`);

            addMessageToHistory("\nConversion complete. Type 'menu' or press Enter to return to menu.");
            moduleStep = 101; // Using 101 for generic "press enter to continue" state
        } else if (moduleStep === 101) {
            displayMainMenu();
        }
    }

    // Simple Equation Calculator (Module 12) - Solves ax + b = c for x
    function startSimpleEquationCalculator() {
        currentModule = 'simpleEquationCalculator';
        moduleStep = 1; // Expecting 'a'
        tempStorage = {};
        addMessageToHistory("Simple Equation Calculator");
        addMessageToHistory("Solves for x in the equation: ax + b = c");
        addMessageToHistory("Enter value for a:");
    }

    function handleSimpleEquationInput(input) {
        const s_input = input.toLowerCase().trim();
        let value;

        if (moduleStep === 1) { // Expecting 'a'
            value = parseFloat(s_input);
            if (isNaN(value)) {
                addMessageToHistory("Invalid value for 'a'. Please enter a number.");
                addMessageToHistory("Enter value for a:");
                return;
            }
            tempStorage.a = value;
            addMessageToHistory("Enter value for b:");
            moduleStep = 2;
        } else if (moduleStep === 2) { // Expecting 'b'
            value = parseFloat(s_input);
            if (isNaN(value)) {
                addMessageToHistory("Invalid value for 'b'. Please enter a number.");
                addMessageToHistory("Enter value for b:");
                return;
            }
            tempStorage.b = value;
            addMessageToHistory("Enter value for c:");
            moduleStep = 3;
        } else if (moduleStep === 3) { // Expecting 'c' and then solve
            value = parseFloat(s_input);
            if (isNaN(value)) {
                addMessageToHistory("Invalid value for 'c'. Please enter a number.");
                addMessageToHistory("Enter value for c:");
                return;
            }
            tempStorage.c = value;

            const a = tempStorage.a;
            const b = tempStorage.b;
            const c = tempStorage.c;

            addMessageToHistory(`Equation: ${a}x + ${b} = ${c}`);

            if (a !== 0) {
                const x = (c - b) / a;
                addMessageToHistory(`Solution: x = ${x.toFixed(4)}`);
            } else { // a is 0
                if (b === c || (c - b) === 0) { // Check if 0 = 0 essentially
                    addMessageToHistory("Infinite solutions (e.g., 0x + 5 = 5 means 0 = 0)");
                } else {
                    addMessageToHistory("No solution (e.g., 0x + 5 = 10 means 5 = 10, which is false)");
                }
            }

            addMessageToHistory("\nCalculation complete. Type 'menu' or press Enter to return to menu.");
            moduleStep = 101;
        } else if (moduleStep === 101) {
            displayMainMenu();
        }
    }

    // Even or Odd Checker (Module 14)
    function startEvenOddChecker() {
        currentModule = 'evenOddChecker';
        moduleStep = 1; // Expecting number
        tempStorage = {};
        addMessageToHistory("Even or Odd Checker");
        addMessageToHistory("Enter an integer:");
    }

    function handleEvenOddCheckerInput(input) {
        const s_input = input.toLowerCase().trim();

        if (moduleStep === 1) { // Expecting number
            const number = parseFloat(s_input); // Parse as float first to check if it has decimals
            if (isNaN(number) || !Number.isInteger(number)) {
                addMessageToHistory("Invalid input. Please enter a whole number (integer).");
                addMessageToHistory("Enter an integer:");
                return;
            }

            if (number % 2 === 0) {
                addMessageToHistory(`${number} is Even.`);
            } else {
                addMessageToHistory(`${number} is Odd.`);
            }

            addMessageToHistory("\nCheck complete. Type 'menu' or press Enter to return to menu.");
            moduleStep = 101;
        } else if (moduleStep === 101) { // Waiting for menu return
            displayMainMenu();
        }
    }

    // Proportion Calculator (Module 15) - Solves a/b = c/x for x
    function startProportionCalculator() {
        currentModule = 'proportionCalculator';
        moduleStep = 1; // Expecting 'a'
        tempStorage = {};
        addMessageToHistory("Proportion Calculator");
        addMessageToHistory("Solves for x in the proportion: a / b = c / x");
        addMessageToHistory("Enter value for a:");
    }

    function handleProportionCalculatorInput(input) {
        const s_input = input.toLowerCase().trim();
        let value;

        if (moduleStep === 1) { // Expecting 'a'
            value = parseFloat(s_input);
            if (isNaN(value)) {
                addMessageToHistory("Invalid value for 'a'. Please enter a number.");
                addMessageToHistory("Enter value for a:");
                return;
            }
            tempStorage.a = value;
            addMessageToHistory("Enter value for b:");
            moduleStep = 2;
        } else if (moduleStep === 2) { // Expecting 'b'
            value = parseFloat(s_input);
            if (isNaN(value)) {
                addMessageToHistory("Invalid value for 'b'. Please enter a number.");
                addMessageToHistory("Enter value for b:");
                return;
            }
            if (value === 0) {
                addMessageToHistory("'b' cannot be zero in a/b = c/x. Please enter a non-zero value for 'b'.");
                addMessageToHistory("Enter value for b:");
                return;
            }
            tempStorage.b = value;
            addMessageToHistory("Enter value for c:");
            moduleStep = 3;
        } else if (moduleStep === 3) { // Expecting 'c' and then solve
            value = parseFloat(s_input);
            if (isNaN(value)) {
                addMessageToHistory("Invalid value for 'c'. Please enter a number.");
                addMessageToHistory("Enter value for c:");
                return;
            }
            tempStorage.c = value;

            const a = tempStorage.a;
            const b = tempStorage.b;
            const c = tempStorage.c;

            addMessageToHistory(`Proportion: ${a} / ${b} = ${c} / x`);

            if (a === 0) {
                if (c === 0) { // 0/b = 0/x
                     // If b is non-zero, then 0 = 0/x. If c is 0, then x can be any non-zero number.
                    addMessageToHistory("Solution: If c=0, x can be any non-zero number.");
                } else { // 0/b = c/x where c is not 0. This means 0 = c/x, which implies c must be 0. Contradiction.
                    addMessageToHistory("No solution (or x tends to infinity if c is non-zero).");
                }
            } else { // a is not 0
                const x = (b * c) / a;
                addMessageToHistory(`Solution: x = ${x.toFixed(4)}`);
            }

            addMessageToHistory("\nCalculation complete. Type 'menu' or press Enter to return to menu.");
            moduleStep = 101;
        } else if (moduleStep === 101) {
            displayMainMenu();
        }
    }

    // Edge of a Cube (Module 16)
    function startEdgeOfCubeCalculator() {
        currentModule = 'edgeOfCubeCalculator';
        moduleStep = 1; // Expecting volume
        tempStorage = {};
        addMessageToHistory("Edge of a Cube Calculator");
        addMessageToHistory("Enter the Volume of the cube:");
    }

    function handleEdgeOfCubeInput(input) {
        const s_input = input.toLowerCase().trim();

        if (moduleStep === 1) { // Expecting volume
            const volume = parseFloat(s_input);
            if (isNaN(volume) || volume <= 0) {
                addMessageToHistory("Invalid volume. Please enter a positive number.");
                addMessageToHistory("Enter the Volume of the cube:");
                return;
            }

            const edge = Math.cbrt(volume); // Math.cbrt is cube root

            addMessageToHistory(`Formula: Edge = cbrt(Volume)`);
            addMessageToHistory(`The edge of the cube is: ${edge.toFixed(4)}`);

            addMessageToHistory("\nCalculation complete. Type 'menu' or press Enter to return to menu.");
            moduleStep = 101;
        } else if (moduleStep === 101) { // Waiting for menu return
            displayMainMenu();
        }
    }

    // Radius of a Circle (Module 17)
    function startRadiusOfCircleCalculator() {
        currentModule = 'radiusOfCircleCalculator';
        moduleStep = 1; // Expecting A or C
        tempStorage = {};
        addMessageToHistory("Radius of a Circle Calculator");
        addMessageToHistory("Calculate radius from Area or Circumference? (A/C):");
    }

    function handleRadiusOfCircleInput(input) {
        const s_input = input.toLowerCase().trim();

        if (moduleStep === 1) { // Expecting A or C
            if (s_input === 'a' || s_input === 'area') {
                tempStorage.calcType = 'area';
                addMessageToHistory("Enter the Area of the circle:");
                moduleStep = 2;
            } else if (s_input === 'c' || s_input === 'circumference') {
                tempStorage.calcType = 'circumference';
                addMessageToHistory("Enter the Circumference of the circle:");
                moduleStep = 2;
            } else {
                addMessageToHistory("Invalid input. Please enter 'A' or 'C'.");
                addMessageToHistory("Calculate radius from Area or Circumference? (A/C):");
            }
        } else if (moduleStep === 2) { // Expecting value for Area or Circumference
            const value = parseFloat(s_input);
            if (isNaN(value) || value <= 0) {
                addMessageToHistory("Invalid input. Please enter a positive number.");
                if (tempStorage.calcType === 'area') addMessageToHistory("Enter the Area of the circle:");
                else addMessageToHistory("Enter the Circumference of the circle:");
                return;
            }

            let radius;
            let formulaMsg;

            if (tempStorage.calcType === 'area') {
                radius = Math.sqrt(value / PI);
                formulaMsg = "Formula: Radius = sqrt(Area / PI)";
            } else { // circumference
                radius = value / (2 * PI);
                formulaMsg = "Formula: Radius = Circumference / (2 * PI)";
            }

            addMessageToHistory(formulaMsg);
            addMessageToHistory(`The radius of the circle is: ${radius.toFixed(4)}`);

            addMessageToHistory("\nCalculation complete. Type 'menu' or press Enter to return to menu.");
            moduleStep = 101;
        } else if (moduleStep === 101) { // Waiting for menu return
            displayMainMenu();
        }
    }

    // Area of Any Polygon (Module 18) - Assuming Regular Polygon
    function startAreaRegularPolygonCalculator() {
        currentModule = 'areaRegularPolygonCalculator';
        moduleStep = 1; // Expecting number of sides
        tempStorage = {};
        addMessageToHistory("Area of a Regular Polygon Calculator");
        addMessageToHistory("Enter the number of sides (e.g., 3, 5):");
    }

    function handleAreaRegularPolygonInput(input) {
        const s_input = input.toLowerCase().trim();
        let value;

        if (moduleStep === 1) { // Expecting number of sides (n)
            value = parseInt(s_input);
            if (isNaN(value) || value < 3) {
                addMessageToHistory("Invalid input. Number of sides must be an integer >= 3.");
                addMessageToHistory("Enter the number of sides (e.g., 3, 5):");
                return;
            }
            tempStorage.numSides = value;
            addMessageToHistory("Enter the length of one side:");
            moduleStep = 2;
        } else if (moduleStep === 2) { // Expecting side length (s)
            value = parseFloat(s_input);
            if (isNaN(value) || value <= 0) {
                addMessageToHistory("Invalid input. Side length must be a positive number.");
                addMessageToHistory("Enter the length of one side:");
                return;
            }
            tempStorage.sideLength = value;

            const n = tempStorage.numSides;
            const s = tempStorage.sideLength;

            // Area = (n * s^2) / (4 * tan(PI / n))
            const area = (n * Math.pow(s, 2)) / (4 * Math.tan(PI / n));

            addMessageToHistory(`Formula: Area = (n * s^2) / (4 * tan(PI / n))`);
            addMessageToHistory(`For n=${n}, s=${s}`);
            addMessageToHistory(`The area of the regular polygon is: ${area.toFixed(4)}`);

            addMessageToHistory("\nCalculation complete. Type 'menu' or press Enter to return to menu.");
            moduleStep = 101;
        } else if (moduleStep === 101) { // Waiting for menu return
            displayMainMenu();
        }
    }

    // Pythagorean Triplet? (Module 19)
    function startPythagoreanTripletChecker() {
        currentModule = 'pythagoreanTripletChecker';
        moduleStep = 1; // Expecting side 'a'
        tempStorage = {};
        addMessageToHistory("Pythagorean Triplet Checker");
        addMessageToHistory("Enter the length of side 'a':");
    }

    function handlePythagoreanTripletInput(input) {
        const s_input = input.toLowerCase().trim();
        let value;

        if (moduleStep === 1) { // Expecting side 'a'
            value = parseFloat(s_input);
            if (isNaN(value) || value <= 0) {
                addMessageToHistory("Invalid length. Side 'a' must be a positive number.");
                addMessageToHistory("Enter the length of side 'a':");
                return;
            }
            tempStorage.sideA = value;
            addMessageToHistory("Enter the length of side 'b':");
            moduleStep = 2;
        } else if (moduleStep === 2) { // Expecting side 'b'
            value = parseFloat(s_input);
            if (isNaN(value) || value <= 0) {
                addMessageToHistory("Invalid length. Side 'b' must be a positive number.");
                addMessageToHistory("Enter the length of side 'b':");
                return;
            }
            tempStorage.sideB = value;
            addMessageToHistory("Enter the length of side 'c':");
            moduleStep = 3;
        } else if (moduleStep === 3) { // Expecting side 'c' and then check
            value = parseFloat(s_input);
            if (isNaN(value) || value <= 0) {
                addMessageToHistory("Invalid length. Side 'c' must be a positive number.");
                addMessageToHistory("Enter the length of side 'c':");
                return;
            }
            tempStorage.sideC = value;

            const sides = [tempStorage.sideA, tempStorage.sideB, tempStorage.sideC];
            sides.sort((x, y) => x - y); // Sort numerically

            const s1 = sides[0];
            const s2 = sides[1];
            const s3 = sides[2]; // s3 is the largest, potential hypotenuse

            const s1_squared = Math.pow(s1, 2);
            const s2_squared = Math.pow(s2, 2);
            const s3_squared = Math.pow(s3, 2);

            // Using a small tolerance for floating point comparison
            const isTriplet = Math.abs((s1_squared + s2_squared) - s3_squared) < 0.0001;

            addMessageToHistory(`Checking sides: ${tempStorage.sideA}, ${tempStorage.sideB}, ${tempStorage.sideC}`);
            addMessageToHistory(`Sorted: ${s1}, ${s2}, ${s3}`);
            addMessageToHistory(`${s1}^2 + ${s2}^2 =? ${s3}^2`);
            addMessageToHistory(`${s1_squared.toFixed(4)} + ${s2_squared.toFixed(4)} =? ${s3_squared.toFixed(4)}`);
            addMessageToHistory(`${(s1_squared + s2_squared).toFixed(4)} =? ${s3_squared.toFixed(4)}`);

            if (isTriplet) {
                addMessageToHistory("Result: These sides form a Pythagorean Triplet.");
            } else {
                addMessageToHistory("Result: These sides do NOT form a Pythagorean Triplet.");
            }

            addMessageToHistory("\nCheck complete. Type 'menu' or press Enter to return to menu.");
            moduleStep = 101;
        } else if (moduleStep === 101) { // Waiting for menu return
            displayMainMenu();
        }
    }

    // Surface Area + Lateral Area (Module 20)
    const shapesForSurfaceArea = {
        '1': { name: "Cube", dims: ['edge'], steps: [10] },
        '2': { name: "Rectangular Prism", dims: ['length', 'width', 'height'], steps: [20, 21, 22] },
        '3': { name: "Cylinder", dims: ['radius', 'height'], steps: [30, 31] },
        '4': { name: "Cone", dims: ['radius', 'height'], steps: [40, 41] },
        '5': { name: "Sphere", dims: ['radius'], steps: [50] }
    };

    function displaySurfaceAreaShapeMenu() {
        addMessageToHistory("Surface Area and Lateral Area Calculator");
        addMessageToHistory("Choose a shape:");
        for (const key in shapesForSurfaceArea) {
            addMessageToHistory(`${key}: ${shapesForSurfaceArea[key].name}`);
        }
        addMessageToHistory("Enter shape number:");
    }

    function startSurfaceAreaCalculator() {
        currentModule = 'surfaceAreaCalculator';
        moduleStep = 1; // Expecting shape choice
        tempStorage = { dimensions: {} };
        displaySurfaceAreaShapeMenu();
    }

    function getDimensionPrompt(shapeKey, dimIndex) {
        const shape = shapesForSurfaceArea[shapeKey];
        if (shape && shape.dims[dimIndex]) {
            return `Enter ${shape.dims[dimIndex]} for the ${shape.name}:`;
        }
        return "Error: Dimension prompt not found."; // Should not happen
    }

    function handleSurfaceAreaCalculatorInput(input) {
        const s_input = input.trim();
        let value;

        if (moduleStep === 1) { // Shape choice
            if (!shapesForSurfaceArea.hasOwnProperty(s_input)) {
                addMessageToHistory("Invalid shape number. Please choose from the list.");
                addMessageToHistory("Enter shape number:"); // Re-prompt for shape
                return;
            }
            tempStorage.shapeKey = s_input;
            tempStorage.currentDimIndex = 0; // Reset for the new shape
            const firstDimStep = shapesForSurfaceArea[s_input].steps[0];
            moduleStep = firstDimStep;
            addMessageToHistory(getDimensionPrompt(tempStorage.shapeKey, tempStorage.currentDimIndex));
            return; // Wait for next input
        }

        // This section handles all dimension inputs based on moduleStep
        // and the final "press enter to continue" step (101)
        const shapeKey = tempStorage.shapeKey;
        if (!shapeKey || !shapesForSurfaceArea[shapeKey]) {
             addMessageToHistory("Error: No shape selected. Returning to menu.");
             displayMainMenu();
             return;
        }
        const shape = shapesForSurfaceArea[shapeKey];
        const currentDimName = shape.dims[tempStorage.currentDimIndex];

        // Check if we are in a dimension input step
        if (shape.steps.includes(moduleStep)) {
            value = parseFloat(s_input);
            if (isNaN(value) || value <= 0) {
                addMessageToHistory(`Invalid ${currentDimName}. Must be a positive number.`);
                addMessageToHistory(getDimensionPrompt(shapeKey, tempStorage.currentDimIndex)); // Re-prompt
                return;
            }
            tempStorage.dimensions[currentDimName] = value;
            tempStorage.currentDimIndex++;

            if (tempStorage.currentDimIndex < shape.dims.length) {
                // More dimensions needed
                moduleStep = shape.steps[tempStorage.currentDimIndex]; // Update moduleStep to the next dimension's step
                addMessageToHistory(getDimensionPrompt(shapeKey, tempStorage.currentDimIndex));
            } else {
                // All dimensions collected
                calculateAndDisplaySurfaceAreas(); // This will prompt for menu return
                moduleStep = 101; // Set state to "waiting for menu return"
            }
        } else if (moduleStep === 101) { // Waiting for menu return confirmation
            displayMainMenu();
        } else {
            // Should not happen if logic is correct
            addMessageToHistory("Unexpected state in Surface Area calculator. Returning to menu.");
            displayMainMenu();
        }
    }

    function calculateAndDisplaySurfaceAreas() {
        const shape = shapesForSurfaceArea[tempStorage.shapeKey];
        const dims = tempStorage.dimensions;
        let lateralArea = 0;
        let totalSurfaceArea = 0;
        let formulaLAText = "Lateral Area: ";
        let formulaSAText = "Total Surface Area: ";

        addMessageToHistory(`\n--- ${shape.name} ---`);

        switch (shape.name) {
            case "Cube":
                const s = dims.edge;
                lateralArea = 4 * Math.pow(s, 2);
                totalSurfaceArea = 6 * Math.pow(s, 2);
                formulaLAText += `4 * edge^2 = 4 * ${s}^2 = ${lateralArea.toFixed(4)}`;
                formulaSAText += `6 * edge^2 = 6 * ${s}^2 = ${totalSurfaceArea.toFixed(4)}`;
                break;
            case "Rectangular Prism":
                const l = dims.length;
                const w = dims.width;
                const h_prism = dims.height;
                lateralArea = 2 * h_prism * (l + w);
                totalSurfaceArea = 2 * ((l * w) + (l * h_prism) + (w * h_prism));
                formulaLAText += `2h(l+w) = 2*${h_prism}(${l}+${w}) = ${lateralArea.toFixed(4)}`;
                formulaSAText += `2(lw+lh+wh) = 2(${l*w}+${l*h_prism}+${w*h_prism}) = ${totalSurfaceArea.toFixed(4)}`;
                break;
            case "Cylinder":
                const r_cyl = dims.radius;
                const h_cyl = dims.height;
                lateralArea = 2 * PI * r_cyl * h_cyl;
                totalSurfaceArea = 2 * PI * r_cyl * (r_cyl + h_cyl);
                formulaLAText += `2*PI*r*h = ${lateralArea.toFixed(4)}`;
                formulaSAText += `2*PI*r(r+h) = ${totalSurfaceArea.toFixed(4)}`;
                break;
            case "Cone":
                const r_cone = dims.radius;
                const h_cone = dims.height;
                const slantHeight = Math.sqrt(Math.pow(r_cone, 2) + Math.pow(h_cone, 2));
                lateralArea = PI * r_cone * slantHeight;
                totalSurfaceArea = PI * r_cone * (r_cone + slantHeight);
                addMessageToHistory(`Slant Height (l) = sqrt(r^2 + h^2) = ${slantHeight.toFixed(4)}`);
                formulaLAText += `PI*r*l = ${lateralArea.toFixed(4)}`;
                formulaSAText += `PI*r(r+l) = ${totalSurfaceArea.toFixed(4)}`;
                break;
            case "Sphere":
                const r_sph = dims.radius;
                totalSurfaceArea = 4 * PI * Math.pow(r_sph, 2);
                lateralArea = 0; // Or often considered same as total SA, or not applicable
                formulaLAText = "Lateral Area: N/A for sphere (or considered 0 or same as Total SA)";
                formulaSAText += `4*PI*r^2 = ${totalSurfaceArea.toFixed(4)}`;
                break;
        }
        addMessageToHistory(formulaLAText);
        addMessageToHistory(formulaSAText);
        addMessageToHistory("\nCalculation complete. Type 'menu' or press Enter to return to menu.");
    }

    // Perimeter Calculator (Module 21)
    const shapesForPerimeter = {
        '1': { name: "Square", dims: ['side'], steps: [210] },
        '2': { name: "Rectangle", dims: ['length', 'width'], steps: [220, 221] },
        '3': { name: "Triangle", dims: ['side1', 'side2', 'side3'], steps: [230, 231, 232] },
        '4': { name: "Circle (Circumference)", dims: ['radius'], steps: [240] },
        '5': { name: "Regular Polygon", dims: ['number of sides', 'side length'], steps: [250, 251] }
    };

    function displayPerimeterShapeMenu() {
        addMessageToHistory("Perimeter Calculator");
        addMessageToHistory("Choose a shape:");
        for (const key in shapesForPerimeter) {
            addMessageToHistory(`${key}: ${shapesForPerimeter[key].name}`);
        }
        addMessageToHistory("Enter shape number:");
    }

    function startPerimeterCalculator() {
        currentModule = 'perimeterCalculator';
        moduleStep = 1; // Expecting shape choice
        tempStorage = { dimensions: {} }; // Use a different key if SA is active, or ensure it's cleared.
                                         // For simplicity, assuming one module at a time, so 'dimensions' is fine.
        displayPerimeterShapeMenu();
    }

    function getPerimeterDimensionPrompt(shapeKey, dimIndex) {
        const shape = shapesForPerimeter[shapeKey];
        if (shape && shape.dims[dimIndex]) {
            return `Enter ${shape.dims[dimIndex]} for the ${shape.name}:`;
        }
        return "Error: Dimension prompt not found.";
    }

    function handlePerimeterCalculatorInput(input) {
        const s_input = input.trim();
        let value;

        if (moduleStep === 1) { // Shape choice
            if (!shapesForPerimeter.hasOwnProperty(s_input)) {
                addMessageToHistory("Invalid shape number. Please choose from the list.");
                addMessageToHistory("Enter shape number:");
                return;
            }
            tempStorage.shapeKeyPerimeter = s_input; // Use a distinct key
            tempStorage.currentDimIndex = 0;
            const firstDimStep = shapesForPerimeter[s_input].steps[0];
            moduleStep = firstDimStep;
            addMessageToHistory(getPerimeterDimensionPrompt(tempStorage.shapeKeyPerimeter, tempStorage.currentDimIndex));
            return;
        }

        const shapeKey = tempStorage.shapeKeyPerimeter;
        if (!shapeKey || !shapesForPerimeter[shapeKey]) {
            addMessageToHistory("Error: No shape selected for perimeter. Returning to menu.");
            displayMainMenu();
            return;
        }
        const shape = shapesForPerimeter[shapeKey];
        const currentDimName = shape.dims[tempStorage.currentDimIndex];

        if (shape.steps.includes(moduleStep)) {
            value = parseFloat(s_input);
             // For number of sides in polygon, it must be an integer >= 3
            if (currentDimName === 'number of sides' && (!Number.isInteger(value) || value < 3)) {
                addMessageToHistory(`Invalid ${currentDimName}. Must be an integer >= 3.`);
                addMessageToHistory(getPerimeterDimensionPrompt(shapeKey, tempStorage.currentDimIndex));
                return;
            } else if (currentDimName !== 'number of sides' && (isNaN(value) || value <= 0)) {
                addMessageToHistory(`Invalid ${currentDimName}. Must be a positive number.`);
                addMessageToHistory(getPerimeterDimensionPrompt(shapeKey, tempStorage.currentDimIndex));
                return;
            }

            tempStorage.dimensions[currentDimName] = value; // Store in generic 'dimensions'
            tempStorage.currentDimIndex++;

            if (tempStorage.currentDimIndex < shape.dims.length) {
                moduleStep = shape.steps[tempStorage.currentDimIndex];
                addMessageToHistory(getPerimeterDimensionPrompt(shapeKey, tempStorage.currentDimIndex));
            } else {
                calculateAndDisplayPerimeter();
                moduleStep = 201; // State for "waiting for menu return"
            }
        } else if (moduleStep === 201) {
            displayMainMenu();
        } else {
            addMessageToHistory("Unexpected state in Perimeter calculator. Returning to menu.");
            displayMainMenu();
        }
    }

    function calculateAndDisplayPerimeter() {
        const shape = shapesForPerimeter[tempStorage.shapeKeyPerimeter];
        const dims = tempStorage.dimensions;
        let perimeter = 0;
        let formulaText = "Perimeter: ";

        addMessageToHistory(`\n--- ${shape.name} ---`);

        switch (shape.name) {
            case "Square":
                const side = dims.side;
                perimeter = 4 * side;
                formulaText += `4 * side = 4 * ${side} = ${perimeter.toFixed(4)}`;
                break;
            case "Rectangle":
                const l = dims.length;
                const w = dims.width;
                perimeter = 2 * (l + w);
                formulaText += `2 * (length + width) = 2 * (${l} + ${w}) = ${perimeter.toFixed(4)}`;
                break;
            case "Triangle":
                const s1 = dims.side1;
                const s2 = dims.side2;
                const s3 = dims.side3;
                perimeter = s1 + s2 + s3;
                formulaText += `side1 + side2 + side3 = ${s1} + ${s2} + ${s3} = ${perimeter.toFixed(4)}`;
                break;
            case "Circle (Circumference)":
                const r = dims.radius;
                perimeter = 2 * PI * r;
                formulaText = `Circumference = 2 * PI * radius = 2 * PI * ${r} = ${perimeter.toFixed(4)}`;
                break;
            case "Regular Polygon":
                const n = dims['number of sides'];
                const sl = dims['side length'];
                perimeter = n * sl;
                formulaText += `number of sides * side length = ${n} * ${sl} = ${perimeter.toFixed(4)}`;
                break;
        }
        addMessageToHistory(formulaText);
        addMessageToHistory("\nCalculation complete. Type 'menu' or press Enter to return to menu.");
    }

    // Help Module (Module 911)
    function startHelpModule() {
        currentModule = 'helpModule';
        moduleStep = 1; // Only one step: display help then wait for menu return

        addMessageToHistory("--- Help & Instructions ---");
        const helpText = `
Welcome to Formula Conqueror!

How to use:
- Enter the number corresponding to the module
  you wish to use from the main menu.
- Follow the on-screen prompts for each calculator.
- Most modules will ask you to press Enter or type
  'menu' to return to the main menu after their
  completion.
- To exit the program from the main menu, enter 0.

The interface is styled to resemble a classic
calculator screen. Enjoy conquering those formulas!
`;
        addMessageToHistory(helpText);
        addMessageToHistory("Press Enter or type 'menu' to return to the main menu.");
        moduleStep = 101; // Set to waiting for menu return state
    }

    function handleHelpModuleInput(input) {
        // This module only has one active phase (display) then waits for menu return.
        if (moduleStep === 101) {
            displayMainMenu();
        }
    }

});
