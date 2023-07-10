import renderer from 'react-test-renderer';
import UpArrow from '../components/UpArrow';
import { BrowserRouter } from 'react-router-dom';
//If the change is expected you can invoke Jest with jest -u to overwrite the existing snapshot.

it('Testing UpArrow Scene', () => {
  const component = renderer.create(
    <BrowserRouter>
        <UpArrow/>
    </BrowserRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});