import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';


//todos 배열을 props을 받아서 이를 여려개의 TodoListItem 컴포넌트로 반환해준다.
const TodoList = ({todos,onRemove,onToggle}) =>{
    
    return (
        
        <div>
        <div className = 'TodoList'>
            {todos.map(todo =>(
                <TodoListItem todo={todo} 
                key={todo.id}
                onRemove={onRemove}
                onToggle={onToggle}/> 
            ))}
            
        </div>
        
       
        </div>
    );
};

export default React.memo(TodoList);