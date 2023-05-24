import React from 'react';
import { render } from 'react-dom';
import Listing from './pages/designs/ActivityListing/Listing';

describe('Listing', () => {
it('renders without crashing', () => {
const div = document.createElement('div');
render(<Listing />, div);
});
});