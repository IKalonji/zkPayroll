// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract ZKPayroll {

    address ADMIN;
    /*
    export class ClientDto {

};

export class EmployeeDto {

};

export enum ProjectStatus {
    Completed,
    InProgress,
    Pending
};

export class ProjectDto {

};

export class AssignmentDto {

};

export class TimesheetDto {

};

export class InvoiceDto {

}

export class PaymentDto {

};

    */
    enum ProjectStatus { Completed, InProgress, Pending} 

    struct Client {
    string id;
    string name;
    string email;
    string number;
    string  date;
    }

    struct Assignment {
    string id;
    string employeeId;
    string projectId;
    string date;
    }

    struct Employee {
    string id;
    string firstName;
    string lastName;
    address walletAddress;
    }

    struct Timesheet {
    string id;
    string employeeId;
    string projectId;
    uint _hours;
    bool isInvoiced;
    }

    struct Project {
    string id;
    string clientId;
    string title;
    string description;
    uint rate;
    string startDate;
    string endDate;
    ProjectStatus status;
    }

    struct Invoice {
    string id;
    string employeeId;
    string description;
    string[] timesheetIds;
    bool isPaid;
    }

    struct Payment {
        string id;
        string invoiceId;
        uint amount;
    }

    mapping (address => Employee) employeeMapping;
    mapping (address => Client) clientMapping;
    mapping (address => Invoice) clientInvoiceMapping;
    Project[] projects;
    Timesheet[] timesheets;

    event EmployeeCreated(address Employee);
    event ClientCreated(address Client);
    event ProjectCreated(address Client, string _projectName);
    event PaymentMade(address employee);
    event InvoiceCreated(address client);
    event TimesheetCreated(address employee);

    modifier OnlyAdmin() {
        require(msg.sender == ADMIN, "Only Admin");
        _;
    }

    constructor() {
        ADMIN = msg.sender;
    }

    function addEmployee(
    string memory _id,
    string memory _firstName,
    string memory _lastName,
    address walletAddress
    ) external OnlyAdmin() {
        employeeMapping[walletAddress] = Employee(_id, _firstName, _lastName, walletAddress);
        emit EmployeeCreated(walletAddress);
    }

    function addClient(
    string memory _id,
    string memory _name,
    string memory _email,
    string memory _number,
    string memory _date,
        address _clientWallet
    ) external OnlyAdmin() {
        Client memory _client;
        _client.id = _id;
        _client.name = _name;
        _client.email = _email;
        _client.number = _number;
        _client.date = _date;
        clientMapping[_clientWallet] = _client;
        emit ClientCreated(_clientWallet);
    }

    function addClientProject(
    string memory id,
    string memory clientId,
    string memory title,
    string memory description,
    uint rate,
    string memory startDate,
    string memory endDate,
    address _clientAddress
    ) external OnlyAdmin() {
        Project memory _project;
        _project.id = id;
        _project.clientId = clientId;
        _project.title = title;
        _project.description = description;
        _project.rate = rate;
        _project.startDate = startDate;
        _project.endDate = endDate;
        _project.status = ProjectStatus.InProgress;
        projects.push(_project);
        emit ProjectCreated(_clientAddress, title);
    }

    function addClientInvoice(
    string memory id,
    string memory employeeId,
    string memory description,
    string[] memory timesheetIds,
    address clientAddress
    ) external OnlyAdmin() {
        Invoice memory _invoice;
        _invoice.id = id;
        _invoice.employeeId = employeeId;
        _invoice.description = description;
        _invoice.timesheetIds = timesheetIds;
        _invoice.isPaid = false;
        clientInvoiceMapping[clientAddress] = _invoice;
        emit InvoiceCreated(clientAddress);
    }

    function employeeTimesheetCapture(
    string memory id,
    string memory employeeId,
    string memory projectId,
    uint _hours
    ) external {
        require(employeeMapping[msg.sender].walletAddress != address(0), "Not an employee");
        Timesheet memory _timesheet = Timesheet(id, employeeId, projectId, _hours, false);
        timesheets.push(_timesheet);
        emit TimesheetCreated(msg.sender);
    }


}