import { connect } from "react-redux";
import Shownotes from "../Component/Shownotes"
import { deletenNote } from '../Services/Action/Action'
const mapStateToProps=state=>({
    data:state.notes_and_todo
})
const mapDispatchToProps=dispatch=>({
    removeEventHandler:datanote=>dispatch(deletenNote(datanote))
})

export default connect(mapStateToProps,mapDispatchToProps)(Shownotes)