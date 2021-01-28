import React, { HTMLAttributes } from 'react'
import PropTypes from 'prop-types';
interface LabeledInputProps extends Omit<HTMLAttributes<HTMLInputElement>,'id'|'name'>{
  id:string | number;
  name:string;
  label:string;
  type?:string;
  inputRef?:React.RefObject<HTMLInputElement>;

}


export const LabeledInput:React.FC<LabeledInputProps>=({inputRef,label,id,name,type,...rest}:LabeledInputProps)=>(
  <div>
  <label htmlFor={String(id)} >{label}</label>
  <input ref={inputRef} type={type} name={name} id={String(id)} {...rest}/>
  </div>
)

LabeledInput.propTypes={
  label: PropTypes.string.isRequired,
  id:PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  name:PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text','password'])
}
LabeledInput.defaultProps={
  type:'text'
}

