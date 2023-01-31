## Q: What is Emmet?
#### A: Emmet is a plug for text editors which provide high-speed coding for various langugaes like HTML, XML, and other structured code formats. It provides shortcuts to create boilerplate code or a snippet of the code for faster coding.
<br>

## Q: Difference between a Library and Framework?
#### A: **Frameworks:** They include all the tools required to build an application - Components, Routing, Directives,Basic state management, handling forms, testing. They have official style guides as well. Suitable for enterprise and large scale applications. Have good architecture so refactoring codebase is does not impact productivity.
#### **Library**: Have a single purpose. Like React is for creating UI and redux is for state management. Provides flexibility to choose and couple one library with another. For small-scale apps. Custom architecture can be a pain to refactor the codebase and may impact productivity.
<br>

## Q: What is CDN? Why do we use it?
#### A: CDN is a geographically distributed group of servers which work together to provide fast delivery of internet content. CDN allows for quick transfer of assets needed for loading Internet content such as HTML pages, Js files, CSS etc. 
#### We use CDN to get access to React and ReactDOM libraries from internet by getting it from server nearest to our location. 
<br>

## Q: Why is React known as React?
#### A: React is known as React because it "reacts" to changes in data. When data changes, React automatically updates UI. This makes React very fast and responsive and helps make your web application more user-friendly.
<br>

## Q: What is crossorigin in script tag?
#### A: Crossorigin attribute in script tag provides support for CORS, defining how element handles cross-origin requests. CORS checks whether it is safe to allow for sharing the resources from other domains. It is also added to media elements like img, audio, video tags.It has two values - anonymous and user-credentials.
#### **Anonymous** : . It defines a CORS request which will be sent without passing the credential information.
#### **user-credentials** : A cross-origin request will be sent with credentials, cookies, and certificate.
<br>

## Q: What is diference between React and ReactDOM?
#### A: **React** library is used for creating views. **ReactDOM** is used for interaction between React and DOM. The React elements created by React are added to browser by ReactDOM.
<br>

## Q: What is difference between react.development.js and react.production.min.js files via CDN?
#### A: react.development.js is the same as react.production.min.js. Both are React files but one is for production environment and other is for development. React.production.min.js is **optimized** and **minified** but the development one is not.
<br>

## Q: What is async and defer?
#### A: **Async:** Async attribute is used to fetch the script files parallely with the HTML parsing. Once the script files are fetched then HTML parsing is paused and script files are executed.Once script execution completes, then the HTML page parsing resumes. But in case of multiple script files, there is no order of execution. So if there are script files that are dependent on one another it can cause issue.
#### **Defer**: When we use defer attribute then files are fetched parallely to HTML parsing just like in async attribute but the HTML parsing is not paused once fetching of scripts finish. Instead, browser keeps parsing the HTML. Only after it has completely finished parsing the HTML page, it executes the script files. The order of execution of scripts is maintained in defer.