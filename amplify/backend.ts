import { defineBackend } from '@aws-amplify/backend';
import { data } from './data/resource';

/**
 * @see https://docs.amplify.aws/gen2/build-a-backend/
 */
export const backend = defineBackend({
  data,
});
