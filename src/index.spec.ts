import client from './index'

describe('CommunityDiscordBot', () => {
    it('should have exported client from index', () => {
        expect(client).toBeDefined();
    })
})