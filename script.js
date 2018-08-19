var n = localStorage.getItem('on_load_counter'); 
if (n === null) {
    n = 0;
}
n++; 
localStorage.setItem("on_load_counter", n);

var subminButton = document.getElementById("form-registration-button-1");

subminButton.onclick = function(){
    var ordersLS = localStorage.getItem("orders");
    var orders = [];
    console.log(ordersLS);
    if (ordersLS){
        orders = JSON.parse(ordersLS);
    }
    orders.push(getOrder());
    localStorage.setItem("orders", JSON.stringify(orders));
};

function getFlavores(){
    var checkboxes = $('input.order-form-flavor:checked');
    var flavores = [];
      for (var i=0; i < checkboxes.length; i++){
       flavores.push(checkboxes[i].value);
    }
    return flavores;
}

function getDelivery(){
    var radio = $('input.order-form-delivery:checked');
    return radio[0].value;
}

function getOrder(){
    var order = {     
        date: document.getElementById("date").value,    
        name: document.getElementById("name").value,    
        phone: document.getElementById("phone").value, 
        flavores: getFlavores(),   
        delivery: getDelivery(),   
        comment: document.getElementById("comment").value,  
        adress: document.getElementById("adress").value
    };
    return order;
}








