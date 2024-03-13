var arr = [];
function save() {
    var a = {
        name: document.getElementById('name').value,
        id: document.getElementById('id').value,
        prdname: document.getElementById('namePro').value,
        quantity: document.getElementById('quantity').value,
        price: document.getElementById('price').value,
    }
    console.log(a);
    arr.push(a);

}
function show() {
    var html = '';
    for (i in arr) {
        var n = i;
        n++;
        html += "<tr >"
        html += "<td>" + (n) + "</td>";
        html += "<td>" + arr[i].name + "</td>";
        html += "<td>" + arr[i].id + "</td>";
        html += "<td>" + arr[i].prdname + "</td>";
        html += "<td>" + arr[i].quantity + "</td>";
        html += "<td>" + arr[i].price + "</td>";
        html += "<td>" + parseFloat(arr[i].quantity) + parseFloat(arr[i].price) + "</td";
        html += "</tr>";
        document.getElementById('tbl').innerHTML = html
    }
}
function reset() {
    docudemt.getElementById('name').value = '';
    docudemt.getElementById('id').value = '';
    docudemt.getElementById('prdname').value = '';
    docudemt.getElementById('quantity').value = '';
    docudemt.getElementById('price').value = '';
}