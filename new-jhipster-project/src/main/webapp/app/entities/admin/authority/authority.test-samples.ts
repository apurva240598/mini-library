import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '656e06e7-915d-4e52-be05-b873074aeb2d',
};

export const sampleWithPartialData: IAuthority = {
  name: '42c5fad6-aae3-4126-b838-eb3e2a90df74',
};

export const sampleWithFullData: IAuthority = {
  name: 'b1f24b34-5270-438b-8016-8883f71f1fac',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
