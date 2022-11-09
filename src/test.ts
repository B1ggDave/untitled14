import assert from 'assert'

assert(process.env.SOME_URL, 'SOME_URL not set')
assert(process.env.OTHER_URL, 'OTHER_URL is not set')
