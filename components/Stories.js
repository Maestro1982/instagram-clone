import React, { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import Story from './Story';
import { useSession } from 'next-auth/react';

function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

  /* This will run when the component mounts to generate fake data */
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, index) => ({
      id: index,
      address: faker.address.streetAddress(),
      phone: faker.phone.number(),
      company: faker.company.companyName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-xl overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-100'>
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}
export default Stories;
