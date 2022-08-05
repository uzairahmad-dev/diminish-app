import React from 'react';

type FeatureListItemProps = {
    text: string,
    svg: string
}

const FeatureListItem: React.FC<FeatureListItemProps> = ({ text, svg }) => {
  return (
    <li className="text-color-secondary list-none mb-2 flex items-center justify-between gap-[.5rem]">
        <span>{text}</span>
        <img className='w-8 h-8' src={svg} alt="shorten links" />
    </li>
  )
}

export default FeatureListItem;