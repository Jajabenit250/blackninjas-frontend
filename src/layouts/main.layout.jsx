import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SideNavBarPage from '../views/SideNavBar';
import TopNavBar from '../components/profile/top.nav.bar.jsx';
import Profile from '../components/profile/Profile.jsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(1),
	},
}));

const MainLayout = props => {
	const matches = useMediaQuery('(max-width: 767px)');

	const appBarCss = matches ? '1px 1px gray' : '0px 0px white';
	const { container } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const drawer = (
		<div>
			<SideNavBarPage />
		</div>
	);
	return (
		<Router>
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position='fixed'
					style={{ backgroundColor: 'white', boxShadow: `${appBarCss}` }}
					className={classes.appBar}
				>
					<Toolbar>
						<IconButton
							id='IconButton'
							color='primary'
							aria-label='open drawer'
							edge='start'
							onClick={() => {
								setMobileOpen(!mobileOpen);
							}}
							className={classes.menuButton}
						>
							<MenuIcon />
						</IconButton>
						<TopNavBar />
					</Toolbar>
				</AppBar>
				<nav className={classes.drawer} aria-label='mailbox folders'>
					<Hidden smUp implementation='css'>
						<Drawer
							id='Drawer'
							container={container}
							variant='temporary'
							anchor={theme.direction === 'rtl' ? 'right' : 'left'}
							open={mobileOpen}
							onClose={() => {
								setMobileOpen(!mobileOpen);
							}}
							classes={{
								paper: classes.drawerPaper,
							}}
							ModalProps={{
								keepMounted: true,
							}}
						>
							{drawer}
						</Drawer>
					</Hidden>
					<Hidden xsDown implementation='css'>
						<Drawer
							classes={{
								paper: classes.drawerPaper,
							}}
							variant='permanent'
							open
						>
							{drawer}
						</Drawer>
					</Hidden>
				</nav>
				<main className={classes.content}>
					<div className={classes.toolbar} />

					<Switch>
						<Route path='/profile' exact component={Profile} />
					</Switch>
				</main>
			</div>
		</Router>
	);
};

export default MainLayout;
