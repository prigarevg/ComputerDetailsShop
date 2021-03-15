import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../../components';
import { addComponentCart } from '../Cart/cartSlice';

import { setCategory, setSortBy } from '../../features/Filters/filtersSlice';
import { fetchPizzas } from '../../features/Details/detailsSlice';


const categoryNames = ['Все', 'Процессоры', 'Видеокарты', 'Материнские платы', 'ОЗУ', 'HDD/SSD'];
const sortIems = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Details() {
  const dispatch = useDispatch();
  const items = useSelector(({ details }) => details.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ details }) => details.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  console.log(items)

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch(addComponentCart(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortIems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все комплектующие</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                key={obj.id}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Details;
