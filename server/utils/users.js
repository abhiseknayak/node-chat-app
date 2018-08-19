class Users{
    constructor(){
        this.users=[];
    }

    addUser(id,name,room){
        var user={id,name,room};
        this.users.push(user);
        return user;
    }

    removeUser(id){

       var requiredUser=this.users.find((user)=>{
           return user.id===id;
       });

       if(requiredUser)
       {
            this.users=this.users.filter((user)=>{
                return user.id!==id;
            });
        
       }
       return requiredUser;

    }

    getUser(id){
        var user=this.users.filter((user)=>{
            return user.id===id;
        });

        if(user.length===1)
            return user[0];
        else
            return undefined;

    }

    getUserList(room){
        var users=this.users.filter((user)=>{
            return user.room===room;
        });

        var namesArray=users.map((user)=>{
            return user.name
        });

        return namesArray;
    }
};

module.exports={Users};