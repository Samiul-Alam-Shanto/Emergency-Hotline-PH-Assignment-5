### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer:
getElementById is used for accessing an element from the document in DOM using the element id.
getElementsByClassName is used for accessing elements from the document in DOM using the elements class name.it returns HTML collection.
querySelectorAll is used for accessing elements from the document in DOM using its css class,like how we access to elements using css class , we can do the same using it.It returns nodelist
querySelector is same as querySelectorAll but it just gives access to the first element only and it can be used for id also.

2. How do you **create and insert a new element into the DOM**?
   Answer:
   using createElement() and append() or appendChild(), i can do it.

3. What is **Event Bubbling** and how does it work?
   Answer:
   Event bubbling is like an event is going upwards to it parentnode gradually and passing the event info to the root document.

4. What is **Event Delegation** in JavaScript? Why is it useful?
   Answer:
   Event Delegation is like if i have access to any element of the document in DOM i can traverse the entire DOM through its parent node or children.Means i can create events through a event parameter target.Instead of adding event listener to to many elements i can use event delegation to parent and by using target i can access all and see where the event is occurred.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
   Answer:
   preventDefault() is used for resetting the default feature or events of an HTML elements in DOM.
   stopPropagation() is for preventing the event bubble further up from a specific node .
