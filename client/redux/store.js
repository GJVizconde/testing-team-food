import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query'; //!Para poder manejar las funciones asincronas
import { userApi } from './services/userApi';

export const store = configureStore({
	reducer: {
		counterReducer,
		[userApi.reducerPath]: userApi.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([userApi.middleware]), //Funcion que ejecuta datos asincronos que vienen del backend ( solicitudes de datos)
});

setupListeners(store.dispatch); //Propiedad para poder ejectuar las actions dentro del store

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch;
