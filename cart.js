$(document).ready(function () {
    let cart = [];
    let total = 0;

    
    function updateCart() {
        $("#cart-items").empty();
        total = 0;

        cart.forEach((item, index) => {
            $("#cart-items").append(`
                <li>
                    ${item.name} - R$${item.price.toFixed(2)} x${item.quantity}
                    <button class="remove-btn" data-index="${index}">Remover</button>
                </li>
            `);
            total += item.price * item.quantity;
        });

        $("#cart-count").text(cart.reduce((sum, item) => sum + item.quantity, 0));
        $("#cart-total").text(`R$ ${total.toFixed(2)}`);

      
        $(".remove-btn").click(function () {
            const index = $(this).data("index");
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
            } else {
                cart.splice(index, 1); 
            }
            updateCart();
        });
    }

  
    $("#cart-icon").click(function () {
        $("#cart-popup").fadeToggle(200); 
    });

    $(".dish .btn-default").click(function () {
        const dish = $(this).closest(".dish");
        const name = dish.find(".dish-title").text();
        const priceText = dish.find(".dish-price h4").text().replace("R$", "").replace(",", ".").replace("uni", "");
        const price = parseFloat(priceText.trim());
        
        if (!isNaN(price)) {
            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name, price, quantity: 1 });
            }
            updateCart();
        }
    });


    $("#checkout-btn").click(function () {
        if (cart.length === 0) {
            alert("Seu carrinho está vazio!");
            return;
        }

        let message = "Olá! Gostaria de fazer o pedido:\n\n";
        cart.forEach(item => {
            message += `- ${item.name} x${item.quantity}\n`;
        });

        const url = `https://wa.me/5511975402514?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });
});

$(document).ready(function () {
   
    $("#cart-icon").click(function (event) {
        event.stopPropagation(); 
        $("#cart-popup").toggleClass("hidden");
    });

  
    $("#cart-popup").click(function (event) {
        event.stopPropagation();
    });

    $(document).click(function () {
        $("#cart-popup").addClass("hidden");
    });

   
    $(window).resize(function () {
        $("#cart-popup").addClass("hidden");
    });
});