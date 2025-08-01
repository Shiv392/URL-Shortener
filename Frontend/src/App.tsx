import { BrowserRouter } from 'react-router-dom'
import './App.css';
import AppRoutes from './routes/index.tsx';
import { NotificationProvider } from './features/common/context/notificationcontext.tsx';
import Notification from './features/common/components/notification/notification.tsx';
import { LoaderProvider } from './features/common/context/loadercontext.tsx';
import Loader from './features/common/components/loader/loader.tsx';
import {CookiesProvider} from 'react-cookie';

function App() {
  return (
   <CookiesProvider>
    <NotificationProvider>
    <LoaderProvider>
   <BrowserRouter>
   <AppRoutes />
   </BrowserRouter>
   <Notification />
   <Loader />
    </LoaderProvider>
   </NotificationProvider>
   </CookiesProvider>
  )
}

export default App
