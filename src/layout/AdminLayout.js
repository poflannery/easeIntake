

import AdminSidebar from "./AdminSidebar";
import Mainbar from "./Mainbar";


const AdminLayout = () => {

    return (
        <div className="container__app">
            <div className="container__sidebar">
                <AdminSidebar />
            </div>
            <div className="container__mainbar">
                <Mainbar />
            </div>
        </div>
    )

}



export default AdminLayout;