import { EntityEnum } from '../enums/EntityEnum';
import { AbstractControl } from './AbstractControl';

export class DetailsControl extends AbstractControl {
  constructor() {
    super(EntityEnum.Details);
  }

  public getAll = (params: Object) => {
    return this.axios.get('/', { params });
  };
}
