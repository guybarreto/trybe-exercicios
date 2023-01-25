const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const customerName = order.name;
    const customerPhoneNumber = order.phoneNumber;
    const customerAddressStreet = order.address.street;
    const adressNumber = order.address.number;
    const apartmentNumber = order.address.apartment;

    console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhoneNumber}, R. ${customerAddressStreet}, Nº: ${adressNumber}, AP: ${apartmentNumber}`);
  
  };
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const newCustomer = order['name'] = 'Luiz Silva';
    const newTotalDot = order['payment']['total'] = 50;
    const newTotal = newTotalDot.toFixed(2).replace('.', ',');
    const pizzaToppings = Object.keys(order['order']['pizza']);
    const pizzaTopping1 = pizzaToppings[0];
    const pizzaTopping2 = pizzaToppings[1];
    const drink = order['order']['drinks']['coke']['type'];
    
    console.log(`Olá ${newCustomer}, o total do seu pedido de ${pizzaTopping1}, ${pizzaTopping2} e ${drink} é R$ ${newTotal}.`);
  };
  
  orderModifier(order);