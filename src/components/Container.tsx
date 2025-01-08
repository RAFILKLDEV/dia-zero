import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
	return <div className="bg-gray-200 min-h-screen p-5 xs:p-2">{children}</div>;
}
