describe('Ensure Admin: Middleware tests', () => {
  let requestStub;
  let responseStub;
  let nextStub;

  let ensureAdmin;

  beforeEach(() => {
    jest.resetModules();
    requestStub = {
      header: () => 'token',
    };
    responseStub = {
      json: jest.fn(),
    };
    nextStub = jest.fn();
  });

  describe('Error occurred while waiting for response', () => {
    const mockErrorObject = new Error('Some Error');

    beforeEach(async () => {
      jest.mock('axios', () => ({
        get: () => {
          throw mockErrorObject;
        },
      }));
      // eslint-disable-next-line global-require
      ensureAdmin = require('./ensureAdmin');

      await ensureAdmin(requestStub, responseStub, nextStub);
    });

    it('should invoke the next handler once', () => {
      expect(nextStub).toBeCalledTimes(1);
    });

    it('should invoke the next handler with the err obj', () => {
      expect(nextStub).toBeCalledWith(mockErrorObject);
    });

    it('should mark error as trusted', () => {
      expect(mockErrorObject.isTrusted).toBe(true);
    });

    it('should assign 500 status code to the error', () => {
      expect(mockErrorObject.statusCode).toBe(500);
    });
  });

  describe('Success response received from verification request', () => {
    beforeEach(async () => {
      jest.mock('axios', () => ({
        get: jest.fn().mockResolvedValue({
          data: {
            status: 200,
          },
        }),
      }));
      // eslint-disable-next-line global-require
      ensureAdmin = require('./ensureAdmin');

      await ensureAdmin(requestStub, responseStub, nextStub);
    });

    it('should invoke the next handler', () => {
      expect(nextStub).toBeCalledTimes(1);
    });

    it('should pass no args to the next handler', () => {
      expect(nextStub).toBeCalledWith();
    });

    it('should not invoke the res.json method', () => {
      expect(responseStub.json).toBeCalledTimes(0);
    });
  });

  describe('Failure response received from verification request', () => {
    beforeEach(async () => {
      jest.mock('axios', () => ({
        get: jest.fn().mockResolvedValue({
          data: {
            status: 400,
          },
        }),
      }));
      // eslint-disable-next-line global-require
      ensureAdmin = require('./ensureAdmin');

      await ensureAdmin(requestStub, responseStub, nextStub);
    });

    it('should not invoke the next handler', () => {
      expect(nextStub).toBeCalledTimes(0);
    });

    it('should invoke the res.json method once', () => {
      expect(responseStub.json).toBeCalledTimes(1);
    });

    it('should send 4xx response to client', () => {
      expect(responseStub.json).toBeCalledWith({
        status: 401,
      });
    });
  });
});
