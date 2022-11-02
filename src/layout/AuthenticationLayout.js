import { Outlet } from 'react-router';


const AuthenticationLayout = () => {

    return (
    <div className="container__app">
        <div className="container__full">
            <Outlet />
        </div>
    </div>

    )

}



export default AuthenticationLayout;