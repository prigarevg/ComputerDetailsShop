import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { accountReducer } from '../features/account/accountSlice';
import {cartReducer} from '../features/Cart/cartSlice';
import {filtersReducer} from '../features/Filters/filtersSlice';
import {detailsReducer} from '../features/Details/detailsSlice';

export const store = configureStore({
  reducer: {
    account: accountReducer,
    cart: cartReducer,
    filters: filtersReducer,
    details: detailsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
