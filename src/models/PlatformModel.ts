import { IModel, Model, AttributeTypes as Types } from 'jazzdb';

export interface IPlatformModel extends IModel {
  name: string;
}

export class PlatformModel extends Model {
  name = 'platforms';
  attributes = {
    name: { required: true, type: Types.String }
  };

  async load(): Promise<PlatformModel> {
    return super.load();
  }
  async save(): Promise<PlatformModel> {
    return super.save();
  }
  create(data: IPlatformModel): IPlatformModel {
    return super.create(data);
  }
  delete(id: string): IPlatformModel {
    return super.delete(id);
  }
  get(id: string): IPlatformModel {
    return super.get(id);
  }
  toArray(): IPlatformModel[] {
    return super.toArray();
  }
  update(id: string, data: IPlatformModel): IPlatformModel {
    return super.update(id, data);
  }
}
