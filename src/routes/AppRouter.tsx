import { Route, Routes} from "react-router-dom";
import { ROUTES } from "./routes.ts";
import Home from "../pages/home/Home.tsx";
import MainLayout from "../components/MainLayout.tsx";
import ConsultationService from "../pages/consultationService/ConsultationService.tsx";
import DevelopmentService from "../pages/developmentService/developmentService.tsx";
import EquipmentService from "../pages/equipmentService/EquipmentService.tsx";
import SupervisionService from "../pages/supervisionService/SupervisionService.tsx";
import { consultationServiceData, equipmentServiceData, developmentServiceData, supervisionServiceData} from "../Data.ts";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path={ROUTES.CONSULTATION} element={<ConsultationService {...consultationServiceData} /> }/>
                <Route path={ROUTES.EQUIPMENT} element={<EquipmentService {...equipmentServiceData}/> }/>
                <Route path={ROUTES.DEVELOPMENT} element={<DevelopmentService {...developmentServiceData}/> }/>
                <Route path={ROUTES.SUPERVISION} element={<SupervisionService {...supervisionServiceData}/> }/>
            </Route>
        </Routes>
    )
}

export default AppRouter;