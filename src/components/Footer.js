import React from 'react';
import FilterLink from '../containers/Filterlink';

const Footer = () => (
	<div class="col-md-12"><p>
    Show:
		{' '}
		<FilterLink filter="SHOW_ALL">
      All
		</FilterLink>
		{', '}
		<FilterLink filter="SHOW_ACTIVE">
      Active
		</FilterLink>
		{', '}
		<FilterLink filter="SHOW_COMPLETED">
      Completed
		</FilterLink>
	</p></div>
);

export default Footer;
