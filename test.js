import test from 'ava'
import saikou, {meme, h} from './'

test('main', t => {
	t.is(typeof saikou(), 'string')
	t.true(Array.isArray(meme))
})

test('h', async t => {
	const res = await h()
	t.is(typeof res.hitokoto, 'string')
})
