import Header from "../../../Layouts/Header";
import Sidebar from "../../../Layouts/Sidebar";
import ProductsView from "./view";
import '../../Dashboard.css';
const AdminProducts = () => {
    return (
        <div className="dashboard">
            <Header />
            <div className="dashboard-body">
                <Sidebar />
                <ProductsView />
            </div>
        </div>
    )
}

export default AdminProducts;