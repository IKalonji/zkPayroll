export class ClientDto {
    id: string;
    name: string;
    email: string;
    number: string;
    date: Date;
};

export class EmployeeDto {
    id: string;
    firstName: string;
    lastName: string;
    walletAddress: string;
};

export enum ProjectStatus {
    Completed,
    InProgress,
    Pending
};

export class ProjectDto {
    id: string;
    clientId: string;
    title: string;
    description: string;
    rate: number;
    startDate: Date;
    endDate: Date;
    status: ProjectStatus;
};

export class AssignmentDto {
    id: string;
    employeeId: string;
    projectId: string;
    date: string;
};

export class TimesheetDto {
    id: string;
    employeeId: string;
    projectId: string;
    hours: number;
    isInvoiced: boolean;
};

export class InvoiceDto {
    id: string;
    employeeId: string;
    description: string;
    timesheetIds: string[];
    isPaid: boolean;
}

export class PaymentDto {
    id: string;
    invoiceId: string;
    amount: string;
};

export class ContractDto {
    clients: ClientDto[] = [
        { id: '0001', name: 'Mothupi', email: 'mike@email.com', number: '12345677890', date: new Date() }
    ];
    employees: EmployeeDto[] = [
        { id: 'id0001', firstName: 'Hello Name', lastName: 'Hi Last Name', walletAddress: 'my wallet'}
    ];
    projects: ProjectDto[] = [
        { id: 'id', title: 'My Proj', clientId: '0001', description: 'The root node of the XML data has an xmlns attribute that sets the XML namespace to an empty string. This is a requirement for applying XPath queries to a data island that is inline within the XAML page. In this inline case, the XAML, and thus the data island, inherits the System.Windows namespace. Because of this, you need to set the namespace blank to keep XPath queries from being qualified by the System.Windows namespace, which would misdirect the queries.', rate: 274, startDate: new Date(), endDate: new Date(), status: ProjectStatus.InProgress }
    ];
    assignments: AssignmentDto[];
    timesheets: TimesheetDto[];
    invoices: InvoiceDto[];
    payments: PaymentDto[];
}