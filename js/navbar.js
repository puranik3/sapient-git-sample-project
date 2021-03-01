class Navbar {
    navigationMobile = document.querySelector( '.nav-mobile' ) ;
    btnMenu = document.querySelector( '.btn-menu' );

    onClickBtnMenu = () => {
        this.navigationMobile.classList.toggle( 'hide' );
    }

    addListeners() {
        this.btnMenu.addEventListener( 'click', this.onClickBtnMenu );
    }

    init() {
        this.addListeners();
    }
}

const navbar = new Navbar();
navbar.init();

export default Navbar;