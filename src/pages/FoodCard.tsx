import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function FoodCard() {
  const [foodData, setFoodData] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  async function fetchData() {
    try {
      const { data } = await axios.get(`https://63030cc49eb72a839d77f1d2.mockapi.io/foodapi/${id}`);
      setFoodData(data);
    } catch (error) {
      alert(`Произошла ошибка при получении данных`);
      navigate('/');
    }
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  if (!foodData) {
    return <h1>Загрузка...</h1>;
  }

  return (
    <div className="foodCard">
      <img src={foodData.imageUrl} alt="foodCard" />
      <div className="foodCard__info">
        <h2>{foodData.title}</h2>
        <p>Цена: {foodData.price} ₽</p>
      </div>
    </div>
  );
}
