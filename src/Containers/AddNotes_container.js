import AddNote from '../Component/AddNotes'
import {connect} from 'react-redux'

import { addNotes } from '../Services/Action/Action'

const mapStateToProps=state =>({

})
const mapDispatchToProps=dispatch=>({
    addNoteHandler:datanote=>dispatch(addNotes(datanote))
})

export default connect(mapStateToProps,mapDispatchToProps)(AddNote)