document.addEventListener('DOMContentLoaded', () => {
    const tableContainer = document.querySelector('.table-container');

    for (let i = 0; i < 3; i++) {
        const clonedTableContainer = tableContainer.cloneNode(true);
        tableContainer.parentNode.insertBefore(clonedTableContainer, tableContainer.nextSibling);
    }

    tableContainers.forEach(container => {
        const smallInputs = container.querySelectorAll('.small-input');
        const sumInput = container.querySelector('.sum-input');

        smallInputs.forEach(input => {
            input.addEventListener('input', () => {
                let sum = 0;
                smallInputs.forEach(input => {
                    sum += parseInt(input.value) || 0;
                });
                sumInput.value = sum;
            });
        });
    });

    const submitButton = document.querySelector('#submitBtn');
    submitButton.addEventListener('click', event => {
        event.preventDefault(); // Prevent the default form submission

        // List of all Table Elements
        const tables = document.querySelectorAll('.table');
        let emailBody = '';
        const spacing = '<td colspan="13">|</td>'

        tables.forEach(table => {
            const inputs = table.querySelectorAll('input[type="text"], input[type="number"]');
            let rowContent = '';

            inputs.forEach(input => {
                rowContent += `<td>${input.value}</td>${spacing}`;
            });

            emailBody += `<tr>${rowContent}</tr>`;
        });

        emailBody = `    
            <table>
                <thead>
                    <tr>
                        <th>Name</th>${spacing}
                        <th>HCap</th>${spacing}
                        <th>1</th>${spacing}
                        <th>2</th>${spacing}
                        <th>3</th>${spacing}
                        <th>4</th>${spacing}
                        <th>5</th>${spacing}
                        <th>6</th>${spacing}
                        <th>7</th>${spacing}
                        <th>8</th>${spacing}
                        <th>9</th>${spacing}
                        <th>Sum</th>${spacing}
                    </tr>
                </thead>
                <tbody>
                    ${emailBody}
                </tbody>
            </table>`;

        const toEmail = 'cincitkyle@gmail.com';
        // const toEmail = 'kylefe@miamioh.edu';
        var data = {
            service_id: 'service_8edmhy5',
            template_id: 'template_qcx0dtf',
            user_id: 'YPjF8uGmhJBRw_Ta-',
            template_params: {
                'body': emailBody,
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
