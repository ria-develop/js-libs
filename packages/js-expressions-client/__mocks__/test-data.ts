export const input = {
  user: {
    id: 'uid1',
    firstName: 'John',
    lastName: 'Doe',
    address: 'st. Middle Of Nowhere 4'
  },
  products: [
    [
      {
        name: 'Product 1',
        selected: true
      }
    ],
    [
      {
        name: 'Product 2',
        userComment: 'Need to be reviewed',
        selected: false
      }
    ]
  ],
  options: {
    selectedLocations: ['Location1', 'Location3'],
    deliveryDate: new Date(2021, 1, 2)
  }
};

type InputData = { user; products; options };

const findCompleted = (items) => items.filter((basket) => !basket.some((product) => !product.selected));

const getIfCompleted = (found, numItems) => (found.length === numItems ? found : undefined);

const options = (data) => data.options;

const deliveryDate = (data) => options(data).deliveryDate;

const selectedLocations = (data) => options(data).selectedLocations;

const delivery = (data: InputData): string => deliveryDate(data)?.toISOString();

const locations = (data: InputData): string[] =>
  selectedLocations(data).map((location: string) => (deliveryDate(data) ? location : 'Default'));

const orders = (data: InputData): [] | undefined => getIfCompleted(findCompleted(data.products), data.products.length);

const user = '{user.firstName} {user.lastName}';

const data = [{
  user,
  orders
}, {
  locations
}]

const request = {
  delivery,
  data
}

export const outputShape = {
  request
}
