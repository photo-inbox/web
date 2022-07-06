import { Feature } from '../app/shared';

export const environment = {
  production: true,
  apiPrefix: 'api',
  features: {
    items: false,
  } as Record<Feature, boolean>,
};
