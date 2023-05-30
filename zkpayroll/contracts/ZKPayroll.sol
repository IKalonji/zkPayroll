// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract ZKPayroll {

    address ADMIN;

    struct Client {
        string UUID;
        string name;
        Project project;
    }

    struct Assignment {
        string UUID;
        uint clientID;
        uint employeeID;
        uint assignmentID;
        uint assignmentDate;
    }

    struct Employee {
        string UUID;
        string name;
        bool created;
    }

    struct Timesheet {
        string UUID;
        Client client;
        uint hoursWorked;
    }

    struct Project {
        string UUID;
        string name;
        string description;
        uint startDate;
        uint endDate;
    }

    struct Invoice {
        string UUID;
        uint hoursWorked;
        uint rate;
        string status;
    }

    struct Payment {
        string UUID;
        uint invoiceID;
        uint amount;
    }

    mapping (address => Employee) employeeMapping;
    mapping (address => Client) clientMapping;
    mapping (address => Invoice) clientInvoiceMapping;
    mapping (address => Timesheet[]) employeeTimesheet;

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
        string memory _UUID,
        string memory _name,
        address _employeeWallet
    ) external OnlyAdmin() {
        employeeMapping[_employeeWallet] = Employee(_UUID, _name, true);
        emit EmployeeCreated(_employeeWallet);
    }

    function addClient(
        string memory _UUID,
        string memory _name,
        address _clientWallet
    ) external OnlyAdmin() {
        Client memory _client;
        _client.UUID = _UUID;
        _client.name = _name;
        clientMapping[_clientWallet] = _client;
        emit ClientCreated(_clientWallet);
    }

    function addClientProject(
        string memory _UUID,
        string memory _name,
        string memory _description,
        uint _startDate,
        uint _endDate,
        address _clientAddress
    ) external OnlyAdmin() {
        Project memory _project;
        _project.UUID = _UUID;
        _project.name = _name;
        _project.description = _description;
        _project.startDate = _startDate;
        _project.endDate = _endDate;
        clientMapping[_clientAddress].project = _project;
        emit ProjectCreated(_clientAddress, _name);
    }

    function addClientInvoice(
        string memory _UUID,
        uint hoursWorked,
        uint rate,
        string memory status,
        address _clientAddress
    ) external OnlyAdmin() {
        Invoice memory _invoice;
        _invoice.UUID = _UUID;
        _invoice.hoursWorked = hoursWorked;
        _invoice.rate = rate;
        _invoice.status = status;
        clientInvoiceMapping[_clientAddress] = _invoice;
        emit InvoiceCreated(_clientAddress);
    }

    function employeeTimesheetCapture(
        string memory _UUID,
        address _clientAddress,
        uint _hoursWorked
    ) external {
        require(employeeMapping[msg.sender].created != false, "Not an employee");
        Client storage _client = clientMapping[_clientAddress];
        Timesheet memory _timesheet = Timesheet(_UUID, _client, _hoursWorked);
        employeeTimesheet[msg.sender].push(_timesheet);
        emit TimesheetCreated(msg.sender);
    }


}