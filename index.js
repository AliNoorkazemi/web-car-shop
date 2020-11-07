const allButton = document.getElementById('all');
const benzButton = document.getElementById('benz');
const bmwButton = document.getElementById('bmw');
const lamborghiniButton = document.getElementById('lamborghini');
const maclarenButton = document.getElementById('maclaren');
const ferrariButton = document.getElementById('ferrari');
const astonMartinButton = document.getElementById('astonMartin');
var store_table_rows = document.getElementsByClassName('store-table-rows');

allButton.addEventListener('click', function() {
    for (let i = 0; i < store_table_rows.length; i++) {
        store_table_rows[i].style.display = '';
    }
});
benzButton.addEventListener('click', function() {
    for (let i = 0; i < store_table_rows.length; i++) {
        if (store_table_rows[i].id == 'benz-images')
            store_table_rows[i].style.display = '';
        else
            store_table_rows[i].style.display = 'none';
    }
});
bmwButton.addEventListener('click', function() {
    for (let i = 0; i < store_table_rows.length; i++) {
        if (store_table_rows[i].id == 'bmw-images')
            store_table_rows[i].style.display = '';
        else
            store_table_rows[i].style.display = 'none';
    }
});
lamborghiniButton.addEventListener('click', function() {
    for (let i = 0; i < store_table_rows.length; i++) {
        if (store_table_rows[i].id == 'lamborghini-images')
            store_table_rows[i].style.display = '';
        else
            store_table_rows[i].style.display = 'none';
    }
});
maclarenButton.addEventListener('click', function() {
    for (let i = 0; i < store_table_rows.length; i++) {
        if (store_table_rows[i].id == 'maclaren-images')
            store_table_rows[i].style.display = '';
        else
            store_table_rows[i].style.display = 'none';
    }
});
ferrariButton.addEventListener('click', function() {
    for (let i = 0; i < store_table_rows.length; i++) {
        if (store_table_rows[i].id == 'ferrari-images')
            store_table_rows[i].style.display = '';
        else
            store_table_rows[i].style.display = 'none';
    }
});
astonMartinButton.addEventListener('click', function() {
    for (let i = 0; i < store_table_rows.length; i++) {
        if (store_table_rows[i].id == 'astonMartin-images')
            store_table_rows[i].style.display = '';
        else
            store_table_rows[i].style.display = 'none';
    }
});