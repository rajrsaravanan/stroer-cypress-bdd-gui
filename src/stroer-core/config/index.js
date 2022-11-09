import productionConfig from '../config/production';
import stagingConfig from '../config/staging';

export const getCustomConfig = (configType = Cypress.env('ENVIRONMENT')) => {
  switch (configType) {
    case 'production':
      return productionConfig;

    case 'staging':
    default:
      return stagingConfig;
  }
};

export const getTestEnvConfig = (configType = Cypress.env('ENVIRONMENT')) => {
  switch (configType) {
    case 'production':
      return 'prod';

    case 'staging':
    default:
      return 'stage';
  }
};
