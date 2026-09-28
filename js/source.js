$(function () {

    let revenueAmt = "$48,250";
    let customerNum = "1,284";
    let ordersAmt = "342";
    let issuesAmt = "12";
    let username = "UTRGV Vaqueros";
    let notifAmt = 3;

    const customers = [
        {
            "name": "Alice Johnson",
            "email": "alice@example.com",
            "status": "Active",
            "joined": "09/10/2026"
        },
        {
            "name": "Robert Smith",
            "email": "robert@example.com",
            "status": "Pending",
            "joined": "09/12/2026"
        },
        {
            "name": "Maria Garcia",
            "email": "maria@example.com",
            "status": "Active",
            "joined": "09/15/2026"
        }
    ];

    const sales = [
        {
            "product": "Product A",
            "quantity": "124",
            "revenue": "$12,400"
        },
        {
            "product": "Product B",
            "quantity": "98",
            "revenue": "$9,800"
        },
        {
            "product": "Product C",
            "quantity": "75",
            "revenue": "$7,500"
        },
    ];

    const activities = [
        {
            "message" : "New customer registered"
        },
        {
            "message" : "Order #10482 completed"
        },
        {
            "message" : "Payment received"
        },
        {
            "message" : "Support ticket created"
        }
    ];

    const messages = [
        {
            "messsage" : "All systems operational"
        },
        {
            "messsage" : "All settings loaded for this system"
        }
    ];

    const notifications = [
        {
            "messsage": "A new shipment is expected to arrive on Sep 30, 2026"
        },
        {
            "messsage": "There are 12 outstanding issues with last week's orders"
        },
        {
            "messsage": "Three new customers joined our platform in the last month"
        },
    ];

    const tasks = [
       {
            "messsage": "Review orders"
        },
        {
            "messsage": "Contact customer"
        },
        {
            "messsage": "Generate report"
        },
    ]


    // *********************************************************************
    // Do not modify the JS objects above. You will write your code below.
    // *********************************************************************

    $("#username").text(username);
    $(".revenue-amt").text(revenueAmt);
    $("#customer-num").text(customerNum);
    $("#orders-amt").text(ordersAmt);
    $("#issues-amt").text(issuesAmt);
    $("#notification-num").text(notifAmt);

    SalesTab = $('#salesTableBody');

    sales.forEach(sale =>{
        const SalesItem = $("<tr>");
        SalesItem.html(`<td>${sale.product}</td><td>${sale.quantity}</td><td>${sale.revenue}</td>`);
        SalesTab.append(SalesItem);
    });

    activLi = $('#activity-list');

    activities.forEach(activity =>{
        const ActivityItem = $("<li>");
        ActivityItem.html(`${activity.message}`);
        activLi.append(ActivityItem);
    });

    custom = $('#customerTableBody');

    customers.forEach(customer =>{
        const CustomerItem = $("<tr>");
        CustomerItem.html(`
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td><span class="status status-${customer.status.toLowerCase()}">${customer.status}</span></td>
            <td>${customer.joined}</td>`);
        custom.append(CustomerItem);
    });

    systemStat = $('#system-status-list');

    messages.forEach(message =>{
        const MessageItem = $("<li>");
        MessageItem.html(`${message.messsage}`);
        systemStat.append(MessageItem);
    });


    NoteList = $('#notifications-list');

    notifications.forEach(notification =>{
        const NotificationItem = $("<li>");
        NotificationItem.html(`${notification.messsage}`);
        NoteList.append(NotificationItem);
    });

    Taskli = $('#tasks-list');

    tasks.forEach(task =>{
        const TaskItem = $("<li>");
        TaskItem.html(`${task.messsage}`);
        Taskli.append(TaskItem);
    });

        // converts all HTML buttons to jQuery UI buttons
    $("button, input[type='button'], input[type='submit']").button();

        //converts element id dashboardTabs to a jQuery UI Tabs widget
    $("#dashboardTabs").tabs();

    $("#customerDialog").dialog({

        autoOpen: false,
        modal: true,
        width: 450,
        buttons: {
            "Create Customer": function () {
              var name = $("#customerName").val();
              var email = $("#customerEmail").val();
            if (!name || !email) {
                alert(
                    "Please enter a name and email."
                );
                return;
            }
            alert("Customer created: " + name);
            $(this).dialog("close");
            },
            "Cancel": function () {
               $(this).dialog("close");
            }
        }   
    });

    //event listener for button trigger
    $("#newCustomerButton").on("click", function () {
        $("#customerDialog").dialog("open");
    });

    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });

    $("#customerDate").datepicker();
});