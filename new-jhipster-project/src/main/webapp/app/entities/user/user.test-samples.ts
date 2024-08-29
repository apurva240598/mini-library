import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 28025,
  login: '2?n.@HwF8-\\I6X\\`5QXzX\\M3h',
};

export const sampleWithPartialData: IUser = {
  id: 8673,
  login: 'bSjd1F',
};

export const sampleWithFullData: IUser = {
  id: 1941,
  login: 'I8',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
