import React from 'react';


const BnbShowHost = ({ host }) => {
  return (
    <div className="show-panel">
      <div className="show-panel-title">
        Hosted by {host.first_name}
      </div>
      <div>
        Image Placeholder
      </div>
    </div>
  );
};


export default BnbShowHost;
