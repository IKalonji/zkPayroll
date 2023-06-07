import { Injectable } from "@angular/core";
import { AssignmentDto, ClientDto, ContractDto, EmployeeDto, InvoiceDto, PaymentDto, ProjectDto, TimesheetDto } from "models/models";


@Injectable({
  providedIn: 'root'
})
export class Contract {
    contractManager: ContractDto = new ContractDto();

    // Get All
    async getClients() {
        return this.contractManager.clients;
    }

    async getEmployees() {
        return this.contractManager.employees;
    }

    async getProjects() {
        return this.contractManager.projects;
    }

    async getAssignments() {
        return this.contractManager.assignments;
    }

    async getInvoces() {
        return this.contractManager.invoices;
    }

    async getTimesheets() {
        return this.contractManager.timesheets;
    }

    async getPayments() {
        return this.contractManager.payments;
    }

    // Add
    async addClient(client: ClientDto) {
        this.contractManager.clients.push(client);
    }

    async addEmployee(employee: EmployeeDto) {
        this.contractManager.employees.push(employee);
    }

    async addProject(project: ProjectDto) {
        this.contractManager.projects.push(project);
    }

    async addAssignment(assignment: AssignmentDto) {
        this.contractManager.assignments.push(assignment);
    }

    async addInvoce(invoice: InvoiceDto) {
        this.contractManager.invoices.push(invoice);
    }

    async addTimesheet(timesheet: TimesheetDto) {
        this.contractManager.timesheets.push(timesheet);
    }

    async addPayment(payment: PaymentDto) {
        this.contractManager.payments.push(payment);
    }

    // Update
    async updateClient(client: ClientDto) {
        const index = this.contractManager.clients.findIndex(o => o.id == client.id);
        index >= 0 ? this.contractManager.clients.splice(index, 1, client) : null;
    }

    async updateEmployee(employee: EmployeeDto) {
        const index = this.contractManager.employees.findIndex(o => o.id == employee.id);
        index >= 0 ? this.contractManager.employees.splice(index, 1, employee) : null;
    }

    async updateProject(project: ProjectDto) {
        const index = this.contractManager.projects.findIndex(o => o.id == project.id);
        index >= 0 ? this.contractManager.projects.splice(index, 1, project) : null;
    }

    async updateAssignment(assignment: AssignmentDto) {
        const index = this.contractManager.assignments.findIndex(o => o.id == assignment.id);
        index >= 0 ? this.contractManager.assignments.splice(index, 1, assignment) : null;
    }

    async updateInvoce(invoice: InvoiceDto) {
        const index = this.contractManager.invoices.findIndex(o => o.id == invoice.id);
        index >= 0 ? this.contractManager.invoices.splice(index, 1, invoice) : null;
    }

    async updateTimesheet(timesheet: TimesheetDto) {
        const index = this.contractManager.timesheets.findIndex(o => o.id == timesheet.id);
        index >= 0 ? this.contractManager.timesheets.splice(index, 1, timesheet) : null;
    }

    async updatePayment(payment: PaymentDto) {
        const index = this.contractManager.payments.findIndex(o => o.id == payment.id);
        index >= 0 ? this.contractManager.payments.splice(index, 1, payment) : null;
    }

    // Delete
    async deleteClient(client: ClientDto) {
        const index = this.contractManager.clients.findIndex(o => o.id == client.id);
        index >= 0 ? this.contractManager.clients.splice(index, 1) : null;
    }

    async deleteEmployee(employee: EmployeeDto) {
        const index = this.contractManager.employees.findIndex(o => o.id == employee.id);
        index >= 0 ? this.contractManager.employees.splice(index, 1) : null;
    }

    async deleteProject(project: ProjectDto) {
        const index = this.contractManager.projects.findIndex(o => o.id == project.id);
        index >= 0 ? this.contractManager.projects.splice(index, 1) : null;
    }

    async deleteAssignment(assignment: AssignmentDto) {
        const index = this.contractManager.assignments.findIndex(o => o.id == assignment.id);
        index >= 0 ? this.contractManager.assignments.splice(index, 1) : null;
    }

    async deleteInvoce(invoice: InvoiceDto) {
        const index = this.contractManager.invoices.findIndex(o => o.id == invoice.id);
        index >= 0 ? this.contractManager.invoices.splice(index, 1) : null;
    }

    async deleteTimesheet(timesheet: TimesheetDto) {
        const index = this.contractManager.timesheets.findIndex(o => o.id == timesheet.id);
        index >= 0 ? this.contractManager.timesheets.splice(index, 1) : null;
    }

    async deletePayment(payment: PaymentDto) {
        const index = this.contractManager.payments.findIndex(o => o.id == payment.id);
        index >= 0 ? this.contractManager.payments.splice(index, 1) : null;
    }
}