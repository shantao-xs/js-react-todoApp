/**返回并导出TodoList组件的显示效果: 
 * 1.将todos以列表形式呈现： ul+Array.map() 
 * 2.根据todos数据，动态呈现todo bar
 * 3.根据status，显示filter的todo
 */
//? 这个map()怎么理解？

//props从todoApp传到了todoList
import React from 'react';
import { TodoListItem } from './TodoListItem.tsx';

//? 这里的{...todo为什么在属性这里？}
export const TodoList = (props) => {
  const { todos, filter, toggleCompleted,handleCancelClick } = props;
  
  const filteredTodos = todos.filter((todo) => {
    if (todo.status === 'cleared'){
      return false;
    };

    if (filter === 'all') {
      return true;
    } else if (filter === 'completed') {
      return todo.status === 'completed';
    } else if (filter === 'active'){
      return todo.status === 'active';
    };

    return false;
  })



  return (
    <ul className='todos'>
      {filteredTodos.map((todo)=> <TodoListItem 
                                    key={todo.id} 
                                    {...todo} 
                                    toggleCompleted={toggleCompleted}
                                    handleCancelClick={handleCancelClick} />)}
    </ul>
  )
}
