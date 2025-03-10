import { furnituresPictures } from '../components/FurnituresPictures/furnituresPictures.jsx';

import { root } from '@lynx-js/react';
import Gallery from './Gallery.jsx';

function PictureList() {
  return <Gallery pictureData={furnituresPictures} />;
}

root.render(<PictureList />);
