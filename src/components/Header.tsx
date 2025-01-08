import moment from "moment";
import { useState } from "react";

export default function Header() {
	const [time, setTime] = useState(new Date());

	function refreshTickets() {
		setTime(new Date());
	}

	return (
		<>
			<div
				className="bg-blue text-white font-semibold rounded-md rounded-b-none p-8 flex items-stretch justify-between flex-wrap
			md:flex-col md:gap-4 xs:p-4 md:items-center"
			>
				<div className="md:flex md:flex-col md:items-center md:text-center">
					<div>Bem vindo, Desenvolvedor</div>
					<div>Tickets Atualizados em {moment(time).format("DD/MM/YYYY HH:mm")}h</div>
				</div>
				<div className="flex gap-5 xs:flex-col">
					<button
						className="border-2 py-1 px-2 bg-blue border-white"
						type="button"
					>
						Novo Ticket
					</button>
					<button
						className="border-2 py-1 px-2 bg-blue border-white"
						type="button"
					>
						Atualizar Tickets
					</button>

					<button
						className="border-2 py-1 px-2 bg-blue border-white"
						type="button"
						onClick={() => refreshTickets()}
					>
						Sair
					</button>
				</div>
			</div>
		</>
	);
}
