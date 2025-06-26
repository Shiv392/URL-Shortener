import { BrowserRouter } from 'react-router-dom'
import './App.css';
import AppRoutes from './routes/index.tsx';
import { NotificationProvider } from './features/common/context/notificationcontext.tsx';
import Notification from './features/common/components/notification/notification.tsx';
import { LoaderProvider } from './features/common/context/loadercontext.tsx';
import Loader from './features/common/components/loader/loader.tsx';

function App() {
  return (
   <NotificationProvider>
    <LoaderProvider>
    <>
   <AppRoutes />
   <Notification />
   <Loader />
   </>
    </LoaderProvider>
   </NotificationProvider>
  )
}

export default App
