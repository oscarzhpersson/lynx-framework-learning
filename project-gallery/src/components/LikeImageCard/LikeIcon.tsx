import { useState } from '@lynx-js/react';

import redHeart from '../../assets/icons/redHeart.png';
import whiteHeart from '../../assets/icons/whiteHeart.png';

import '../../index.css';

export default function LikeIcon() {
  const [isLiked, setIsLiked] = useState(false);

  const onTap = () => {
    setIsLiked(true);
  };

  return (
    <view className="like-icon" bindtap={onTap}>
      {isLiked && <view className="circle" />}

      {isLiked && <view className="circle circleAfter" />}

      <image src={isLiked ? redHeart : whiteHeart} className="heart-love" />
    </view>
  );
}
