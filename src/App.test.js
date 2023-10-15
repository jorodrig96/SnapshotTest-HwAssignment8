import { render, screen, waitFor } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import MyGitCard from './components/MyGitCard';


describe('rendering tests', () => {
  test('rendering a test', () => {
    const tree = renderer.create(<App />).toJSON();
    console.log(tree)
    expect(tree).toMatchSnapshot()
  })
});

