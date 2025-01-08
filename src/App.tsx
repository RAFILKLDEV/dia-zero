import { createContext, useState } from "react";
import { mockTicketsArray } from "./mock";
import { TicketType } from "./components/Ticket";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Tickets from "./components/Tickets";
import Container from "./components/Container";

// eslint-disable-next-line react-refresh/only-export-components
export const context = createContext<{
	ticketIndex: number;
	setTicketIndex: React.Dispatch<React.SetStateAction<number>>;
	toggleModal: boolean;
	setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
	data: TicketType[];
	setData: React.Dispatch<React.SetStateAction<TicketType[]>>;
}>({
	ticketIndex: 0,
	setTicketIndex: () => {},
	toggleModal: false,
	setToggleModal: () => {},
	data: [],
	setData: () => [],
});
function App() {
	const [data, setData] = useState<TicketType[]>(mockTicketsArray);
	const [ticketIndex, setTicketIndex] = useState(0);
	const [toggleModal, setToggleModal] = useState(false);

	return (
		<>
			<context.Provider value={{ ticketIndex, setTicketIndex, toggleModal, setToggleModal, data, setData }}>
				{toggleModal && <Modal />}
				<Container>
					<Header />
					<Tickets />
				</Container>
			</context.Provider>
		</>
	);
}

export default App;
