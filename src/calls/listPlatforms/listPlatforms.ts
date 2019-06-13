import { ServiceCall } from 'marvelous';

import { IListPlatformsHandler } from '../../.auto';
import { getData } from '../../DaemonData';
import { ListPlatformsSchema } from './listPlatforms.schema';

export class ListPlatformsCall extends ServiceCall {
  handler: IListPlatformsHandler = async () => {
    const data = getData();

    return {
      platforms: data.platforms.toArray().map(p => ({
        name: p.name
      }))
    };
  };

  schema = ListPlatformsSchema;
}
