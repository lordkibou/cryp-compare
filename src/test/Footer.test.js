import renderer from 'react-test-renderer';
import Footer from '../scenes/footer'
import { BrowserRouter } from 'react-router-dom';
//If the change is expected you can invoke Jest with jest -u to overwrite the existing snapshot.

it('Testing Footer Scene', () => {
  const component = renderer.create(
    <BrowserRouter>
        <Footer/>
    </BrowserRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});