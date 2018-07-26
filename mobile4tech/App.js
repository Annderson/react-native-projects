import JobList from './componet/JobList';
import {createStackNavigator} from 'react-navigation'
import JobDetails from './componet/JobDetails';

export default createStackNavigator (
  { JobList: JobList, JobDetails:  JobDetails},
  { initialRouteName: 'JobList' }
)