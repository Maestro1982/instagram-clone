import React from 'react';

function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img
        className='rounded-full w-14 h-14'
        src='https://media-exp1.licdn.com/dms/image/C4E03AQHiLIb4_u15vw/profile-displayphoto-shrink_800_800/0/1655199584360?e=1664409600&v=beta&t=adUAjW1_UHu0z_EUlZ96SFhGrzQT1phFfSadokpbx8Y'
        alt=''
      />
      <div className='flex-1 mx-4'>
        <h2 className='font-medium'>kris.tote</h2>
        <h3 className='text-[#b8b8b8]'>Kris Toté</h3>
      </div>
      <button className='text-[#25a4f6] font-semibold text-sm ml-24'>
        Sign Out
      </button>
    </div>
  );
}

export default MiniProfile;
