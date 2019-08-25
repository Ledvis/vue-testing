import getters from '@/store/getters'

describe('getters', () => {
  it('should return notifications from state', () => {
    const state = {
      notifications: [{ id: 1, title: 'hello'}, {id: 2, title: 'world'}]
    }
    
    expect(getters.notifications(state).length).toEqual(2);
  });
});