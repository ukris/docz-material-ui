import { initials, trim } from './string'


test('initials work', () => {
    expect(initials('Joe smith')).toEqual('JS')
})
