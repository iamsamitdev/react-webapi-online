const AuthLayout = ({children}) => {
    return (
        <>
        {/* CSS */}
        <link rel="stylesheet" href="assets/css/app.css"/>

            <div className="bg-info">
                <div className="d-flex flex-column align-items-center justify-content-center vh-100">
                    {children}
                </div>
            </div>

        {/* JS */}
        <script src="assets/js/app.js"></script>
        </>
    )
}

export default AuthLayout
