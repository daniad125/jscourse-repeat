import React from 'react';

import {
    LabeledInput, 
    Button,
    ButtonColors
} from '../../components';
import style from './style.css';
import {Logo} from '../../assets';

//let aaa=1;
//(window as any).getAAA=()=>aaa;
class Login extends React.Component{
    firstInputRef=React.createRef<HTMLInputElement>()
    
    componentDidMount(){
        this.firstInputRef.current.focus()
    }

/*    handleGoogleButtonClick = () => {
        aaa=2;
        this.forceUpdate();
    }
*/    render(){
        return (
    <div className={style.wrapper}>
        <form className={style.loginForm}>
            <img src={Logo}/>
            <LabeledInput inputRef={this.firstInputRef}label="Введите логин" id="login-input" name="login"/>
           <LabeledInput label="Введите пароль" id="password-input" name="password" type="password"/>
            <Button colorScheme={ButtonColors.blue} onClick={()=>alert('HAHA')}>Submit</Button>
            <Button type="submit" className={style.submitButton} colorScheme={ButtonColors.purple} >Продолжить</Button>
        </form>

    </div>
        )
    }
};

export default Login
