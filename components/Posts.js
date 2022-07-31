import React from 'react';
import Post from './Post';

const posts = [
  {
    id: '123',
    username: 'kris.tote',
    userImg:
      'https://media-exp1.licdn.com/dms/image/C4E03AQHiLIb4_u15vw/profile-displayphoto-shrink_800_800/0/1655199584360?e=1664409600&v=beta&t=adUAjW1_UHu0z_EUlZ96SFhGrzQT1phFfSadokpbx8Y',
    img: 'https://media-exp1.licdn.com/dms/image/C4E03AQHiLIb4_u15vw/profile-displayphoto-shrink_800_800/0/1655199584360?e=1664409600&v=beta&t=adUAjW1_UHu0z_EUlZ96SFhGrzQT1phFfSadokpbx8Y',
    caption: 'Awesome insta-clone!',
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
