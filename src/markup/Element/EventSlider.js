import React, { useEffect, useState, useMemo } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import BlogSkeleton from "../Pages/Blog/BlogSkeleton";

const EventSlider = () => {
	const PageSize = 12;
	const [blogs, setBlogs] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [isLoading, setIsLoading] = useState(true);

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return blogs.slice(firstPageIndex, lastPageIndex);
	}, [blogs, currentPage]);

	const fetchBlogs = async () => {
		setIsLoading(true);
		const query = collection(db, "blogs");
		const docs = await getDocs(query);
		const blogList = [];
		docs.forEach((doc) => {
			const blogObj = {
				id: doc.id,
				data: doc.data(),
			};
			blogList.push(blogObj);
		});
		console.log(blogList);
		setBlogs(blogList);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchBlogs();
	}, []);

	var settings = {
		arrows: true,
		slidesToShow: 3,
		speed: 3000,
		navSpeed: 3000,
		infinite: true,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	};

	return (
		isLoading
			? [1, 2, 3].map((i) => {
				return <div className="item p-3" key={i}>
					<BlogSkeleton key={i} />
				</div>;
			})
			: <div className="row">
				{
					currentTableData.map((data, index) => (
						<div className="col" key={index}>
							<div className="dlab-card blog-grid">
								<div className="dlab-media" style={{ height: '200px' }}><img src={data.data.blogimage} alt="" /></div>
								<div className="dlab-info">
									<div className="dlab-meta">
										<ul>
											<li className="post-date"><i className="las la-calendar-alt"></i><span>{data.data.timeformated}</span></li>
											<li className="post-user"><i className="las la-user"></i>By <Link to={"#"}>{data.data.author}</Link></li>
										</ul>
									</div>
									<h3 className="dlab-title">
										<Link to={{
											pathname: "/blog-details/" + data.id,
											state: data.data,
										}}>{data.data.title}</Link>
									</h3>
									<p style={{ height: '70px' }}>{data.data.contentSort}</p>
									<div className="dlab-readmore">
										<Link to={{
											pathname: "/blog-details/" + data.id,
											state: data.data,
										}} className="readmore"><i className="las la-plus"></i> Read More</Link>
									</div>
								</div>
							</div>
						</div>
					))
				}
			</div>
	);
};

export default EventSlider;
