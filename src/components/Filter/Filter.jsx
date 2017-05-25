import React from 'react';
import Checkbox from 'material-ui/Checkbox';

import './Filter.scss';

class Filter extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {};
   }

   render() {
      return (
            <div>
                <Checkbox label="Show done" />
            </div>
      );
   }
}

export default Filter;