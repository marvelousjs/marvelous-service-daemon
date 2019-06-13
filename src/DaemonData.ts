import { loadData } from 'jazzdb';

import { PlatformModel } from './models';

export interface IData {
  platforms: PlatformModel;
}

let data: IData = {
  platforms: new PlatformModel()
};

export function getData() {
  return data;
}

export async function initData() {
  data = await loadData({
    path: `./data/${process.env.NODE_ENV}`,
    models: {
      platforms: PlatformModel
    }
  });
  return data;
}

export async function saveData() {
  await data.platforms.save();
  return data;
}
