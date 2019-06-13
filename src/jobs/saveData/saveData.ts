import { ServiceJob } from 'marvelous';
import { saveData } from '../..';

export class SaveDataJob extends ServiceJob {
  cron = '*/15 * * * *'; // every 15th minute
  // cron = '* * * * *'; // every minute
  handler = async () => {
    await saveData();
  };
}
