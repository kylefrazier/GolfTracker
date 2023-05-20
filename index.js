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

        const cells = Array.from(document.querySelectorAll('td'));

        // Extract the cell values
        cellData = cells.map(cell => {
            if (cell.tagName === 'TD') {
                const input = cell.querySelector('input');
                return input ? input.value.trim() : ''; // Get the trimmed input field value if available, or an empty string
            } else {
                return cell.textContent.trim(); // Get the trimmed cell value for th elements
            }
        });

        console.log(cellData)

        // const toEmail = 'cincitkyle@gmail.com';
        const toEmail = 'kylefe@miamioh.edu';
        var data = {
            service_id: 'service_8edmhy5',
            template_id: 'template_qcx0dtf',
            user_id: 'YPjF8uGmhJBRw_Ta-',
            template_params: {
                '1': cellData[0],
                '2': cellData[1],
                '3': cellData[2],
                '4': cellData[3],
                '5': cellData[4],
                '6': cellData[5],
                '7': cellData[6],
                '8': cellData[7],
                '9': cellData[8],
                '10': cellData[9],
                '11': cellData[10],
                '12': cellData[11],
                '13': cellData[12],
                '14': cellData[13],
                '15': cellData[14],
                '16': cellData[15],
                '17': cellData[16],
                '18': cellData[17],
                '19': cellData[18],
                '20': cellData[19],
                '21': cellData[20],
                '22': cellData[21],
                '23': cellData[22],
                '24': cellData[23],
                '25': cellData[24],
                '26': cellData[25],
                '27': cellData[26],
                '28': cellData[27],
                '29': cellData[28],
                '30': cellData[29],
                '31': cellData[30],
                '32': cellData[31],
                '33': cellData[32],
                '34': cellData[33],
                '35': cellData[34],
                '36': cellData[35],
                '37': cellData[36],
                '38': cellData[37],
                '39': cellData[38],
                '40': cellData[39],
                '41': cellData[40],
                '42': cellData[41],
                '43': cellData[42],
                '44': cellData[43],
                '45': cellData[44],
                '46': cellData[45],
                '47': cellData[46],
                '48': cellData[47],
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
