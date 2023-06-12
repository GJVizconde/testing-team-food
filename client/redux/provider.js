'use client';

import React from 'react';

import { Provider } from 'react-redux';
import { store } from './store';

// interface Props {children: React.ReactNode}

export function ReduxProvider({ children }) {
	return <Provider store={store}>{children}</Provider>;
}
