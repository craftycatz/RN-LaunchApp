import { env } from '../env';
import { LaunchResults } from '../types/Launch';

export const fetchLaunches = async () => {
  const res = await fetch(`${env.API_URL}/launches/upcoming/?limit=1`);
  const data = (await res.json()) as Promise<LaunchResults>;
  return data;
};
