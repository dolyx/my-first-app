import app from './config-firebase';
import { getAnalytics } from 'firebase/analytics';

const analytics = getAnalytics(app);

export default analytics;