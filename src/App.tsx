//应用的主要组件和总框架所在地，汇总所有的组件，返回一个整合的html结构

import React from 'react';
import { TodoHeader } from './components/TodoHeader.tsx';
import { TodoList } from './components/TodoList.tsx';
import { TodoFooter } from './components/TodoFooter.tsx';

export const TodoApp = props => {
  return (
    <div>
      <TodoHeader />
      <TodoList />
      <TodoFooter />
    </div>
  )
}
