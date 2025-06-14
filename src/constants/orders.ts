import {Order} from '../@types/order';

export const tabs = ['WH', 'Customer', 'SC'];

export const ordersList: Order[] = [
  {
    pickupCenter: 'Pickup Center-1',
    orderNumber: '#1120',
    mealType: 'Dinner',
    deliveryTime: '07:30 PM',
    status: {
      label: 'Pickup Pending',
      color: 'lightred',
      code: 'PP',
    },
    customer: {
      name: 'Aman Sharma',
      callEnabled: true,
    },
    pickupAddress: {
      title: 'Pickup Center-1',
      address: 'Nikhita Stores, 201/B, Nirant Apts, Andheri East 400069',
      callEnabled: true,
      navigateEnabled: true,
    },
    deliveryAddress: {
      title: 'Delivery',
      address: '201/D, Ananta Apts, Near Jal Bhawan, Andheri 400069',
      callEnabled: true,
      navigateEnabled: true,
    },
    deliveryPickup: {
      label: 'Delivery Pickup By',
      dueTime: 'Tomorrow 5:30 PM, Thu, 25/08/2023',
      timeLeft: '1:04 Hrs',
    },
    updateStatus: {
      label: 'Update Status',
      options: ['Select an option'],
    },
  },
  {
    pickupCenter: 'Pickup Center-1',
    orderNumber: '#1121',
    mealType: 'Dinner',
    deliveryTime: '08:30 PM',
    status: {
      label: 'Pickup Failed',
      color: 'lightred',
      code: 'PF',
    },
    customer: {
      name: 'Aman Sharma',
      callEnabled: true,
    },
    pickupAddress: {
      title: 'Pickup Center-1',
      address: 'Nikhita Stores, 201/B, Nirant Apts, Andheri East 400069',
      callEnabled: true,
      navigateEnabled: true,
    },
    deliveryAddress: {
      title: 'Delivery',
      address: '201/D, Ananta Apts, Near Jal Bhawan, Andheri 400069',
      callEnabled: true,
      navigateEnabled: true,
    },
    deliveryPickup: {
      label: 'Delivery Pickup By',
      dueTime: 'Tomorrow 5:30 PM, Thu, 25/08/2023',
      timeLeft: '1:04 Hrs',
    },
    updateStatus: {
      label: 'Update Status',
      options: ['Select an option'],
    },
  },
  {
    pickupCenter: 'Pickup Center-1',
    orderNumber: '#1122',
    mealType: 'Dinner',
    deliveryTime: '08:30 PM',
    status: {
      label: 'Delivery Failed',
      color: 'lightred',
      code: 'DF',
    },
    customer: {
      name: 'Aman Sharma',
      callEnabled: true,
    },
    pickupAddress: {
      title: 'Pickup Center-1',
      address: 'Nikhita Stores, 201/B, Nirant Apts, Andheri East 400069',
      callEnabled: true,
      navigateEnabled: true,
    },
    deliveryAddress: {
      title: 'Delivery',
      address: '201/D, Ananta Apts, Near Jal Bhawan, Andheri 400069',
      callEnabled: true,
      navigateEnabled: true,
    },
    deliveryPickup: {
      label: 'Delivery Pickup By',
      dueTime: 'Tomorrow 5:30 PM, Thu, 25/08/2023',
      timeLeft: '1:04 Hrs',
    },
    updateStatus: {
      label: 'Update Status',
      options: ['Select an option'],
    },
  },
  {
    pickupCenter: 'Pickup Center-1',
    orderNumber: '#1123',
    mealType: 'Dinner',
    deliveryTime: '08:30 PM',
    status: {
      label: 'Pickup Rescheduled',
      color: 'lightred',
      code: 'PR',
    },
    customer: {
      name: 'Aman Sharma',
      callEnabled: true,
    },
    pickupAddress: {
      title: 'Pickup Center-1',
      address: 'Nikhita Stores, 201/B, Nirant Apts, Andheri East 400069',
      callEnabled: true,
      navigateEnabled: true,
    },
    deliveryAddress: {
      title: 'Delivery',
      address: '201/D, Ananta Apts, Near Jal Bhawan, Andheri 400069',
      callEnabled: true,
      navigateEnabled: true,
    },
    deliveryPickup: {
      label: 'Delivery Pickup By',
      dueTime: 'Tomorrow 5:30 PM, Thu, 25/08/2023',
      timeLeft: '1:04 Hrs',
    },
    updateStatus: {
      label: 'Update Status',
      options: ['Select an option'],
    },
  },
  {
    pickupCenter: 'Pickup Center-1',
    orderNumber: '#1124',
    mealType: 'Dinner',
    deliveryTime: '08:30 PM',
    status: {
      label: 'Delivered',
      color: 'lightred',
      code: 'D',
    },
    customer: {
      name: 'Aman Sharma',
      callEnabled: true,
    },
    pickupAddress: {
      title: 'Pickup Center-1',
      address: 'Nikhita Stores, 201/B, Nirant Apts, Andheri East 400069',
      callEnabled: true,
      navigateEnabled: true,
    },
    deliveryAddress: {
      title: 'Delivery',
      address: '201/D, Ananta Apts, Near Jal Bhawan, Andheri 400069',
      callEnabled: true,
      navigateEnabled: true,
    },
    deliveryPickup: {
      label: 'Delivery Pickup By',
      dueTime: 'Tomorrow 5:30 PM, Thu, 25/08/2023',
      timeLeft: '1:04 Hrs',
    },
    updateStatus: {
      label: 'Update Status',
      options: ['Select an option'],
    },
  },
  {
    pickupCenter: 'Pickup Center-1',
    orderNumber: '#1125',
    mealType: 'Dinner',
    deliveryTime: '08:30 PM',
    status: {
      label: 'Delivery Pending',
      color: 'lightred',
      code: 'DP',
    },
    customer: {
      name: 'Aman Sharma',
      callEnabled: true,
    },
    pickupAddress: {
      title: 'Pickup Center-1',
      address: 'Nikhita Stores, 201/B, Nirant Apts, Andheri East 400069',
      callEnabled: true,
      navigateEnabled: true,
    },
    deliveryAddress: {
      title: 'Delivery',
      address: '201/D, Ananta Apts, Near Jal Bhawan, Andheri 400069',
      callEnabled: true,
      navigateEnabled: true,
    },
    deliveryPickup: {
      label: 'Delivery Pickup By',
      dueTime: 'Tomorrow 5:30 PM, Thu, 25/08/2023',
      timeLeft: '1:04 Hrs',
    },
    updateStatus: {
      label: 'Update Status',
      options: ['Select an option'],
    },
  },
  {
    pickupCenter: 'Pickup Center-1',
    orderNumber: '#1126',
    mealType: 'Dinner',
    deliveryTime: '08:30 PM',
    status: {
      label: 'Delivery Rescheduled',
      color: 'lightred',
      code: 'DR',
    },
    customer: {
      name: 'Aman Sharma',
      callEnabled: true,
    },
    pickupAddress: {
      title: 'Pickup Center-1',
      address: 'Nikhita Stores, 201/B, Nirant Apts, Andheri East 400069',
      callEnabled: true,
      navigateEnabled: true,
    },
    deliveryAddress: {
      title: 'Delivery',
      address: '201/D, Ananta Apts, Near Jal Bhawan, Andheri 400069',
      callEnabled: true,
      navigateEnabled: true,
    },
    deliveryPickup: {
      label: 'Delivery Pickup By',
      dueTime: 'Tomorrow 5:30 PM, Thu, 25/08/2023',
      timeLeft: '1:04 Hrs',
    },
    updateStatus: {
      label: 'Update Status',
      options: ['Select an option'],
    },
  },
];
