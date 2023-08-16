# Section 31 Our First Brush With Node

Our First Brush With Node

# What I Learned
- In past browsers job was implement Js runtime and ran inside browser
- Node in implementation of Js outside if browser. 
- You cannot write same js as inside browser

- [node](https://nodejs.org/en)

- Case where Nasa is using [Node](https://openjsf.org/wp-content/uploads/sites/84/2020/02/Case_Study-Node.js-NASA.pdf)

<img src="node.PNG" alt="alt text" width="600"/>

- [GameUsingNode](http://www.cross-code.com/en/home)

- [deploying](https://www.electronjs.org/)

<img src="Repl.PNG" alt="alt text" width="600"/>

- **REPL** Read–eval–print loop

<img src="windowObjectInsideNode.PNG" alt="alt text" width="600"/>

- As you can see window and document object which would be inside browser world is not present here.

- global scope inside node is called global, the **global object** 

<img src="setTimeOutInsideGlobalObject.PNG" alt="alt text" width="600"/>

- example using `setTimeOut()` inside global object!

- [ProcessInNode](https://nodejs.org/api/process.html#process)

- You can see `process`inside node 

<img src="processInsideNode.PNG" alt="alt text" width="600"/>

- There is also function inside node, example

```
> process.cwd()
'C:\\Users\\heikki'
```

- To see where node is currently running

<img src="argv.PNG" alt="alt text" width="600"/>

- Using node `process.argv` from **process object**. Arguments will be retrieved

- Two ways to **read** and **create** files
    - **Asynch** version, usually need **callback** function
    - **Synch** version, waits or block other operations

- **Import** vs **require** [vs](https://www.freecodecamp.org/news/how-to-use-the-javascript-require-function/)