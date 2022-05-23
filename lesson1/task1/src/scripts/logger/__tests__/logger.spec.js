import { screateLogger } from '../logger';

it('should return stoped logs', () => {
  const logger = screateLogger('user login');
  expect(logger.getLogs()).toEqual([]);
});

it('should save log message', () => {
  const logger = screateLogger('user login');
  logger.log('login success');
  expect(logger.getLogs()).toEqual(['log - user login - login success']);
});

it('should save error', () => {
  const logger = screateLogger('user login');
  logger.error('login failed');
  expect(logger.getLogs()).toEqual(['error - user login - login failed']);
});
