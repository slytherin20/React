## Q: What is prop drilling?

A: Prop drilling is a way to pass the data from parent component to its descendents down the tree. There could be 100s of components between the parent and the component that needs the data hence prop drilling is not recommended for very deeply nested component chain because it will result in re-rendering of all the components on the chain when the data is modified.

## Q: What is lifting the state up?

A: When some components needs to be changed together based on a state then removing the state from them and declaring a common state to their nearest ancestor and passing down the state through props is called lifting the state up.

## Q: What is Context Provider and Context Consumer?

A: Context Provider is used to pass the context value to the components. If context provider is not called then the default context value will be used by the components that want to consume context/
Context Consumer are the components that want to use the value of the context. In functional components, useContext() hook is used to use the context value. In class-based components, Context.Consumer is used:

```
 <ContextName.Consumer>
{ (val)=> //JSX
}
</ContextName.Consumer>
```

## Q: If you don’t pass a value to provider then does it take a default value?

A: No, if no value is passed to the provider then React throws error as value is always required for calling Provider. If no provider is used to pass the context value then the components consume the default context value that we provided while creating the context.
