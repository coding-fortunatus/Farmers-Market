import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { server } from "../../server";

const AllEvents = () => {
	const [events, setEvents] = useState([]);
	useEffect(() => {
		axios
			.get(`${server}/event/admin-all-events`, { withCredentials: true })
			.then((res) => {
				setEvents(res.data.events);
			});
	}, []);

	const columns = [
		{ field: "id", headerName: "Product Id", minWidth: 120, flex: 0.6 },
		{
			field: "name",
			headerName: "Name",
			minWidth: 100,
			flex: 1.0,
		},
		{
			field: "price",
			headerName: "Price",
			minWidth: 80,
			flex: 0.5,
		},
		{
			field: "Stock",
			headerName: "Stock",
			type: "number",
			minWidth: 50,
			flex: 0.4,
		},

		{
			field: "sold",
			headerName: "Sold out",
			type: "number",
			minWidth: 70,
			flex: 0.4,
		},
		{
			field: "Preview",
			flex: 0.5,
			minWidth: 40,
			headerName: "",
			type: "number",
			sortable: false,
			renderCell: (params) => {
				return (
					<>
						<Link to={`/product/${params.id}?isEvent=true`}>
							<Button>
								<AiOutlineEye size={20} />
							</Button>
						</Link>
					</>
				);
			},
		},
	];

	const row = [];

	events &&
		events.forEach((item) => {
			row.push({
				id: item._id,
				name: item.name,
				price: "₦ " + item.discountPrice,
				Stock: item.stock,
				sold: item.sold_out,
			});
		});

	return (
		<div className="w-full mx-8 pt-1 mt-10 bg-white">
			<DataGrid
				rows={row}
				columns={columns}
				pageSize={10}
				disableSelectionOnClick
				autoHeight
			/>
		</div>
	);
};

export default AllEvents;
