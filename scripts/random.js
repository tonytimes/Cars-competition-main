const totalTickets = 100;  // Total number of available tickets
const ticketList = Array.from({ length: totalTickets }, (_, i) => `TICKET-${i + 1}`);
const purchasedTickets = [];

function purchaseTickets() {
    const name = document.getElementById('nameInput').value;
    const numOfTickets = parseInt(document.getElementById('ticketInput').value);

    if (!name || isNaN(numOfTickets)) {
        alert('Please enter your name and the number of tickets.');
        return;
    }

    if (numOfTickets < 1 || numOfTickets > totalTickets) {
        alert(`Invalid number of tickets. Please choose between 1 and ${totalTickets}.`);
        return;
    }

    if (numOfTickets > ticketList.length) {
        alert(`Not enough tickets available. Only ${ticketList.length} tickets left.`);
        return;
    }

    const assignedTickets = ticketList.splice(0, numOfTickets);

    purchasedTickets.push({
        name: name,
        tickets: assignedTickets,
    });

    const purchaseOutput = document.getElementById('purchaseOutput');
    purchaseOutput.innerHTML += `${name} has purchased tickets: ${assignedTickets.join(", ")}<br>`;
}

function conductDraw() {
    const winningTicketNumber = parseInt(document.getElementById('winningTicketInput').value);
    if (isNaN(winningTicketNumber) || winningTicketNumber < 1 || winningTicketNumber > totalTickets) {
        alert('Please enter a valid winning ticket number.');
        return;
    }

    const winningTicket = `TICKET-${winningTicketNumber}`;
    const winner = purchasedTickets.find(person =>
        person.tickets.includes(winningTicket)
    );

    const drawOutput = document.getElementById('drawOutput');
    if (winner) {
        drawOutput.innerHTML = `The winning ticket is ${winningTicket}. Congratulations, ${winner.name}!`;
    } else {
        drawOutput.innerHTML = `The winning ticket is ${winningTicket}, but it wasn't purchased by anyone.`;
    }
}
