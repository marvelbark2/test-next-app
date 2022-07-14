const Adapter = require('@next-boost/redis-cache').Adapter

/** @type {import('@next-boost/next-boost/dist/types').HandlerConfig} */
module.exports = {
  rules: [],
  cacheAdapter: new Adapter({
    uri: 'edis://:W6UgfOt3bhRHmTx8b1a1JKBCYY8yJ71g@redis-18790.c55.eu-central-1-1.ec2.cloud.redislabs.com:18790/1',
    ttl: 60,
    tbd: 3600,
  }),
}