

import Mainbar from "./Mainbar";
import Sidebar from "./Sidebar";


const SimpleLayout = () => {

    return (
        <div className="container__app">
            <div className="container__sidebar">
                <Sidebar />
            </div>
            <div className="container__mainbar">
                <Mainbar />
            </div>
        </div>
    )

}



export default SimpleLayout;