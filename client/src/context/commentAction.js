import { GLOBALTYPES, EditData, DeleteData } from './globalTypes'
import { Post } from '../../../api/routes/posts'
import { postDataAPI, } from '../../utils/fetchData'
import Post from '../components/post/Post'


export const createComment = ({post, newComment, auth, socket}) => async (dispatch) => {
    const newPost = {...post, comments: [...post.comments, newComment]}
    
    dispatch({ type: Post.UPDATE_POST, payload: newPost })

    try {
        const data = {...newComment, postId: post._id, postUserId: post.user._id}
        const res = await postDataAPI('comment', data, auth.token)

        const newData = {...res.data.newComment, user: auth.user}
        const newPost = {...post, comments: [...post.comments, newData]}
        dispatch({ type: POST_TYPES.UPDATE_POST, payload: newPost })

        // Socket
        socket.emit('createComment', newPost)

    } catch (err) {
        dispatch({ type: GLOBALTYPES.ALERT, payload: {error: err.response.data.msg} })
    }

}