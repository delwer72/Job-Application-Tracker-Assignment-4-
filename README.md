### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer to the question number-1

* getElementByid() selects a single element its unique id and return only one element. 

* getElementByClassName() selects all the elements that have the same class names and return all the elements of the same class. 

* querySelector() selects css selectors  and return the first matched elements. 

* querySelectorAll() selects all the css selectors to target elements. 

### 2. How do you create and insert a new element into the DOM?

Answer to the question number-2

I can create a new element using " document.createElement()"
and insert a new element using "appendChild() or append()".

### 3. What is Event Bubbling? And how does it work?

Answer to the question number-3

Event Bubbling  is the process where an event starts from  the target element and gradually it reaches its parent elements. 

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique where a parent element handles events for its child elements using event Bubbling. 
It is useful because of improving performance and clear and more maintainable code. 

### 5. What is the difference between preventDefault() and stopPropagation() methods?

PreventDefault() stops the browser's default behavior and stopPropagation() stops the event from Bubbling up to parent elements. 