import { settings as defaultSettings } from './default';
import { settings as productionSettings } from './production';
import { settings as stagingSettings } from './staging';
import { settings as testSettings } from './test';

import { ISettings } from '../interfaces';

function getSettings(): ISettings {
  let overrideSettings: ISettings = {};
  switch (process.env.NODE_ENV) {
    case 'production': {
      overrideSettings = productionSettings;
      break;
    }
    case 'staging': {
      overrideSettings = stagingSettings;
      break;
    }
    case 'test': {
      overrideSettings = testSettings;
      break;
    }
  }
  return {
    ...defaultSettings,
    ...overrideSettings
  };
}

export const settings = getSettings();
