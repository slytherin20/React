## Q: Difference between named export, default export and '\* as' export?

A:

1. **named** export is used to export one or more object, function and variable.  
   Syntax:
   - Export: export function func1(){..}; export function func2(){..}
   - Import: import {func1,func2} from “./location”;
2. **Default** export is used to export exactly one object, function or variable.

   Syntax:

   - Export: export default f1(){...}
   - Import: import f1 from “location”;

3. **'\* as'** export is used to export one or more object, function and variable from a location and giving them an alias name.

   Syntax:

   - Export: export function func1(){..} export function func2(){..}
   - Import: import \* as Obj from “location”;
     Obj.func1(); Obj.func2();
     <br>

## Q: What is importance of config.js file?

A: Config.js file is used to store all the hard-coded data so that our code becomes clean. We can store all the hard-coded data in one file and when we need to change them we can easily do so by going to the file. We can also use them in multiple files without having to write them again and again in each file, by just exporting and importing them in the file which needs it. Some peoplem create different config.js file for different environments - development, production,testing.
<br>

## Q: What are React Hooks?

A: React hooks are just functions which provide us some functionality. Some of these functionalities include - providing us with state variable amd function to update it, providing us with React lifecycle methods functionality, helping in creating context etc.
<br>

## Q: Why do we need a useState hook?

A: useState hook is used to provides us state variable and a function to update it. React does not track local variables so when we need to make any changes, state updates and React sees that the state variable has changed and updates the UI.
