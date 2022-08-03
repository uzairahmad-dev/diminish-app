import React from 'react';

import FeatureListItem from './FeatureListItem';
import { Check, Close } from '../../assets/svg';

type FeatureListProps = {
    basic?: Boolean,
    premium?:Boolean
}

const FeatureList: React.FC<FeatureListProps> = ({ basic, premium }) => {
  return (
        <ul className="font-bold text-base">
          <FeatureListItem text='Shorten Links' svg={Check} />
          <FeatureListItem text='Authentication' svg={!basic && !premium ? Close : Check}/>
          <FeatureListItem text='Statistics' svg={!basic && !premium ? Close : Check}/>
          <FeatureListItem text='Filter Links' svg={!basic && !premium ? Close : Check}/>
          <FeatureListItem text='QR Code Conversion' svg={premium ? Check : Close}/>
          <FeatureListItem text='Public or Private Links' svg={premium ? Check : Close}/>
          <FeatureListItem text='Device Type' svg={premium ? Check : Close}/>
          <FeatureListItem text='Location' svg={premium ? Check : Close}/>
        </ul>
  )
}

export default FeatureList;