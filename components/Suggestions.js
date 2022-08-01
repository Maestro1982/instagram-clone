import React, { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import Suggestion from './Suggestion';

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  /* This will run when the component mounts to generate fake data */
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, index) => ({
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
    <div className='mt-4 ml-10'>
      <div className='flex justify-between text-sm mb-5'>
        <h3 className='text-sm font-medium text-[#9b9b9b]'>
          Suggestions for you
        </h3>
        <button className='text-[#525252] font-medium'>See all</button>
      </div>
      {suggestions.map((profile) => (
        <Suggestion
          key={profile.id}
          avatar={profile.avatar}
          username={profile.username}
          company={profile.company}
        />
      ))}
      <footer className='text-[#cdcdcd]'>&#169; 2022 Maestro1982</footer>
    </div>
  );
}

export default Suggestions;
