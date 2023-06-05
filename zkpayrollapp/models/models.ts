export class ClientDto {
    id: string;
    name: string;
    email: string;
    number: string;
    date: Date;
}

export class EmployeeDto {
    id: string;
    name: string;
    walletAddress: string;
}

export class ProjectDto {
    id: string;
    clientId: string;
    name: string;
    details: string;
    rate: number;
    startDate: Date;
    endDate: Date;
}

export class AssignmentDto {
    id: string;
    clientId: string;
    employeeId: string;
    projectId: string;
    date: string;
}

export class TimesheetDto {
    id: string;
    employeeId: string;
    projectId: string;
    hours: number;
    isInvoiced: boolean;
}

export class InvoiceDto {
    id: string;
    employeeId: string;
    details: string;
    timesheetIds: string[];
    isPaid: boolean;
}

export class PaymentDto {
    id: string;
    invoiceId: string;
    amount: string;
}