/**返回并导出TodoListItem组件的显示效果:
 * 1.勾选完成状态： input（checkbox）
 * 2.todo具体文本： label
 * 每个todo bar的元素：id,label,status
 */
//从todoApp传到todoList再传到todoListItem，toggleCompleted方法终于被使用

import React from 'react';

export const TodoListItem = (props) => {
  const { label, status, id, toggleCompleted } = props;//接收参数，并按照参数的格式来写接收变量的内容


  const handleCheck = () => {
    toggleCompleted(id);
  }

  return (
    <li className="todo">
      <label>
        <input type="checkbox" checked={status === 'completed'} onChange={handleCheck}/>
        {label}
      </label>
    </li>
  );
}
