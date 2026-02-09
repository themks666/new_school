import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Contact from "./page/contact";
import Programs from "./page/Programs";
import Academics from "./page/Academics";
import AboutUs from "./page/AboutUs";
import EarlyPrograms from "./page/EarlyPrograms"
import PrimaryEducation from "./page/PrimaryEducation";
import Secondary from "./page/Secondary";
import Sports from "./page/Sports";
import ArtsAndCreativity from "./page/Arts";
import Gallery from "./page/Gallary";


const App = () => {
	return (
		<div className="font-medium flex flex-col h-screen text-lg">
			<Navbar></Navbar>
			<div className="grow py-8">
				<Routes>
					<Route
						path="/new_school"
						element={<Home></Home>}></Route>
					<Route
						path="/new_school/contact"
						element={<Contact></Contact>}></Route>
					<Route
						path="/new_school/programs"
						element={<Programs></Programs>}></Route>
					<Route
						path="/new_school/academics"
						element={<Academics></Academics>}></Route>
					<Route
						path="/new_school/about"
						element={<AboutUs></AboutUs>}></Route>
					<Route
						path="/new_school/contact"
						element={<Contact></Contact>}></Route>
					<Route
						path="/new_school/early-year"
						element={<EarlyPrograms></EarlyPrograms>}></Route>
					<Route
						path="/new_school/primary-education"
						element={<PrimaryEducation></PrimaryEducation>}></Route>
					<Route
						path="/new_school/secondary-education"
						element={<Secondary></Secondary>}></Route>
					<Route
						path="/new_school/sports"
						element={<Sports></Sports>}></Route>
					<Route
						path="/new_school/middle-education"
						element={<Contact></Contact>}></Route>
					<Route
						path="/new_school/arts"
						element={<ArtsAndCreativity></ArtsAndCreativity>}></Route>
					<Route
						path="/new_school/gallery"
						element={<Gallery></Gallery>}></Route>
				</Routes>
			</div>
		</div>
	);
};

export default App;
