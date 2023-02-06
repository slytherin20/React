## Q: Is JSX mandatory for React?
A: No, JSX is not mandatory for React. We can create pure React elements if we want. JSX is used to improve developer experience, increasing readability ensuring easy debugging but its not mandatory.

## Q: IS ES6 mandatory?
A: ES6 is not mandatory. ES6 includes new features and new syntax making it better for developers to write less code and do more but its not mandatory. We can still use ES5 but ES6 is preferred because of the features it provides.

## Q: {Title} vs `{<Title></Title>}` vs `{<Title />}`  in JSX?
A: 
1. `{Title}`: React Element
2. `{<Title />}` : React Component but is self-enclosing. Preferred and used as a standard in industry.
3. `{<Title></Title>}`: React Component but with closing tag.

## Q: How to write comments in JSX?
A: We write comments in JSX just like we do in JS.
1. // Single-line comment
2. /* */ Multiline comment

## Q: What is <React.Fragment></React.Fragment> and <></> ?
A: React fragment is a component exported by React. It acts like an empty tag which is used to list a group a children together. It does not create a DOM node that is why it is used when we don’t want to create a new node and just want to group elements together . In React fragment only key can be passed as a prop. It does not take any other attrubute or style because its not an actual DOM node.
<></> is a shortcut of writing <React.Fragment> .

## Q: What is Virtual DOM?
A: Virtual DOM is a programming concept in which a virtual representation of UI is kept in memory and constantly synced with the Real DOM by library such as ReactDOM. This representation includes objects called React elements since they represent UI and also other internal objects called fiber which are used to hold additional information about the component tree.

## Q: What is Reconciliation in React?
A: This is process of diffing two trees in order to update the UI to match the latest updates. When render() is called a new React tree is created, this tree is compared with the old tree through reconciliation to update the UI. The diffing algorithm used takes O(n) time complexity to diff the trees.

## Q: What is React Fiber?
A: React Fiber is the new Reconciliation engine introduced in React16. It focuses on improving stability for areas like animation,layout and gestures. But its main highlight feature is incremental rendering - splitting the render work in chunks and spread it over multiple frames. Other features include the ability to pause, abort and reuse work when new updates come in, the ability to assign priority to different types of updates.

## Q:  Why and when do we need keys in React?
A: Keys are used by developers to inform React which elements are stable across different renders, It helps React in identifying elements so that when React performs diffing algorithm it knows which elements existed in previous render also and it will not recreate them again in case elements are reordered or an element is added or removed from the UI. Thus, improving performance.


## Q: Can we use index as a key in React?
A:  We should refrain from using indexed as a key because in case of elements insertion, deletion and reorder:
1. **Performance is affected**: When we insert an element at the begin then React will check the elements and see that the element already exists because index is matching so it re-render the existing elements again thus affecting the performance.
Ex: https://1tjm2l.csb.app/
2. **Issues with Component State**: Using index as a key can also result in state of uncontrolled inputs getting mixed and showing issues. Ex: https://jsbin.com/saqadafoxe/edit?js,output

## Q: What are props in React? Ways to use them?
A: Props is the information that is passed from one component to another. Props are read-only objects  in the component it is passed. We can use props as props.prop_name or using destruction: `{prop1,props2}`

## Q: What is Config-driven UI?
A: When the UI is controlled by the configuration send through API by backends so that UI can differ dependeding on users, geographical locations etc. this is called as Config-driven UI. 
Example: A food delivery app showing offers for one city but not for another.














