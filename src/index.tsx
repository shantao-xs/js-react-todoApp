//react的root file/入口文件，渲染应用的主要组件App并挂载到html对应的位置上（写着id='app'的元素上)

import React from 'react';
import ReactDOM from 'react-dom';
import { TodoApp } from './App.tsx';
import './style.css';

ReactDOM.render(
    <TodoApp />,
    document.getElementById('app')
  );