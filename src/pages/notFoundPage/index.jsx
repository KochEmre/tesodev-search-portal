import { Fragment, useEffect } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';

const NotFoundPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      setTimeout(() => {
          navigate(-1);
      }, 1000);
    }, [navigate]);

    return (
        <Fragment>
            {`"${location.pathname}" path doesn't exist.`}
        </Fragment>
    )
}

export default NotFoundPage;