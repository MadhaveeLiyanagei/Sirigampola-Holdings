class AuthenticationService {
    
    successfulLogin(supplierid, suppliername,supplieremail,supplierpassword){
        sessionStorage.setItem('authenticatedSupplierId', supplierid);
        sessionStorage.setItem('authenticatedSupplierName', suppliername);
        sessionStorage.setItem('authenticatedSupplierMail', supplieremail);
    }

    logout(){
        sessionStorage.removeItem('authenticatedSupplierId');
        sessionStorage.removeItem('authenticatedSupplierName');
        sessionStorage.removeItem('authenticatedSupplierMail');
    }

    isSupplierLoggedIn(){
        let supplier = sessionStorage.getItem('authenticatedSupplierId');
        if (supplier === null) return false;
        return true;
    }

    loggedSupplierId(){
        let supplierid = sessionStorage.getItem('authenticatedSupplierId');
        if (supplierid === null) return '';
        return supplierid;
    }

    loggedSupplierName(){
        let suppliername = sessionStorage.getItem('authenticatedSupplierName');
        if ( suppliername === null) return '';
        return suppliername;
    }

    loggedSupplierMail() {
        let supplieremail = sessionStorage.getItem('authenticatedSupplierMail');
        if( supplieremail!= null) return supplieremail;
        return null;
    }

}

 
export default new AuthenticationService();