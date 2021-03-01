class Navbar {
    navMobile = document.querySelector( '.nav-mobile' ) ;
    btnMenu = document.querySelector( '.btn-menu' );

    onClickBtnMenu = () => {
        this.navMobile.classList.toggle( 'display' );
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