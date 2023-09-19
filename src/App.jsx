import { Route } from 'react-router-dom';
import { createRoutesFromElements } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Welcome from './Welcome';
import { RouterProvider } from 'react-router-dom';
import PrivateRoutes from './utils/PrivateRoutes';
import Products from './Products';
import Home from './Home';
import Login from './Login';

export default function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Welcome />}>
				<Route element={<PrivateRoutes />}>
					<Route path="products" element={<Products />} />
					<Route path="home" element={<Home />} />
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<h1>Page not found</h1>} />
			</Route>
		)
	);
	return <RouterProvider router={router} />;
}
