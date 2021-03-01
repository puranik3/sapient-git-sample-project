function getFormattedDate( isoDateStr = '', format = 'std' ) {
    switch( format ) {
        case 'display':
            return new Date( isoDateStr ).toDateString().substr( 0, 18 );
        case 'std':
        default:
            return isoDateStr.substr( 0, 10 );
    }
}

export {
    getFormattedDate
};