import '../index.css';

import { ImageCard } from './ImageCard.jsx';
import { furnituresPictures } from '../components/FurnituresPictures/furnituresPictures.jsx';
import { root } from '@lynx-js/react';

function FirstImageCard() {
  const MyFirstPicture = furnituresPictures[0];

  return (
    <view className="gallery-wrapper single-card">
      <ImageCard picture={MyFirstPicture} />
    </view>
  );
}

root.render(<FirstImageCard />);
