import { Route, Routes } from 'react-router-dom';
import { Home, Cart, FoodCard } from 'pages/index';
import { MainLayout } from 'layout';
import { NotFoundBlock } from 'components/NotFoundBlock';

import './scss/app.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<FoodCard />} />
        <Route path="*" element={<NotFoundBlock />} />
      </Route>
    </Routes>
  );
}

export default App;
