import { Service, ValidationServiceError } from 'marvelous';

import { ListPlatformsCall } from './calls';

import { SaveDataJob } from './jobs';

export class DaemonService extends Service {
  calls = {
    listPlatforms: ListPlatformsCall
  };
  jobs = [SaveDataJob];
  knownErrors = [ValidationServiceError];
}
