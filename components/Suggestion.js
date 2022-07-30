import React from 'react';

function Suggestion({ avatar, username, company }) {
  return (
    <div className='flex mb-4'>
      <img
        className='w-10 h-10 rounded-full object-contain'
        src={avatar}
        alt=''
      />
      <div className='flex-1 ml-4'>
        <h2 className='font-semibold text-sm text-[#545454]'>{username}</h2>
        <h3 className='text-xs text-[#b1b1b1] w-48 truncate'>
          Works at {company}
        </h3>
      </div>
      <button className='text-[#34a9f6] font-medium ml-4 text-xs'>
        Follow
      </button>
    </div>
  );
}

export default Suggestion;
