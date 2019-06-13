import * as assert from 'assert';

import { DaemonService } from '../../..';
import { DaemonServiceClient } from '../../../.auto/clients/src/DaemonServiceClient';
import { initData } from '../../../DaemonData';

describe('listPlatforms', () => {
  const daemonService = new DaemonService();
  const client = new DaemonServiceClient({
    url: 'http://localhost:5555'
  });

  before(async () => {
    await initData();
    await daemonService.start();
  });

  after(async () => {
    await daemonService.stop();
  });

  it('should list all platforms in platform list', async () => {
    const list = await client.listPlatforms();

    assert.strictEqual(list.platforms.length, 1);
  });
});
