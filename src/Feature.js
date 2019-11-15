import React from 'react';
import FeatureItem from './FeatureItem';
import slugify from "slugify";

export default function Feature(props) {
  
  const featureItems = props.feature.map(item => {
    const itemHash = slugify(JSON.stringify(item));
    console.log(itemHash);
    return (
      <FeatureItem
        itemHash={itemHash}
        item={item}
        handleUSCurrencyFormat={props.handleUSCurrencyFormat}
        handleUpdateFeature={props.handleUpdateFeature}
        selected={props.selected}
        featureName={props.featureName}
      ></FeatureItem>
    )
  });
  console.log(featureItems);
  return (
    <fieldset className="feature" key={props.featureHash}>
      <legend className="feature_name">
        <h3>{props.featureName}</h3>
      </legend>
      {featureItems}
    </fieldset>
  )
}