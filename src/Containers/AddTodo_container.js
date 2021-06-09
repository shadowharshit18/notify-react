import AddTodo from '../Component/AddTodo'
import {connect} from 'react-redux'

import { addTodo } from '../Services/Action/ActionTodo'

const mapStateToProps=state =>({

})
const mapDispatchToProps=dispatch=>({
    addtodo:datatodo=>dispatch(addTodo(datatodo))
})

export default connect(mapStateToProps,mapDispatchToProps)(AddTodo)