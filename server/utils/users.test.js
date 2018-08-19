const expect=require('expect');
const {Users}=require('./users');


describe('Users',()=>{
    var users;
    beforeEach(()=>{
        users= new Users;
        users.users=[
            {
                id:'1',
                name:'Mike',
                room:'Node'
            },
            {
                id:'2',
                name:'lily',
                room:'Node'
            },
            {
                id:'3',
                name:'Moo',
                room:'react'
            }
        ]

    });
    

    it('should add new users',()=>{
        var users=new Users();
        var user={
            id:123,
            name:"ghfj",
            room:"tech"

        }
        users.addUser(user.id,user.name,user.room);
        expect(users.users).toEqual([user]);

    });


    it('should return names for node room',()=>{

        var userList=users.getUserList('Node');
        expect(userList).toEqual(['Mike','lily']);
    });

    it('should return names for react room',()=>{

        var userList=users.getUserList('react');
        expect(userList).toEqual(['Moo']);
    });

    it("should remove a user",()=>{

        var id='2';
        var userRemoved=users.removeUser(id);
        expect(userRemoved).toEqual({
            id:'2',
            name:'lily',
            room:'Node'
        });

        expect(users.users).toEqual([
            {
                id:'1',
                name:'Mike',
                room:'Node'
            },
            {
                id:'3',
                name:'Moo',
                room:'react'
            }

        ]);

    });

    it("should not remove a user",()=>{

        var id='20';
        var userRemoved=users.removeUser(id);
        expect(userRemoved).toBe(undefined);
        expect(users.users).toEqual([
            {
                id:'1',
                name:'Mike',
                room:'Node'
            },
            {
                id:'2',
                name:'lily',
                room:'Node'
            },
            {
                id:'3',
                name:'Moo',
                room:'react'
            }
        ]);


    });

    it("should find user",()=>{

        var id='1';
        var neededUser=users.getUser(id);
        expect(neededUser).toEqual({
            id:'1',
            name:'Mike',
            room:'Node'
        });

    });

    it('should not find a user',()=>{
        var id='10';
        var neededUser=users.getUser(id);
        expect(neededUser).toBe(undefined);

    });
});