import config from '@/config';
import { authService } from '../auth';
import { HttpAuthService } from './httpService';

class DashboardAPI {
	constructor(private http: HttpAuthService) {}

	getDashboard() {
		return this.http.get<any>('dashboard');
	}
}

const httpAuthService = new HttpAuthService(config.apiURL, authService);
export const dashboardAPI = new DashboardAPI(httpAuthService);
