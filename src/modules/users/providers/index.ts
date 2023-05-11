import { container } from 'tsyringe';
import BcryptHashProvider from './HashProvider/fakes/implementations/BcryptHashProvider';
import { IHashProvider } from './HashProvider/fakes/models/IHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BcryptHashProvider);
