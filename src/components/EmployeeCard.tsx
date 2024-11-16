interface Employee {
	name: {
		first: string;

		last: string;
	};

	email: string;

	picture: {
		medium: string;
	};
}

interface EmployeeCardProps {
	employee: Employee;
}

function EmployeeCard({ employee }: EmployeeCardProps) {
	return (
		<div>
			<img src={employee.picture.medium} alt={employee.name.first} />
			<h2>
				{employee.name.first} {employee.name.last}
			</h2>
			<p>{employee.email}</p>
		</div>
	);
}

export default EmployeeCard;
