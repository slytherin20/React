## Q: What are various ways to add images into our application?Explain with code examples.

A:

1. **Storing images on file system:** We can store images as files on our local server. We can fetch images from there using url.

```
Ex: import Logo from “./src/assets/applogo.png;
<img src={Logo} alt=”logo” />
```

2. **Cloud based storage system:** We can save images on cloud based storage systems like firestore,
3. **In relational database:** We can store images as binary files(BLOBs) in relational database or store a reference in database to actual place of storage like file system or cloud storage system.
4. **In a NoSQL database:** Can be stored in form of documents with there metadata in databases like MongoDB.
5. **CDN:** We can store images in CDN which will distribute images to various servers across world so that load from primary server is reduced. This will result into fast fetching of cached images.
   Ex:
   ```
   <img src={cloudanaryID+imageID} alt=”logo” />
   ```

## Q: What would happen if we console useState()?

A: If we console useState, then it will return us an array of 2 items:
`[undefined, f] `

1. Undefined is the initial state value that useState was expecting but as we did not pass anything to it it is set to undefined.
2. f is the state updater function which updates the states. When we open this function we see that it has a name property and its value is “bound dispatchSetState". So, this bounds the dispatchSetState(). When we console useState()[1] then it returns dispatchSetState function on console.

## Q: How will useEffect behave if we don’t add a dependency array?

A: If we don’t pass a dependency array then the callback function passed to useEffect hook will be called after each component render.

## Q: What is SPA?

A: In Single page applications, only one network call is made to server to fetch the document when our app starts. When something needs to change in document body then he whole document is not changed only the content that should be displayed on screen gets injected to the html page using JS APIs such as fetch and XMLHTTPRequest. So, there is only one document in SPA that is fetched from server after that content is simply injected into that document. SPA improves performance and provides dynamic experience but needs more attention to state management and implement navigation.

## Q: Difference between client side and server side routing?

A:

- **Server side routing:** In Server-side routing, browser request the html document from server and downloads the CSS and Javacript for that document then it renders the html onto browser. When user clicks a link then browser repeats the browser. This results into sending multiple network requests to server.
- **Client-side routing:** In Client-side routing, the browser request the html document from server and downloads the CSS and evaluates the JS for it and renders the html page onto browser. When a user clicks on a link instead of sending a request to server to fetch a new document, the application changes the UI of the web app and makes fetch requests to get the data for new UI. This improves the User Experience by making only one network call to server so that no new document is fetched from server and CSS and JS is not downloaded and evaluated again and again. It also provides dynamic experience with things like animation.
