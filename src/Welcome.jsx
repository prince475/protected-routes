import { Outlet } from 'react-router-dom';

const Welcome = () => {
	return (
		<div>
			<h1 className="text-3xl text-center bg-red-300 text-green-800 p-10">
				Welcome
			</h1>
			<Outlet />
		</div>
	);
};

export default Welcome;
