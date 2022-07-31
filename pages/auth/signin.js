import React from 'react';
import { getProviders, signIn } from 'next-auth/react';
import Header from '../../components/Header';

//Browser...
function SignIn({ providers }) {
  return (
    <>
      <Header />
      <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-40 px-14 text-center'>
        <img className='w-80' src='https://links.papareact.com/ocw' alt='' />
        <p className='font-xs italic'>
          This is <span className='text-red-500 font-bold underline'>NOT</span>{' '}
          a <span className='font-bold'>REAL</span> app, it is built for
          educational purpose only.
        </p>
        <div className='mt-40'>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className='p-3 bg-[#4484e9] rounded-lg text-white'
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Server side render
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default SignIn;
