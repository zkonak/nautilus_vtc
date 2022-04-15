const invoiceData = async (dataUser, dataReservation, dataPayment) => {
  const date = new Date(dataReservation.dateDepart);
  // const dateString = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  const dateString = date.toISOString().slice(0, 10);

  // Example

  const invoiceData = {
    addresses: {
      //   shipping: {
      //     name:dataUser.name,
      //     address: dataUser.address,
      //     city: 'San Francisco',
      //     state: 'CA',
      //     country: 'US',
      //     postalCode: 94118,
      //   },
      billing: {
        name: `${dataUser.name} ${dataUser.lastname}`,
        address: dataUser.address,
        city: '',
        state: '',
        country: 'France',

      },
    },
    // memo: 'As discussed',
    items: [{
      itemCode: dateString,
      description: 'Frais de service transport',
      // quantity: 2,
      // price: 3000,
      price: dataReservation.price.toString().replace('.', ','),
    }, // , {
      //   itemCode: 12342,
      //   description: 'Printer',
      //   quantity: 1,
      //   price: 2000,
      //   amount: 2000,
      // },
    ],
    tax: dataReservation.tax.toString().replace('.', ','),
    subtotal: (dataReservation.price + dataReservation.tax).toString().replace('.', ','),
    invoiceNumber: `${dataPayment.id}`,
    dueDate: dateString,
  };

  return invoiceData;
};

export default invoiceData;
