import React, {Component} from 'react';

class HistorySample extends Component{
    
        handleGoBack=()=>{
            this.props.history.goBack();
        };
        handleGoHome=()=>{
            this.props.history.push('/');
        };
        //라이플사이클 메서도
        //컴포넌트가 마운드 될 때
        componentDidMount(){
            this.unblock = this.props.history.block('정말 떠나실 건가요?');
        }
        //라이프사이클 메소드
        //컴포넌트가 언마운트 될때
        
        componentWillUnmount(){
            if(this.unblock){
                this.unblock();
            }
        }
        render(){
        return(
            <div>
                <button onClick={this.handleGoBack}>뒤로</button>
                <button onClick={this.handleGoHome}>홈으로</button>
            </div>
        )
    }
}
export default HistorySample;