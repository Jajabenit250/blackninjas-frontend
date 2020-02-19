import React from 'react';
import { shallow, mount } from 'enzyme';
import { NavLinks } from '../../../../src/components/profile/Nav.links';

describe('Top navigation bar component', () => {
	it('should render the top navigation bar  component successfully', () => {
		const token =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImVtYWlsIjoibXVqb2huMjVAZ21haWwuY29tIiwiaXNWZXJpZmllZCI6dHJ1ZSwiaWQiOjF9LCJpYXQiOjE1ODIyNDI0OTEsImV4cCI6MTU4MjMyODg5MX0.S_GO2R1kNZJrro5NbJOjO4S0UfBfhLaF-QtoiOUlmDo';
		localStorage.setItem('token', token);
		const wrapper = shallow(<NavLinks />);
		const buttonState = wrapper.state().bgcolor;
		expect(buttonState).toBe('#f1f1f1');
	});
	it('should handle onclick event of trips link', () => {
		const wrapper1 = shallow(<NavLinks />);
		wrapper1.setState({ role: 'admin' });
		wrapper1.find('#trips').simulate('click');
		const location = wrapper1.state().location;
		expect(location).toBe('/trips');
	});
	it('should handle onclick event of profile link', () => {
		const wrapper2 = shallow(<NavLinks />);
		wrapper2.find('#profile').simulate('click');
		const location = wrapper2.state().location;
		expect(location).toBe('/profile');
	});
	it('should handle onclick event of role link', () => {
		const wrapper2 = shallow(<NavLinks />);
		wrapper2.setState({ role: 'admin' });
		wrapper2.find('#userRole').simulate('click');
		const location = wrapper2.state().location;
		expect(location).toBe('/user/user-role-setting');
	});
	it('should handle onclick event of usermanagement link', () => {
		const wrapper3 = shallow(<NavLinks />);
		wrapper3.setState({ role: 'admin' });
		wrapper3.find('#userManagement').simulate('click');
		const location = wrapper3.state().location;
		expect(location).toBe('/user-management');
	});
});
