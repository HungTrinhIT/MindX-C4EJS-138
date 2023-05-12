const cartBody = document.querySelector("#cart-body");
let cart = [];

const loadCartInformation = () => {
  const cartInString = localStorage.getItem("cart");
  cart = JSON.parse(cartInString) || [];
};
loadCartInformation();

const renderCart = () => {
  const cartBodyItems = cart.map((cartItem) => {
    const { title, price, id, quantity } = cartItem;
    return `
          <tr>
            <th scope="row">${id}</th>
            <td>${title}</td>
            <td>${quantity}</td>
            <td>${price}</td>
            <td>${quantity * price}</td>
          </tr>
      `;
  });

  cartBody.innerHTML = cartBodyItems.join("");
};

renderCart();
