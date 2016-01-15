import test from 'ava'
import saikou, { meme } from './'

test('main', t => {
	t.is(typeof saikou(), 'string')
	t.true(Array.isArray(meme))
})
