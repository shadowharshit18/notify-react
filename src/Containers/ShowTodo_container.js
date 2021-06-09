import { connect } from "react-redux";
import Shownotes from "../Component/Showtodo"

const mapStateToProps=state=>({
    data:state.todo
})

const mapDispatchToProps=dispatch=>({

})

export default connect(mapStateToProps,mapDispatchToProps)(Shownotes)