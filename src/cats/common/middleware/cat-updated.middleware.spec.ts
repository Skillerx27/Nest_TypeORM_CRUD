import { CatUpdatedMiddleware } from './cat-updated.middleware';

describe('CatUpdatedMiddleware', () => {
  it('should be defined', () => {
    expect(new CatUpdatedMiddleware()).toBeDefined();
  });
});
