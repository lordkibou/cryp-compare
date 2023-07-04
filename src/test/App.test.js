import renderer from 'react-test-renderer';
import App from '../App'
//If the change is expected you can invoke Jest with jest -u to overwrite the existing snapshot.

it('Testing App.js', () => {
  const component = renderer.create(
    <App/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});