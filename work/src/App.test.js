// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/TODO NEXT/i);
//   expect(linkElement).toBeInTheDocument();
// });
import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

// it('renders', () => {
//   const wrapper = shallow(<App />);
//   expect(wrapper.find('div').text()).toEqual('TODO NEXT');
// });
it('Should display App page correctly', () => {
  const calculator = shallow(<App />)

  const div = calculator.find('div')
  expect(div.length).toBe(1)
  expect(div.find('img').length).toBe(1)
  expect(div.find('Cards').length).toBe(1)
  expect(div.find('CountryPicker').length).toBe(1)
  expect(div.find('Chart').length).toBe(1)


  
  // expect(form.find('p.result').length).toBe(1)
});


