/**返回并导出TodoListItem组件的显示效果:
 * 1.勾选完成状态： input（checkbox）
 * 2.todo具体文本： label
 * 每个todo bar的元素：id,label,status
 */
//从todoApp传到todoList再传到todoListItem，toggleCompleted方法终于被使用
//*tips：匿名函数的作用：保证只有事件触发时才会调用该函数。如onChange={()=>{toggleCompleted(id)}}。 如果直接调用函数如onChange={toggleCompleted(id)}，则会导致每次渲染都会调用toggleCompleted方法
import React from 'react';

export const TodoListItem = (props) => {
  const { label, status, id, toggleCompleted,handleCancelClick } = props;//接收参数，并按照参数的格式来写接收变量的内容



  return (
    <li className="todo">
      <label>
        <input type="checkbox" checked={status === 'completed'} onChange={()=>{toggleCompleted(id)}}/>
        {label}
        <button type="button" onClick={()=>{handleCancelClick(id)}}>
          <i className="fas fa-times"></i>
        </button>
      </label>
    </li>
  );
}
