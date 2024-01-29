# js mini project - todo app using react

This project was based on [microsoft frontend project](https://microsoft.github.io/frontend-bootcamp/)

## Version Control
This project has 3 versions: fundemental page rendering, method implementation and optimization.  
Each version has buit in an independent branch.  
Further notes about version control and git can be found at: <mark>[tbc]</mark>

## App's Main Features


## Study Notes
### 1. how to create a frontend project from scratch 
1. create a project with typescript & react framework
    - set up react by create-react-app
2. start from scratch with folder public & src
3. debug: npm start
4. upload to github: version control
<br>

### 2. app structure
-public  
--index.html：页面框架文件，应用的主入口  
-src  
--index.tsx：react的主入口，渲染app到html上  
--sytle.css：所有样式设计，通过id和每个元素精准对应  
--app.tsx：集成所有组件  
--components：存放各种小组件
![todoApp component diagram](./src/images/todoApp%20component%20diagram.jpg)
<br>

### 3. app development steps
*core notion：先赊后补。先写在哪里实现，再写具体实现的方法、如何实现（return ...）*  

依据该核心理念，编写顺序为：  
- index.html：app的入口，总体网页架构【为\<div id="app">留空】
- index.tsx: react的入口，渲染react app并挂载到index.html的\<div id="app">上【为待渲染的\<TodoApp />留空】
- App.tsx: 应用的主要组件，-汇总所有小组件，编写所有小组件要用到的方法【为各种组件留空，给每个组件传入它需要的参数和方法】
- ToDoHeader.tsx ,etc.: 写网页中该部分的呈现  

在单个组件中，编写顺序为：
1. 写页面展示框架(html)
2. 加样式(className=style_id)，并在index.tsx渲染时统一调用css
3. 加功能：调用哪些子组件的功能？新编写哪些功能？
先写实现（return html），再写为实现需要补充的方法

### 4. methods: construct, pass parameter, call & Implement

关于实现：在什么条件下调用方法？（如if，变化onClick等)传递哪些参数？  
#### 4.1 construct method
*core notion:*  
*1.想要全局通用的方法，在App组件中定义以便复用，如handleCancelClick  
2.想要在某个子组件中使用它，需要从App-子组件-子子组件-...-目标子组件一路把参数传递下来，注意参数不要传错组件  
3. <mark>tbc: 为了解决嵌套组件中参数传递易错的问题，使用ts类型限制+context传参</mark>*

*in this case:*
主要功能有：
1. addTodo() -> Header
2. 筛选显示特定status条件的todos -> List
3. 点击某条todo状态栏时伴随status改变 -> ListItem
4. 点击某条todo的×键删除词条内容 -> ListItem
5. 一键清除所有完成todo -> Footer


#### 4.2 pass parameter
*父组件→子组件：传递变量与组件*
- 想要重复使用的方法和变量，写在父组件上，然后以参数的形式传入子组件，如\<TodoHeader filter={filter} setFilter={setFilter} addTodo={addTodo}/>中把filter,setFilter,addTodo传给Header
- 仅作用于当前组件的变量，写在当前组件里  

#### 4.3 call method
*→子组件：用变量容器接收来自父组件的参数（方法），并进行调用*
- 接收父组件中需要用到的参数，如Header组件接收父组件的{filter,setFilter,addTodo}

#### 4.4 implement method
*→子组件：调用方法*
- 直接调用：每次渲染都会调用，如onChange={toggleCompleted(id)}
- 发生事件时才调用：如只有在onChange时才会调用，通过将匿名函数作为回调实现，如onChange={()=>{toggleCompleted(id)}}  

### 5. how to structure the page(html)
input占位符：未输入前预先显示的字样  
classname：所有元素的样式透过它和css连接设定  
span：行内元素，不换行  
div：块级元素，可以包括一大块内容  
<mark>[tbc]</mark>
<br>

### 6. how to design(css)
<br>

## To-Dos
1. 如何用ts进行类型限制
2. 如何配合类型限制文件，精简传参步骤