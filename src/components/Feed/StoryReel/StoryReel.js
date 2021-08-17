import React from 'react';
import Story from './Story/Story';
import './StoryReel.css';

const img =
  'https://i.pinimg.com/564x/e4/3b/30/e43b30464e7f8dfd8af62ab84909f436.jpg';

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image={img}
        profileSrc="https://i.pinimg.com/564x/d2/a8/6c/d2a86ca4ceb83a6e8677626f1ae6c9e5.jpg"
        title="Nazthedev"
      />
      <Story
        image={img}
        profileSrc="https://i.pinimg.com/564x/9b/59/f1/9b59f1562958191869af0a90f869c068.jpg"
        title="Nazthedev"
      />
      <Story
        image={img}
        profileSrc="https://i.pinimg.com/236x/b6/30/ab/b630ab36e973fba087781d590b532db3.jpg"
        title="Nazthedev"
      />
      <Story
        image={img}
        profileSrc="https://i.pinimg.com/564x/ec/2a/3b/ec2a3b3a04032f5f57e34118bfaeeb7a.jpg"
        title="Nazthedev"
      />
      <Story
        image={img}
        profileSrc="https://i.pinimg.com/564x/c4/c9/b5/c4c9b5174e5ce789568b061c78a01f4a.jpg"
        title="Nazthedev"
      />
    </div>
  );
}

export default StoryReel;