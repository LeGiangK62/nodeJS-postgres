// database seed
export const members = [
  {
    name: 'Giang',
    email: 'giang@gmail.com',
    dob: '13/09/1999',

  },
  {
    name: 'Le',
    email: 'le@gmail.com',
    dob: '13/09/1999',

  },
  {
    name: 'tung',
    email: 'tung@gmail.com',
    dob: '13/09/1999',

  },
];

export const companies = [
  {
    id: 1,
    name: 'CIST'
  },

  {
    id: 2,
    name: 'CMC'
  },

  {
    id: 3,
    name: 'Google'
  },

  {
    id: 4,
    name: 'Facebook'
  },
];

export const departments = [
  {
    id: 1,
    name: 'AI',
    company_Id: 1
  },

  {
    id: 2,
    name: 'IoT',
    company_Id: 1
  },

  {
    id: 3,
    name: 'PyTorch',
    company_Id: 4
  },

  {
    id: 4,
    name: 'TensorFlow',
    company_Id: 3
  },
];


export const users = [
  {
    id: 1,
    name: 'Giang',
    department_Id: 2
  },

  {
    id: 2,
    name: 'Viet',
    department_Id: 2
  },

  {
    id: 3,
    name: 'Linh',
    department_Id: 4
  },
];

export const results = [
  {
    id: 1,
    name: 'learning',
    user_Id: 1
  },
  
  {
    id: 2,
    name: 'coding',
    user_Id: 1
  },

  {
    id: 3,
    name: 'working',
    user_Id: 2
  },

  {
    id: 4,
    name: 'teaching',
    user_Id: 2
  },
]
