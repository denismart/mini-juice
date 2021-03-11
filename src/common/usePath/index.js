import { useLocation } from 'react-router';

/**
 * Хук для получения pathname из location
 * @return {string}
 */
const usePath = () => {
    const location = useLocation();

    return location.pathname.replace('/', '');
};

export default usePath;
