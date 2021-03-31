//화면을 가운데로 정렬시켜 주고, 앱 타이틀을 보여줌
import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({children}) => {
    return(
        <div className = {'TodoTemplate'}>

            <div className="app-title">일정 관리</div> 
            <div className="content">{children}</div>
        </div>
    )
}
export default TodoTemplate;