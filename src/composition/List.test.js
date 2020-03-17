import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List.js';

describe('List component', () => {
    it('renders without crashing', () => {
      //const list = [];
      //const cards = [];
      
      const section = document.createElement('section');
      ReactDOM.render(<List cards={[]}/>, section);
      ReactDOM.unmountComponentAtNode(section);
    });
    
    it('renders the UI as expected', () => {
        const tree = renderer
          .create(<List cards={[]} title={'First Cards'} content={'lorem ipsum'}/>)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });


  });
