import renderer from 'react-test-renderer';
import MarketsComparator from '../scenes/marketsComparator'
import { BrowserRouter } from 'react-router-dom';
//If the change is expected you can invoke Jest with jest -u to overwrite the existing snapshot.

it('Testing MarketsComparator Scene', () => {
  const component = renderer.create(
    <BrowserRouter>
        <MarketsComparator/>
    </BrowserRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});