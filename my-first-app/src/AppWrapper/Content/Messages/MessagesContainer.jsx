import Messages from './Messages'
import { whatFriendDialogActionCreator, addMessActionCreator, onMessChangeActionCreator } from '../../../Redux/messages-reducer'
import {connect} from 'react-redux'
let mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeDialog: (dialog) => {
            dispatch(whatFriendDialogActionCreator(dialog))
        },
        addMess: () => {
            dispatch(addMessActionCreator())
        },
        onMessChange: (text) => {
            dispatch(onMessChangeActionCreator(text))
        }

    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer