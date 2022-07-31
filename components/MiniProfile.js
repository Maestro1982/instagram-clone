import React from 'react';
import { signOut, useSession } from 'next-auth/react';

function MiniProfile() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className='flex items-center justify-between mt-8 ml-10'>
      <img
        className='rounded-full w-14 h-14'
        src={session?.user?.image}
        alt=''
      />
      <div className='flex-1 mx-4'>
        <h2 className='font-medium'>{session?.user?.username}</h2>
        <h3 className='text-[#b8b8b8]'>Kris Toté</h3>
      </div>
      <button
        onClick={signOut}
        className='text-[#25a4f6] font-semibold text-sm ml-24'
      >
        Sign Out
      </button>
    </div>
  );
}

export default MiniProfile;
