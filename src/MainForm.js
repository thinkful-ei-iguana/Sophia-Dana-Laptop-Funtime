import React from 'react';
import Feature from './Feature';

export default function MainForm(props) {
console.log(props.features);
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx
    
    return (
      <Feature
        featureHash={featureHash}
        feature={props.features[feature]}
        handleUpdateFeature={props.handleUpdateFeature}
        handleUSCurrencyFormat={props.handleUSCurrencyFormat}
        selected={props.selected}
        featureName={feature}
      />
    )
  })


  return (
    < form className="main__form" >
      <h2>Customize your laptop</h2>
      {features}
    </form >
  )
}