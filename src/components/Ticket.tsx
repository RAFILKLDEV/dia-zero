import { useContext } from "react";
import { context } from "../App";
import moment from "moment";

export interface TicketType {
	id?: string;
	title?: string;
	creator?: string;
	status?: string;
	date?: Date;
	description?: string;
	comentaries?: { author?: string; comment?: string }[];
}

export default function Ticket({ Ticket }: { Ticket: TicketType }) {
	const { data, setData, setTicketIndex, setToggleModal } = useContext(context);

	return (
		<div className="flex flex-col bg-gray-100 rounded-md p-2">
			<div className="text-red-800 font-semibold text-sm opacity-80">{Ticket.id}</div>
			<div className="flex gap-1 font-semibold text-sm opacity-70">{moment(Ticket.date).format("DD/MM/YYYY HH:mm")}h</div>
			<div
				className="font-bold cursor-pointer w-min whitespace-nowrap xs:whitespace-normal xs:w-full"
				onClick={() => {
					const index = data.findIndex((ticket) => ticket.id === Ticket.id);
					setTicketIndex(index);
					setToggleModal(true);
					document.body.style.overflow = "hidden";
				}}
			>
				{Ticket.title}
			</div>
			<div className="">{Ticket.description}</div>
			<div className="flex items-center">
				<div>Status:</div>
				<select
					className="appearance-none bg-inherit px-1 hover:bg-gray-200 cursor-pointer"
					value={Ticket.status}
					onChange={(e) => {
						const index = data.findIndex((ticket) => ticket.id === Ticket.id);
						const newData = [...data];
						const ticket = { ...Ticket, status: e.target.value };
						newData[index] = ticket;
						setData(newData);
					}}
				>
					<option value="Aberto">Aberto</option>
					<option value="Em Andamento">Em Andamento</option>
					<option value="Concluído">Concluído</option>
				</select>
			</div>
		</div>
	);
}
