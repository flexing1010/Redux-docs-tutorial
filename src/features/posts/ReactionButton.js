// import { useDispatch } from 'react-redux'
// import { reactionAdded } from './postsSlice'

// const reactionEmoji = {
//   thumbsUp: '👍',
//   hooray: '🎉',
//   heart: '❤️',
//   rocket: '🚀',
//   eyes: '👀',
// }
// const ReactionButtons = ({ post }) => {
//   const dispatch = useDispatch()
//   const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
//     return (
//       <button
//         key={name}
//         type="button"
//         className="muted-button reaction-button"
//         onClick={() => {
//           dispatch(reactionAdded({ postId: post.id, reaction: name }))
//         }}
//       >
//         {emoji} {post.reactions[name]}
//       </button>
//     )
//   })
//   return <div>{reactionButtons}</div>
// }

// export default ReactionButtons

import React from 'react'
import { useDispatch } from 'react-redux'

import { reactionAdded } from './postsSlice'

export const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch()

  let reactionEmoji = {
    thumbsUp: '👍',
    hooray: '🎉',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀',
  }
  console.log(Object.entries(reactionEmoji)[0])
  const reactionButtons = Object.entries(reactionEmoji).map(
    ([reaction, emoji]) => {
      return (
        <button
          key={reaction}
          type="button"
          className="muted-button reaction-button"
          onClick={() =>
            dispatch(reactionAdded({ postId: post.id, reaction: reaction }))
          }
        >
          {emoji} {post.reactions[reaction]}
        </button>
      )
    }
  )

  return <div>{reactionButtons}</div>
}
