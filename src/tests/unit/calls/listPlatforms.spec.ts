import * as assert from 'assert';

import { initData } from '../../../DaemonData';
import { listPlatformsHandler } from '../../../.auto';

describe('listPlatforms', () => {
  before(async () => {
    await initData();
  });

  it('should list all platforms in platform list', async () => {
    const result = await listPlatformsHandler();
    assert.strictEqual(result.platforms.length, 1);
  });
});
