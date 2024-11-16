interface EmployeeCardProps {
	employee: {
		name: {
			first: string;

			last: string;
		};

		email: string;

		picture: {
			medium: string;
		};
	};
}

function EmployeeCard({ employee }: EmployeeCardProps) {
	return (
		<figure className="DisplayEmployee">
			<img src={employee.picture.medium} alt={employee.name.first} />

			<figcaption>
				{employee.name.first} {employee.name.last}
				{employee.email}
			</figcaption>
		</figure>
	);
}

export default EmployeeCard;
