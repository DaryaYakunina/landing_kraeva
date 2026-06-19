import type { IServicesDescriptionPage } from '../../components/services/ServicesDescriptionPage.tsx';
import { ServicesDescriptionPage } from '../../components/services/ServicesDescriptionPage.tsx';

function DevelopmentService(props:IServicesDescriptionPage) {
    return (
        <ServicesDescriptionPage {...props} />
    )
}

export default DevelopmentService;