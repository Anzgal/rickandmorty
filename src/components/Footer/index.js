function Footer(props) {

    return (
        <footer>
            <button disabled={!props.prevPage || props.isLoading ? true : false} className="footerbutton" onClick={props.decrementHandler}>
                Previous
            </button>

            <span>
                Current page: {props.currentPage}
            </span>

            <button disabled={!props.nextPage || props.isLoading ? true : false} className="footerbutton" onClick={props.incrementHandler}>
                Next
            </button>

        </footer>
    )

}

export default Footer;