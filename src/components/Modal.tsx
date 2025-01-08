import moment from "moment";
import { useContext, useState } from "react";
import { context } from "../App";

export default function Modal() {
	const { data, setData, ticketIndex, setToggleModal } = useContext(context);
	const selectedTicket = data[ticketIndex];
	const [comentary, setComentary] = useState("");

	return (
		<div
			className="fixed bg-black bg-opacity-50 z-10 inset-0"
			aria-hidden="true"
			onClick={(e) => {
				if (e.target === e.currentTarget) {
					setToggleModal(false);
					document.body.style.overflow = "auto";
				}
			}}
		>
			<div
				className="fixed bg-black bg-opacity-20 inset-0 flex items-center justify-center z-20 md:p-2 md:items-start"
				onClick={() => {
					setToggleModal(false);
					document.body.style.overflow = "auto";
				}}
			>
				<div
					className="bg-blue border-darkBlue text-white border-8 rounded-md p-5 px-6 w-[500px] z-20 min-h-auto max-h-[80vh]
					 overflow-y-auto relative md:p-3 md:max-h-[90vh]"
					onClick={(e) => e.stopPropagation()} // Evita que o clique no conteúdo do modal feche o modal
				>
					<div className="flex gap-1">
						<div className="font-bold">Id:</div>
						<div>{selectedTicket?.id}</div>
					</div>
					<div className="flex gap-1">
						<div className="font-bold">Título:</div>
						<div>{selectedTicket?.title}</div>
					</div>
					<div className="flex gap-1">
						<div className="font-bold">Criador:</div>
						<div>{selectedTicket?.creator}</div>
					</div>
					<div className="flex gap-1">
						<div className="font-bold">Criado Em:</div>
						<div>{moment(selectedTicket?.date).format("DD/MM/YYYY HH:mm")}h</div>
					</div>
					<div className="flex items-center">
						<div className="font-bold">Status:</div>
						<select
							className="appearance-none bg-inherit px-1 hover:bg-slate-200 cursor-pointer"
							value={selectedTicket?.status}
							onChange={(e) => {
								const index = data.findIndex((ticket) => ticket.id === selectedTicket?.id);
								const newData = [...data];
								const ticket = { ...selectedTicket, status: e.target.value };
								newData[index] = ticket;
								setData(newData);
							}}
						>
							<option value="Aberto">Aberto</option>
							<option value="Em Andamento">Em Andamento</option>
							<option value="Concluído">Concluído</option>
						</select>
					</div>
					<div className="flex gap-1 flex-col">
						<div className="font-bold w-[100px]">Descrição:</div>
						{selectedTicket?.description}
					</div>
					<div className="flex justify-start flex-col items-baseline gap-2 py-4">
						<textarea
							className="border-[1px] text-black text-sm p-2 border-gray-400 w-full h-[80px]"
							value={comentary}
							onChange={(e) => setComentary(e.target.value)}
						/>
						<button
							className="border-2 py-1 px-2 font-semibold"
							type="button"
							onClick={() => {
								if (!comentary) return;
								const index = data.findIndex((ticket) => ticket.id === selectedTicket?.id);
								const newData = [...data];
								const newComentary = { author: "Desenvolvedor", comment: comentary };
								newData[index].comentaries?.push(newComentary);
								setData(newData);
								setComentary("");
							}}
						>
							Comentar
						</button>
					</div>
					<div className="flex flex-col flex-wrap">
						{selectedTicket?.comentaries && selectedTicket?.comentaries.length > 0 && <div className="font-bold mb-2">Comentários:</div>}
						{selectedTicket?.comentaries?.map(({ author, comment }, index) => (
							<div
								key={index}
								className="flex mb-2 gap-3 items-start bg-gray-50 p-3 rounded-md shadow-sm"
							>
								<img
									src="/icons/user.avif"
									alt={`Imagem de perfil do autor ${author || "desconhecido"}`}
									height={50}
									width={50}
									className="border-[1px] rounded-full"
								/>
								<div className="flex flex-col w-full">
									<div className="flex gap-1 items-center">
										<div className="font-bold text-gray-700">Autor:</div>
										<div className="text-gray-800">{author}</div>
									</div>
									<div className="text-gray-700 rounded-md mt-1">{comment}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
