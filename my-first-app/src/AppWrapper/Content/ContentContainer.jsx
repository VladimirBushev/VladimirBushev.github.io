import {connect} from 'react-redux'
import Content from './Content'
import { onPostChangeActionCreator, publishPostActionCreator } from '../../Redux/content-reducer'
let mapStateToProps = (state) => {
    return {
        users: state.content.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostChange: (text, id) => {
            dispatch(onPostChangeActionCreator(text, id))
        },
        publishPost: (id) => {
            dispatch(publishPostActionCreator(id))
        }
    }
}

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content)

export default ContentContainer;