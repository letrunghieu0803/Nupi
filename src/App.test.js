import { render, screen } from '@testing-library/react';
// import App from './App';

test('renders learn react link', () => {
  render(<div>test</div>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


export default test