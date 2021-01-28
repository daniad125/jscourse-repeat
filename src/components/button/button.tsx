import React, { AllHTMLAttributes } from 'react';
import classnames from 'classnames';

import {ButtonColors} from './model';
import style from './style.css';
interface ButtonProps extends AllHTMLAttributes<HTMLButtonElement>{
    colorScheme:ButtonColors;
    onClick?: ()=>void;
    className?:string;
}
const Button:React.FC<ButtonProps> =({colorScheme, children, onClick,className})=>(
    <button onClick={onClick} className={classnames(style.main,style[colorScheme],className)}>{children}</button>
)

export default Button