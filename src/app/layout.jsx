import RootClientLayout from "@/components/utils/RootClientLayout";
import "normalize.css";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/globals.scss";

export const metadata = {
	title: {
		template: "%s | Ebenezer",
		default: "Ebenezer",
	},
	description:
		"Ebenezer Tseh's portfolio showcases proficiency in cloud computing, Artificial Intelligence, Machine learning, full-stack development, and more. Explore my projects and learn more about me.",
	keywords: "Software Engineering Internship, Cloud Computing, Artificial Intelligence, Machine Learning, Full-Stack Development, React, Python, Java, Kubernetes, DevOps, Data Analytics, SQL, Cybersecurity, AWS, Azure, Next.js, Tailwind CSS, Web Development, Programming Languages, Swift,  Linux, iOS Development, Agile Methodologies, Git, Continuous Integration, Docker, TensorFlow, JavaScript, Front-End Development, Back-End Development.",
	author: "Ebenezer Tseh",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<RootClientLayout>
				<body className="relative">
					{children}
					<div className="portal-root"></div>
				</body>
			</RootClientLayout>
		</html>
	);
}

