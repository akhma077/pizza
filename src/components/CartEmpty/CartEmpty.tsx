import { Link } from 'react-router-dom';

export function CartEmpty() {
  return (
    <div className="cart cart--empty">
      <h2>
        Корзина пустая <span> 😕</span>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на
        главную страницу.
      </p>
      <img
        src="https://react-pizza-v2.vercel.app/static/media/empty-cart.db905d1f4b063162f25b.png"
        alt=""
      />

      <Link to="/" className="button button--outline button--add go-back-btn">
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 13L1 6.93015L6.86175 1"
            stroke="#D3D3D3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span>Вернуться назад</span>
      </Link>
    </div>
  );
}
