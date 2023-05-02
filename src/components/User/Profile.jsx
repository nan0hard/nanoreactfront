import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";

import "./Profile.css";

const Profile = () => {
	const { user, loading, isAuthenticated, error } = useSelector(
		(state) => state.user
	);
	const navigate = useNavigate();

	useEffect(() => {
		if (user === null) {
			return redirect("/signin");
		}

		if (!isAuthenticated && error) {
			toast.info(error);
			navigate("/signin");
		}
	}, [isAuthenticated, navigate, error, user]);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					<MetaData title={`${user.name}'s Profile`} />
					<div className="profileContainer">
						<div>
							<h1>My Profile</h1>
							<img src={user?.avatar?.url} alt={user.name} />
							<Link to="/profile/update">Edit Profile</Link>
						</div>

						<div>
							<div>
								<h4>Full Name</h4>
								<p>{user.name}</p>
							</div>
							<div>
								<h4>Email</h4>
								<p>{user.email}</p>
							</div>
							<div>
								<h4>Joined On</h4>
								<p>{String(user.createdAt).substr(0, 10)}</p>
							</div>

							<div>
								<Link to="/myorders">My Orders</Link>
								<Link to="/password/update">Change Password</Link>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Profile;
