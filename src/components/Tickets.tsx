import { useContext, useState } from "react";
import Ticket from "./Ticket";
import { context } from "../App";

export default function Tickets() {
	const [filter, setFilter] = useState({ status: "Todos" });
	const { data } = useContext(context);

	function filterTickets() {
		const filteredTickets = data.filter((ticket) => filter.status === "Todos" || filter.status === ticket.status);
		return filteredTickets;
	}

	return (
		<div className="bg-darkBlue flex flex-col gap-5 rounded-md rounded-t-none p-8 md:p-4">
			<div className="flex justify-between">
				<div className="font-bold text-2xl text-white ">Tickets</div>
				<select
					className="text-center rounded-md"
					onChange={(e) => {
						setFilter({ status: e.target.value });
					}}
				>
					<option value="Todos">Status</option>
					<option value="Aberto">Aberto</option>
					<option value="Em Andamento">Em Andamento</option>
					<option value="Concluído">Concluído</option>
				</select>
			</div>

			{filterTickets().map((ticket) => (
				<Ticket
					key={ticket.id}
					Ticket={ticket}
				/>
			))}
		</div>
	);
}
