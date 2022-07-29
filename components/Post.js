import React from 'react';
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';

function Post({ id, username, userImg, img, caption }) {
  return (
    <div className='bg-white my-7 border rounded-xl'>
      {/* Header */}
      <div className='flex items-center p-5'>
        <img
          className='rounded-full h-12 w-12 object-contain p-1 mr-3'
          src={userImg}
          alt=''
        />
        <p className='flex-1 font-medium'>{username}</p>
        <DotsHorizontalIcon className='h-5' />
      </div>
      {/* Img */}
      <img className='object-cover w-full' src={img} alt='' />
      {/* Buttons */}
      <div className='flex justify-between px-4 pt-4'>
        <div className='flex space-x-4'>
          <HeartIcon className='btn' />
          <ChatIcon className='btn' />
          <PaperAirplaneIcon className='h-6 rotate-45 hover:opacity-25' />
        </div>
        <BookmarkIcon className='btn' />
      </div>
      {/* Caption */}
      <p className='p-5 truncate'>
        <span className='font-medium mr-1'>{username}</span> {caption}
      </p>
      {/* Comments */}
      {/* Input Box */}
      <form className='flex items-center p-4'>
        <EmojiHappyIcon className='h-7' />
        <input
          className='border-none flex-1 focus:ring-0 outline-none'
          type='text'
          placeholder='Add a comment...'
        />
        <button className='font-medium text-[#159ff8]'>Post</button>
      </form>
    </div>
  );
}

export default Post;
