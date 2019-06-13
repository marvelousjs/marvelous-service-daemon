import { settings } from '..';

import { DaemonService, initData } from '..';

export const daemonService = new DaemonService({
  url: settings.url
});

(async () => {
  await initData();

  await daemonService.start(() =>
    console.log(`Started Daemon Service on ${daemonService.url}...`)
  );
})();
