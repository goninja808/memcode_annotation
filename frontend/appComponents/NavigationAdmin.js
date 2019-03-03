import { NavLink } from 'react-router-dom';

class NavigationAdmin extends React.Component {
  render = () =>
    <nav className="navigation-admin">
      <NavLink to="/admin/notifications">Notifications</NavLink>
      <NavLink to="/admin/eeelse">Something else</NavLink>
    </nav>
}

export default NavigationAdmin;
