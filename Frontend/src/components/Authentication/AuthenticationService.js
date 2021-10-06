class AuthenticationService {
    
    successfulLogin(userId, name, role, password){
        sessionStorage.setItem('authenticatedUserId', userId);
        sessionStorage.setItem('authenticatedUserName', name);
        sessionStorage.setItem('authenticatedUserRole', role);
    }

    logout(){
        sessionStorage.removeItem('authenticatedUserId');
        sessionStorage.removeItem('authenticatedUserName');
        sessionStorage.removeItem('authenticatedUserRole');
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUserId');
        if (user === null) return false;
        return true;
    }

    loggedUserId(){
        let id = sessionStorage.getItem('authenticatedUserId');
        if (id === null) return '';
        return id;
    }

    loggedUserName(){
        let name = sessionStorage.getItem('authenticatedUserName');
        if (name === null) return '';
        return name;
    }

    loggedUserRole() {
        let role = sessionStorage.getItem('authenticatedUserRole');
        if(role != null) return role;
        return null;
    }

}

 
export default new AuthenticationService();