export class ClientDto {
    id: string;
    name: string;
    email: string;
    number: string;
    date: Date;
}

export class EmployeeDto {
    id: string;
    firstName: string;
    lastName: string;
    walletAddress: string;
}

export enum ProjectStatus {
    Completed,
    InProgress,
    Pending
}

export class ProjectDto {
    id: string;
    clientId: string;
    title: string;
    description: string;
    rate: number;
    startDate: Date;
    endDate: Date;
    status: ProjectStatus;
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
    description: string;
    timesheetIds: string[];
    isPaid: boolean;
}

export class PaymentDto {
    id: string;
    invoiceId: string;
    amount: string;
}