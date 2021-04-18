import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

    
    return (
        < header className='header'>
            <h1>{props.title}</h1>
            <Button color={props.showApp ===true?"red":"green"} text= {props.showApp === true ? "Close" : "Add"} onClick={props.onAdd} />
        </header>
    )
}

export default Header
