import React from 'react';

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  originWidth?: number;
  originHeight?: number;
};

export function Image({ src, alt, originWidth, originHeight, ...rest }: ImageProps) {
  // keep originWidth/originHeight for internal use or analytics but don't pass them
  // as DOM props. If you need them in DOM, expose as data- attributes:
  const dataAttrs = {
    ...(originWidth != null ? { "data-origin-width": String(originWidth) } : {}),
    ...(originHeight != null ? { "data-origin-height": String(originHeight) } : {}),
  };

  return <img src={src} alt={alt} {...dataAttrs} {...rest} />;
}
