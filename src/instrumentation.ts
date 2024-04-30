import { setEnvVariables } from './functions/setEnvVariables';

export function register() {
  try {
    setEnvVariables();
  } catch (error) {
    console.error('instrumentation.ts:', error);
  }
}
