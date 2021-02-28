import {connect} from 'react-redux'
import Users from './Users'

let mapStateToProps = (state) => {
    return {
        users: state.users,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer