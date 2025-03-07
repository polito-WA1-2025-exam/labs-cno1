class User{
    constructor(id, name, password){
        this.id = id;
        this.name = name;
        this.password = password;
    }
    print_info(){
        console.log(`[User] ${this.id} ${this.name}`);
    }
}