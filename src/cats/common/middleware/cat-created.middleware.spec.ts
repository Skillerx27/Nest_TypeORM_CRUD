import { CatCreatedMiddleware } from './cat-created.middleware';

describe('CatCreatedMiddleware', () => {
  it('should be defined', () => {
    expect(new CatCreatedMiddleware()).toBeDefined();
  });
});
