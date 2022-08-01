import React, { useEffect, useState } from 'react';
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase';
import Moment from 'react-moment';

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'desc')
        ),
        (snapshot) => setComments(snapshot.docs)
      ),

    [db]
  );

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment('');

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

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
      {session && (
        <div className='flex justify-between px-4 pt-4'>
          <div className='flex space-x-4'>
            <HeartIcon className='btn' />
            <ChatIcon className='btn' />
            <PaperAirplaneIcon className='h-6 rotate-45 hover:opacity-25' />
          </div>
          <BookmarkIcon className='btn' />
        </div>
      )}
      {/* Caption */}
      <p className='p-5 truncate'>
        <span className='font-medium mr-1'>{username}</span> {caption}
      </p>
      {/* Comments */}
      {comments.length > 0 && (
        <div className='ml-10 h-10 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-100'>
          {comments?.map((comment) => (
            <div key={comment.id} className='flex items-center space-x-2 mb-3'>
              <img
                className='h-7 rounded-full'
                src={comment.data().userImage}
                alt=''
              />
              <p className='text-sm flex-1'>
                <span className='font-medium'>{comment.data().username} </span>
                {comment.data().comment}
              </p>
              <Moment fromNow className='pr-5 text-xs text-gray-400'>
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}
      {/* Input Box */}
      {session && (
        <form className='flex items-center p-4'>
          <EmojiHappyIcon className='h-7' />
          <input
            className='border-none flex-1 focus:ring-0 outline-none'
            type='text'
            placeholder='Add a comment...'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            onClick={sendComment}
            type='submit'
            disabled={!comment.trim()}
            className='font-medium text-[#159ff8]'
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
