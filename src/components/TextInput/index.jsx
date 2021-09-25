import './styles.css'
export const TextInput = (props) =>{

return(
    <input 
    className='text-input' 
    placeholder='Search'
    type="search" 
    value = {props.searchValue}
    onChange={props.handleChange}
    />
)}