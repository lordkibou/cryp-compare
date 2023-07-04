import renderer from 'react-test-renderer';
import Navbar from '../scenes/navbar'
import { BrowserRouter } from 'react-router-dom';
//If the change is expected you can invoke Jest with jest -u to overwrite the existing snapshot.

it('Testing Navbar Scene', () => {
  const component = renderer.create(
    <BrowserRouter>
        <Navbar/>
    </BrowserRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});