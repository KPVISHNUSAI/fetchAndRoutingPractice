import './index.css'
import Loader from 'react-loader-spinner'
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home

// When the Home Route is opened,
// it should initially consist of an HTML
// container element with data-testid attribute
// value as "loader"
