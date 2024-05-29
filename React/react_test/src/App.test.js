import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  //Learn REact, leaRn reaCt
  const linkElement = screen.getByText(/learn react/i);
  //it is checking if learn react is the DOM
  expect(linkElement).toBeInTheDocument();
});

test('Check for 4 List Items',()=>{
  render(<App/>);
  const allLi = screen.getAllByRole("listitem");
  // console.log(allLi.length);
  expect(allLi.length).toBe(4);
})