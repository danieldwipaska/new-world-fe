import { Copyright } from '../../components/Copyright';
import { Navbar } from '../../components/Navbar';
import { Jumbotron } from './Jumbotron';
import { List } from './List';

export const Project = () => {
  return (
    <div className="section">
      <Navbar />
      <Jumbotron />
      <List />
      <Copyright />
    </div>
  );
};
