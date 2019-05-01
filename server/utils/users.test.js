const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Ronaldo',
      room: 'Players'
    }, {
      id: '2',
      name: 'Zidane',
      room: 'Managers'
    }, {
      id: '3',
      name: 'Messi',
      room: 'Players'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Utkarsha',
      room: 'My Room'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '99';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names of players', () => {
    var userList = users.getUserList('Players');

    expect(userList).toEqual(['Ronaldo', 'Messi']);
  });

  it('should return names of managers', () => {
    var userList = users.getUserList('Managers');

    expect(userList).toEqual(['Zidane']);
  });
});
