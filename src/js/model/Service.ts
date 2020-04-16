export interface Service {
	id: string;
	cpus: number;
	mem: number;
	instances: number;
	urls: Array<string>;
	labels: {
		ONYXIA_NAME: string;
		ONYXIA_SUBTITLE: string;
		ONYXIA_LOGO?: string;
		ONYXIA_PRIVATE_ENDPOINT?: string;
	};
	logo?: string;
	name: string;
	subtitle?: string;
	startedAt?: number;
	status: string;
}

export enum ServiceStatus {
	Deploying = 'DEPLOYING',
	Running = 'RUNNING',
	Stopped = 'STOPPED',
}
