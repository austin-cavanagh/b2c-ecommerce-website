import { setEnvVariables } from './functions/setEnvVariables';

export async function register() {
  try {
    await setEnvVariables();
  } catch (error) {
    console.error('instrumentation.ts:', error);
  }
}
