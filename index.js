document.addEventListener('DOMContentLoaded', () => {
    const tableContainer = document.querySelector('.table-container');
    const submitButton = document.querySelector('#submitBtn');

    for (let i = 0; i < 3; i++) {
        const clonedTableContainer = tableContainer.cloneNode(true);
        tableContainer.parentNode.insertBefore(clonedTableContainer, tableContainer.nextSibling);

        const smallInputs = clonedTableContainer.querySelectorAll('.small-input');
        const sumInput = clonedTableContainer.querySelector('.sum-input');

        smallInputs.forEach(input => {
            input.addEventListener('input', () => {
                let sum = 0;
                smallInputs.forEach(input => {
                    sum += parseInt(input.value) || 0;
                });
                sumInput.value = sum;
            });
        });
    }

    submitButton.addEventListener('click', event => {
        event.preventDefault(); // Prevent the default form submission

        // Create an array to store the table contents
        const tableContents = [];

        // Get the table
        const table = document.getElementById('golfTable');

        // Get the table rows
        const rows = Array.from(document.querySelectorAll('tr'));

        // Loop through each row
        const rowData = rows.map(row => {
            // Get the table cells in the row
            const cells = Array.from(row.querySelectorAll('th, td'));

            // Extract the cell values
            const cellData = cells.map(cell => {
                if (cell.tagName === 'TD') {
                    const input = cell.querySelector('input');
                    return input ? input.value.trim() : ''; // Get the trimmed input field value if available, or an empty string
                } else {
                    return cell.textContent.trim(); // Get the trimmed cell value for th elements
                }
            });

            return cellData.join(','); // Join the cell values with commas
        });


        tableContents.push(rowData.join('\n')); // Join the row data with line breaks

        // const toEmail = 'cincitkyle@gmail.com';
        const toEmail = 'kylefe@miamioh.edu';
        var data = {
            service_id: 'service_8edmhy5',
            template_id: 'template_qcx0dtf',
            user_id: 'YPjF8uGmhJBRw_Ta-',
            template_params: {
                'body': tableContents.join('\n\n'), // Combine the table contents into a single string
                'email': toEmail
            }
        };

        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function () {
            alert('🏌️ FORM! Submitted.');
        }).fail(function (error) {
            alert('Oops... ' + JSON.stringify(error));
        });
    });
});
