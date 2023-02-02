## Q: What is JSX?
A: JSX is a syntax extension of javascript. It has all the super powers of JS and is used to create React Element. It syntax combines both markup and logic .
<br>

## Q: What are superpowers of JSX?
A:
 1. Creates React elements by combining both markup and logic.
 2. Creates more readable, maintainable code.
 3. Easy debugging.
 4. Improves developer experience.
 5. Prevents XSS attacks.
<br>

## Q:  Role of type attribute in script? What are its different types?
A: Type attribute helps browser identify the type of script it needs to execute.
Different types:
**Module:** Using this type makes script be treated as a module. Module scripts require use of CORS protocol for cross-fetching of data.
**Classic script:**  Empty string passed in type, no type declared or a JS MIME type  makes the script be treated as a classic script.
**Import map:** Its is a JSON object that developers can use to control how browsers resolve module specifiers when importing JS modules.
**Data block:** The embedded content is treated as a data block and won’t be processed by browser. Developers must use a valid MIME type that is not javascript MIMI to indicate the data blocks.
<br>

## Q:  {TitleComp} vs {<TitleComp />} vs {<TitleComp></TitleComp>}
A:
 1. {Title Comp} : React Element
 2. {<TitleComp />} : Self-enclosing React Component. Standard in the industry to call a component.
 3. {<TitleComp></TitleComp>} : React Component but not self-enclosing. Can use it but not usually preferred.


