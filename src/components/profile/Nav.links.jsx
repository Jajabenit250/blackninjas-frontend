import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import EditIcon from '@material-ui/icons/Edit';
import { Divider, Typography } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import verifyToken from '../../helpers/tokenHelper';

const useStyles = theme => ({
	isActive: {
		backgroundColor: '#F1F1F1',
		color: '#2196F3',
	},
});
export class NavLinks extends Component {
	state = {
		bgcolor: '#f1f1f1',
		role:''
	};

	changeBgColor = () => {
		this.setState({ bgcolor: '#F1F1F1' });
	};
	UNSAFE_componentWillMount() {
		const token = localStorage.getItem('token');
		
		const user = verifyToken(token);
		this.setState({
			role:user.payload.role
		})
		
		
	}
	render() {
		const { classes } = this.props;
		return (
			<Grid
				container
				style={{ width: '100%', backgroundColor: 'white', marginTop: '15px' }}
			>
				<Divider />
				<ListItem button>
					<ListItemIcon>
						<DirectionsWalkIcon />
					</ListItemIcon>
					<ListItemText>
						<Link to='/trips' style={{ textDecoration: 'none' }}>
							<Typography>Trips</Typography>
						</Link>
					</ListItemText>
				</ListItem>
				<Divider />
				<ListItem
					button
					className={
						window.location.pathname === '/profile' ? classes.isActive : 'null'
					}
				>
					<ListItemIcon>
						<PersonIcon />
					</ListItemIcon>
					<ListItemText>
						<Link to='/profile' style={{ textDecoration: 'none' }}>
							<Typography>Profile</Typography>
						</Link>
					</ListItemText>
				</ListItem>
				<Divider />
				{this.state.role==='admin'?(
				<ListItem button
									className={
						window.location.pathname === '/user/user-role-setting' ? classes.isActive : 'null'
					}
				>
					<ListItemIcon>
						<SupervisorAccountIcon  />
					</ListItemIcon>
					
				<ListItemText>
						<Link to='/user/user-role-setting' style={{ textDecoration: 'none' }}>
							<Typography>Role</Typography>
						</Link>
					</ListItemText>
					</ListItem>):''}
				<Divider />
			</Grid>
		);
	}
}

export default withStyles(useStyles)(NavLinks);
