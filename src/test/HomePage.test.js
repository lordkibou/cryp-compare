import renderer from 'react-test-renderer';
import HomePage from '../scenes/homePage'
import { BrowserRouter } from 'react-router-dom';
//If the change is expected you can invoke Jest with jest -u to overwrite the existing snapshot.

it('Testing HomePage Scene', () => {
  const component = renderer.create(
    <BrowserRouter>
        <HomePage/>
    </BrowserRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});