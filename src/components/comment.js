import React from 'react'

const Comment = () => {
  return (
    <div className='flex space-between'>
        <div className='imgContainer'>
            <img src="https://picsum.photos/id/237/200/300" alt="profile" className='img' />
        </div>
        <div>
            <div className='flex'>
                <h5 className='text-gray'>Rahul Gupta</h5>
                <h6 className='text-gray'>6 minutes ago</h6>
            </div>
            <div>
                <h4 className='text-white'>This is a great post</h4>
            </div>
        </div>
    </div>
  )
}

export default Comment;