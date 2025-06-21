import { BrowserRouter } from 'react-router-dom'
import './App.css';
import AppRoutes from './routes/index.tsx';
import { NotificationProvider } from './features/common/context/notificationcontext.tsx';
import Notification from './features/common/components/notification/notification.tsx';

function App() {
  return (
   <NotificationProvider>
    <>
   <AppRoutes />
   <Notification />
   </>
   </NotificationProvider>
  )
}

export default App
